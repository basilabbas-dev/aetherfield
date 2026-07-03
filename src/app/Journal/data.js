import image2 from "../assets/Images/Journal images/Image (2).png";
import image3 from "../assets/Images/Journal images/Image (3).png";
import image4 from "../assets/Images/Journal images/Image (4).png";
import image5 from "../assets/Images/Journal images/Image (5).png";
import image6 from "../assets/Images/Journal images/Image (6).png";
import image7 from "../assets/Images/Journal images/Image (7).png";

const blogs = [
  // ---------------- Blog 1 ----------------
  {
    slug: "climate-ready-data-stack",
    title: "How to Build a Climate-Ready Data Stack",
    category: "Insights",
    readTime: "4 min",
    description:
      "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
    image: image2,
    published: "May 7, 2028",
    author: "Lana Torra",
    sections: [
      {
        heading: "Built for Another Era",
        body:
          "Most data infrastructures were built to optimize for sales, finance, and operations. Sustainability data introduces new challenges because it comes from suppliers, energy providers, production facilities, and manual reporting."
      },
      {
        heading: "Bridging the Gaps",
        body:
          "A climate-ready data stack connects information from multiple systems into one trusted source. This reduces duplication and improves reporting accuracy."
      },
      {
        heading: "Stack With Strategy",
        body:
          "Technology alone isn't enough. Every system should support measurable sustainability goals and decision-making."
      },
      {
        heading: "Bake in Flexibility",
        body:
          "Reporting frameworks change frequently. Build your platform so new regulations and metrics can be added without rebuilding everything."
      },
      {
        heading: "From Stack to Story",
        body:
          "Good data tells a clear sustainability story. When data is centralized and reliable, leaders can confidently communicate progress."
      }
    ]
  },

  // ---------------- Blog 2 ----------------
  {
    slug: "sustainability-isnt-a-side-project",
    title: "Sustainability Isn't a Side Project: Making Impact Operational",
    category: "Strategy",
    readTime: "7 min",
    description:
      "Why climate goals belong in your core roadmap—not just in the annual ESG report.",
    image: image3,
    published: "May 14, 2028",
    author: "Emma Carter",
    sections: [
      {
        heading: "Beyond Compliance",
        body:
          "Many organizations treat sustainability as a reporting exercise. The companies making the biggest impact integrate it into daily operations."
      },
      {
        heading: "Operational Thinking",
        body:
          "Sustainability should influence procurement, logistics, manufacturing, and product development—not exist as a separate initiative."
      },
      {
        heading: "Shared Responsibility",
        body:
          "Success requires collaboration across every department rather than relying on a single sustainability team."
      },
      {
        heading: "Continuous Improvement",
        body:
          "Operational sustainability is built on measuring outcomes, learning from results, and improving processes continuously."
      }
    ]
  },

  // ---------------- Blog 3 ----------------
  {
    slug: "inside-the-aetherfield-model",
    title: "Inside the Aetherfield Model: How We Turn Data Into Action",
    category: "Insights",
    readTime: "5 min",
    description:
      "A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.",
    image: image4,
    published: "May 20, 2028",
    author: "Oliver Bennett",
    sections: [
      {
        heading: "Collect",
        body:
          "Our platform gathers sustainability information from multiple trusted sources into one central location."
      },
      {
        heading: "Analyze",
        body:
          "Intelligent models identify trends, anomalies, and opportunities hidden within environmental data."
      },
      {
        heading: "Act",
        body:
          "Insights become actionable recommendations that help businesses reduce emissions and improve efficiency."
      }
    ]
  },

  // ---------------- Blog 4 ----------------
  {
    slug: "from-spreadsheets-to-systems",
    title: "From Spreadsheets to Systems: The Evolution of Climate Reporting",
    category: "Tooling",
    readTime: "6 min",
    description:
      "Why legacy tools aren't enough—and what the next generation of reporting looks like.",
    image: image5,
    published: "May 25, 2028",
    author: "Sophia Green",
    sections: [
      {
        heading: "The Spreadsheet Problem",
        body:
          "Manual spreadsheets create errors, duplicated work, and limited visibility across organizations."
      },
      {
        heading: "Connected Platforms",
        body:
          "Modern reporting systems automatically collect and validate data from different business units."
      },
      {
        heading: "Real-Time Decisions",
        body:
          "With live dashboards, organizations can monitor sustainability performance continuously instead of waiting for annual reports."
      }
    ]
  },

  // ---------------- Blog 5 ----------------
  {
    slug: "carbon-accounting-myths-models-and-must-haves",
    title: "Carbon Accounting: Myths, Models, and Must-Haves",
    category: "Tooling",
    readTime: "6 min",
    description:
      "Debunking common assumptions and offering a framework for getting it right.",
    image: image6,
    published: "June 2, 2028",
    author: "Daniel Brooks",
    sections: [
      {
        heading: "Myth vs Reality",
        body:
          "Carbon accounting is much more than adding emission values together. It requires reliable data, boundaries, and consistent methodologies."
      },
      {
        heading: "Choosing a Model",
        body:
          "Organizations should select calculation models appropriate for their industry and reporting requirements."
      },
      {
        heading: "Building Trust",
        body:
          "Transparent documentation and audit-ready data improve confidence among stakeholders and regulators."
      }
    ]
  },

  // ---------------- Blog 6 ----------------
  {
    slug: "designing-feedback-loops-for-sustainable-growth",
    title: "Seeing Clearly: Designing Feedback Loops for Sustainable Growth",
    category: "Strategy",
    readTime: "4 min",
    description:
      "Building responsive systems that keep sustainability strategy adaptive and actionable.",
    image: image7,
    published: "June 10, 2028",
    author: "Grace Morgan",
    sections: [
      {
        heading: "Measure",
        body:
          "The first step is collecting meaningful metrics that accurately reflect environmental performance."
      },
      {
        heading: "Learn",
        body:
          "Regular analysis reveals what's working and where improvements are needed."
      },
      {
        heading: "Improve",
        body:
          "Feedback loops allow organizations to continuously refine sustainability strategies as conditions change."
      }
    ]
  }
];

export default blogs;