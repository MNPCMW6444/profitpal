
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
            type: "text",
            name: "endCustomer",
            title: "End Customer",
        },
        {
            type: "text",
            name: "businessModel",
            title: "Business Model",
        },
        {
            type: "text",
            name: "vertical",
            title: "Vertical",
        },
        {
            type: "text",
            name: "type",
            title: "Type",
        },
        {
            type: "text",
            name: "revenueStreams",
            title: "Revenue Streams",
        },
        {
            type: "text",
            name: "geographicalMarkets",
            title: "Geographical Markets",
        },
        {
            type: "text",
            name: "netRevenue[2023]",
            title: "Net Revenue in 2023",
            inputType: "number",
        },
        {
            type: "text",
            name: "netRevenue[2022]",
            title: "Net Revenue in 2022",
            inputType: "number",
        },
        {
            type: "text",
            name: "netRevenue[2021]",
            title: "Net Revenue in 2021",
            inputType: "number",
        },
        {
            type: "text",
            name: "gmv[2023]",
            title: "GMV in 2023",
            inputType: "number",
        },
        {
            type: "text",
            name: "gmv[2022]",
            title: "GMV in 2022",
            inputType: "number",
        },
        {
            type: "text",
            name: "gmv[2021]",
            title: "GMV in 2021",
            inputType: "number",
        },
        {
            type: "text",
            name: "takeRate",
            title: "Take Rate",
        },
        {
            type: "text",
            name: "growthYoY",
            title: "Growth YoY",
        },
        {
            type: "text",
            name: "grossMargin",
            title: "Gross Margin (in %)",
            inputType: "number",
        },
        {
            type: "text",
            name: "cashBalance",

        },
        {
            type: "text",
            name: "monthlyBurnRate",
            title: "Monthly Burn Rate (USD)",
            inputType: "number",
        },
        {
            type: "text",
            name: "totalRunway",
            title: "Total Runway (months)",
            inputType: "number",
        },
        {
            type: "text",
            name: "ebitaMargin",
            title: "EBITA Margin (in %)",
            inputType: "number",
        },
        {
            type: "comment",
            name: "debtDetails",
            title: "Debt Details (if applicable)",
            placeHolder: "Please provide any relevant details regarding your debt",
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

export { vcsx, founders }
