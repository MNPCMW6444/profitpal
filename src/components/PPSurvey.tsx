import { useCallback } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";

export default function PPSurvey({ surveyJson }: any) {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender: any) => {
    debugger;
    console.log(sender);
  }, []);

  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
}
