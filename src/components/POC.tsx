import PPSurvey from "./PPSurvey";

const vcsx = {
  title: "VC Survey",
  elements: [
    { type: "text", name: "name", title: "Name", isRequired: true },
    { type: "text", name: "email", title: "Email", isRequired: true },
    { type: "text", name: "phone", title: "Phone Number" },
    { type: "text", name: "firmName", title: "Firm Name", isRequired: true },
    {
      type: "checkbox",
      name: "investmentFocus",
      title: "Investment Focus/Strategy",
      choices: [
        "Early-stage startups",
        "Growth-stage startups",
        "Industry-specific investments",
        "Geography-specific investments",
      ],
    },
    {
      type: "checkbox",
      name: "industriesOfInterest",
      title: "Industries/Sectors of Interest",
      choices: [
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "E-commerce",
        "Energy",
        "Real estate",
        "Other",
      ],
    },
    {
      type: "text",
      name: "investmentSize",
      title: "Typical Investment Size",
      inputType: "number",
    },
    {
      type: "radiogroup",
      name: "preferredCompanyStage",
      title: "Preferred Company Stage",
      choices: [
        "Seed",
        "Series A",
        "Series B",
        "Series C and beyond",
        "Pre-IPO",
        "IPO and beyond",
      ],
    },
    {
      type: "comment",
      name: "portfolioCompanies",
      title: "Portfolio Companies (if applicable)",
      placeHolder: "Separate company names with commas",
    },
    {
      type: "radiogroup",
      name: "preferredMetric",
      title: "Preferred Key Metric",
      choices: [
        "Monthly Recurring Revenue (MRR)",
        "Customer Acquisition Cost (CAC)",
        "Customer Lifetime Value (LTV)",
        "Churn Rate",
        "Gross Margin",
      ],
    },
  ],
};

const founders = {
  title: "Founder Survey",
  elements: [
    { type: "text", name: "name", title: "Name", isRequired: true },
    { type: "text", name: "email", title: "Email", isRequired: true },
    { type: "text", name: "phone", title: "Phone Number" },
    {
      type: "text",
      name: "startupName",
      title: "Startup Name",
      isRequired: true,
    },
    { type: "text", name: "website", title: "Website" },
    { type: "text", name: "location", title: "Location", isRequired: true },
    {
      type: "checkbox",
      name: "industry",
      title: "Industry/Sector",
      choices: [
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "E-commerce",
        "Energy",
        "Real estate",
        "Other",
      ],
      isRequired: true,
    },
    {
      type: "text",
      name: "fundingRaised",
      title: "Funding Raised (USD)",
      inputType: "number",
    },
    {
      type: "radiogroup",
      name: "fundingStage",
      title: "Funding Stage",
      choices: [
        "Pre-seed",
        "Seed",
        "Series A",
        "Series B",
        "Series C and beyond",
      ],
    },
    {
      type: "comment",
      name: "pitch",
      title: "Briefly describe your startup (1-2 sentences)",
      maxLength: 280,
      isRequired: true,
    },
    {
      type: "text",
      name: "mrr",
      title: "Monthly Recurring Revenue (MRR) (USD)",
      inputType: "number",
    },
    {
      type: "text",
      name: "cac",
      title: "Customer Acquisition Cost (CAC) (USD)",
      inputType: "number",
    },
    {
      type: "text",
      name: "ltv",
      title: "Customer Lifetime Value (LTV) (USD)",
      inputType: "number",
    },
    {
      type: "text",
      name: "churnRate",
      title: "Churn Rate (in %)",
      inputType: "number",
    },
    {
      type: "text",
      name: "grossMargin",
      title: "Gross Margin (in %)",
      inputType: "number",
    },
  ],
};

const POC = ({ vcs }: any) => {
  return vcs ? (
    <PPSurvey surveyJson={vcsx} type="vc" />
  ) : (
    <PPSurvey surveyJson={founders} type="founder" />
  );
};
export default POC;
