import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.min.css";

const survey = new Model({
  pages: [
    {

      name: "personal_information",
      elements: [
        {
          type: "text",
          name: "name",
          title: "What is your full name?",
          isRequired: true,
        },
        {
          type: "text",
          inputType: "email",
          name: "email",
          title: "What is your email address?",
          isRequired: true,
          validators: [
            {
              type: "email",
            },
          ],
        },

      ],
    },
    {
      name: "risk_tolerance",
      elements: [
        {
          type: "radiogroup",
          name: "risk",
          title: "What is your risk tolerance?",
          isRequired: true,
          choices: [
            "Low - I prefer to minimize risk even if it means lower returns",
            "Medium - I am willing to take some risk for moderate returns",
            "High - I can tolerate significant risk for potentially higher returns",
          ],
        },
      ],
    },

    {
      name: "investment_experience",
      elements: [
        {
          type: "radiogroup",
          name: "experience",
          title: "What is your level of experience with trading?",
          isRequired: true,
          choices: ["None", "Beginner", "Intermediate", "Advanced", "Expert"],
        },
        {
          type: "radiogroup",
          name: "technical_knowledge",
          title: "Do you have any technical knowledge of trading or programming?",
          isRequired: true,
          choices: ["None", "Little", "Some", "A lot"],
        },
        {
          type: "radiogroup",
          name: "understanding_risks",
          title: "How well do you understand the risks associated with trading cryptocurrencies?",
          isRequired: true,
          choices: ["Not at all", "A little", "Somewhat", "Completely"],
        },
      ],
    },
    {
      name: "investment_goal",
      elements: [
        {
          type: "radiogroup",
          name: "goal",
          title: "What is your primary investment goal?",
          isRequired: true,
          choices: [
            "Capital preservation",
            "Income generation",
            "Growth",
            "Speculation",
          ],
        },
      ],
    },
    {
      name: "risk_tolerance",
      elements: [
        {
          type: "radiogroup",
          name: "risk",
          title: "What is your risk tolerance?",
          isRequired: true,
          choices: [
            "Low - I prefer to minimize risk even if it means lower returns",
            "Medium - I am willing to take some risk for moderate returns",
            "High - I can tolerate significant risk for potentially higher returns",
          ],
        },
      ],
    },
    {
      name: "investment_period",
      elements: [
        {
          type: "radiogroup",
          name: "period",
          title: "What is your intended investment time horizon?",
          isRequired: true,
          choices: [
            "Short-term (less than 1 year)",
            "Medium-term (1-3 years)",
            "Long-term (more than 3 years)",
          ],
        },
      ],
    },
    {
      type: "radiogroup",
      name: "customization",
      title:
        "Do you prefer a fully customized investment plan or a pre-built plan based on your investment preferences?",
      isRequired: true,
      choices: ["Fully customized", "Pre-built"],
    },
    {
      type: "radiogroup",
      name: "monitoring",
      title:
        "How frequently do you want your portfolio to be monitored and rebalanced?",
      isRequired: true,
      choices: [
        "Daily",
        "Weekly",
        "Monthly",
        "Quarterly",
        "Annually",
        "Never",
      ],
    },

    {
      name: "trading_automation",
      elements: [
        {
          type: "radiogroup",
          name: "automation",
          title: "How much control do you want to have over the trading process?",
          isRequired: true,
          choices: [
            "I want full control",
            "I want partial control",
            "I want no control, fully automated",
          ],
        },
      ],
    },
  ],
});
const App = () => {
  return <Survey model={survey} />;
};
export default App;






