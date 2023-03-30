import "survey-core/defaultV2.min.css";
import { useCallback, useContext } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import axios from "axios";
import UserContext from "../context/UserContext";

export default function PPSurvey({ surveyJson, type }: any) {
  const { user } = useContext(UserContext);
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback(
    ({ data }: any) => {
      axios.post("/save" + type, { owner: user, data });
    },
    [user]
  );
  survey.onComplete.add(surveyComplete);
  return <Survey model={survey} />;
}
