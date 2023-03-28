"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 6555;
dotenv_1.default.config();
let mainDbStatus = false;
const connectToDBs = () => {
    mongoose_1.default.connect("" + process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    if (!mainDbStatus)
        setTimeout(connectToDBs, 180000);
};
connectToDBs();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5999"],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.listen(port, () => console.log(`Server started on port: ${port}`));
app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));
