import React from "react";
import "survey-creator/survey-creator.css";
import { Survey } from "survey-creator";

export default function Quest() {
  const survey = {
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
            title: "What is your email §ress?",
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
        name: "investment_experience",
        elements: [
          {
            type: "radiogroup",
            name: "experience",
            title: "What is your level of experience with investing?",
            isRequired: true,
            choices: ["Beginner", "Intermediate", "Advanced", "Expert"],
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
    ],
  };

  return <Survey model={survey} />;
}
