import { founders, vcsx } from "../content/surveys";
import PPSurvey from "./PPSurvey";


const POC = ({ vcs }: any) => {
  return vcs ? (
    <PPSurvey surveyJson={vcsx} type="vc" />
  ) : (
    <PPSurvey surveyJson={founders} type="founder" />
  );
};
export default POC;
