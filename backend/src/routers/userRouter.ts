import express from "express";
import User from "../models/userModel";
import RequestForAccount from "../models/requestForAccountModal";
import RequestForPassChange from "../models/requestForPassChangeModal";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { passwordStrength } from "check-password-strength";
import sgMail from "@sendgrid/mail";
import signupreq from "../emailTemplates/signupreq";
import passreset from "../emailTemplates/passreset";

const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      res.status(400).json({ clientError: "Wrong email or password" });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({
        clientError: "Wrong email or password",
      });

    const correctPassword = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!correctPassword)
      return res.status(401).json({
        clientError: "Wrong email or password",
      });

    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET as string
    );

    res
      .cookie("jwt", token, {
        httpOnly: true,
        sameSite:
          process.env.NODE_ENV === "development"
            ? "lax"
            : process.env.NODE_ENV === "production" && "none",
        secure:
          process.env.NODE_ENV === "development"
            ? false
            : process.env.NODE_ENV === "production" && true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ serverError: "Unexpected error occurred in the server" });
  }
});

router.post("/signupreq", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({
        clientError: "The email is missing",
      });
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        clientError: "An account with this email already exists",
      });
    const key = Math.floor(Math.random() * 1000000);
    const savedRequest = await new RequestForAccount({
      //serialNumber: (await RequestForAccount.find()).length + 1,

      email,
      key,
    }).save();

    sgMail.setApiKey(
      "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" // Very-Sensitive
    );
    const msg = {
      to: email,
      from: "service@neurobica.online",
      subject: "Please Activate your Neurobica account",
      html: signupreq(key),
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Verification email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    res.json({ result: "email successfully sent to " + email });
  } catch (err) {
    console.error(err);
    res.json({ result: "email successfully sent to " });

    res.status(500).json({
      serverError:
        "Unexpected error occurred in the server" + JSON.stringify(err),
    });
  }
});

router.post("/signupfin", async (req, res) => {
  try {
    const { email, key, fullname, password, passwordagain } = req.body;
    if (!email || !key || !fullname || !password || !passwordagain)
      return res.status(400).json({
        clientError: "At least one of the fields are missing",
      });
    const passStrength = passwordStrength(password);
    if (passStrength.id < 2)
      return res.status(400).json({
        clientError:
          "Password isn't strong enough, the value is" +
          passwordStrength(password).value,
      });
    if (password !== passwordagain)
      return res.status(400).json({
        clientError: "Passwords doesn't match",
      });
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        clientError: "An account with this email already exists",
      });
    const existingKey = await RequestForAccount.findOne({ key });
    if (!existingKey || existingKey.email !== email)
      return res.status(400).json({
        clientError: "The key is wrong",
      });
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const savedUser = await new User({
      //serialNumber: (await User.find()).length + 1,
      deactivated: false,
      neurons: 0,
      notifications: false,
      newsletter: false,
      deleted: false,
      email,
      fullname,
      passwordHash,
    }).save();
    const token = jwt.sign(
      {
        id: savedUser._id,
      },
      process.env.JWT_SECRET as string
    );

    res
      .cookie("jwt", token, {
        httpOnly: true,
        sameSite:
          process.env.NODE_ENV === "development"
            ? "lax"
            : process.env.NODE_ENV === "production" && "none",
        secure:
          process.env.NODE_ENV === "development"
            ? false
            : process.env.NODE_ENV === "production" && true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ serverError: "Unexpected error occurred in the server" });
  }
});

router.get("/signedin", async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ clientMessage: "Unauthorized" });
    const validatedUser = jwt.verify(token, process.env.JWT_SECRET as string);
    const userId = (validatedUser as JwtPayload).id;
    res.json(await User.findById(userId));
  } catch (err) {
    return res.status(401).json({ errorMessage: "Unauthorized." });
  }
});

router.get("/signout", async (req, res) => {
  try {
    res
      .cookie("jwt", "", {
        httpOnly: true,
        sameSite:
          process.env.NODE_ENV === "development"
            ? "lax"
            : process.env.NODE_ENV === "production" && "none",
        secure:
          process.env.NODE_ENV === "development"
            ? false
            : process.env.NODE_ENV === "production" && true,
        expires: new Date(0),
      })
      .send();
  } catch (err) {
    return res
      .status(500)
      .json({ errorMessage: "Server Error nichal todo api" });
  }
});

router.post("/passresreq", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({
        clientError: "The email is missing",
      });
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(400).json({
        clientError: "An account with this email couldn't been found",
      });
    const key = Math.floor(Math.random() * 1000000);
    const savedRequest = await new RequestForPassChange({
      //serialNumber: (await RequestForPassChange.find()).length + 1,
      email,
      key,
    }).save();

    sgMail.setApiKey(
      "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" // Very-Sensitive
    );
    const msg = {
      to: email,
      from: "service@neurobica.online",
      subject: "Password Reset Request",
      html: passreset(key),
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("reset email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    res.json({ result: "email successfully sent to " + email });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ serverError: "Unexpected error occurred in the server" });
  }
});

router.post("/passresfin", async (req, res) => {
  try {
    const { email, key, password, passwordagain } = req.body;
    if (!email || !key || !password || !passwordagain)
      return res.status(400).json({
        clientError: "At least one of the fields are missing",
      });
    const passStrength = passwordStrength(password);
    if (passStrength.id < 2)
      return res.status(400).json({
        clientError:
          "Password isn't strong enough, the value is" +
          passwordStrength(password).value,
      });
    if (password !== passwordagain)
      return res.status(400).json({
        clientError: "Passwords doesn't match",
      });
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = (await User.find({ email }))[0];
    user.neurons = user.neurons | 0;
    user.deactivated = false;
    user.notifications = false;
    user.newsletter = false;
    user.deleted = false;
    user.passwordHash = passwordHash;
    await user.save();
    res.json({ changed: "yes" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ serverError: "Unexpected error occurred in the server" });
  }
});

router.post("/updaten", async (req, res) => {
  try {
    const { notifications, newsletter } = req.body;
    if (
      (notifications !== true && notifications !== false) ||
      (newsletter !== true && newsletter !== false)
    )
      return res.status(400).json({
        clientError: "At least one of the fields are missing",
      });

    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ clientMessage: "Unauthorized" });
    const validatedUser = jwt.verify(token, process.env.JWT_SECRET as string);
    const userId = (validatedUser as JwtPayload).id;
    const user = (await User.find({ userId }))[0];
    user.notifications = notifications;
    user.newsletter = newsletter;
    await user.save();
    res.json({ changed: "yes" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ serverError: "Unexpected error occurred in the server" });
  }
});

export default router;
