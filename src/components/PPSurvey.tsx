import { useCallback } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";

export default function PPSurvey({ surveyJson, id }: any) {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender: any) => {
    saveSurveyResults("https://your-web-service.com/" + id, sender.data);
  }, []);

  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
}

function saveSurveyResults(url: any, json: any) {
  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.addEventListener("load", () => {
    // Handle "load"
  });
  request.addEventListener("error", () => {
    // Handle "error"
  });
  request.send(JSON.stringify(json));
}
