import { ObjectivesGoal, ValueGoal, WebsiteFeatureSummary } from "@/lib/types";

// Objective from home page
export const HOME_SECTIONS_OBJECTIVES: ObjectivesGoal[] = [
  {
    title: "Educate and Empower:",
    text: " Offer high-quality, accessible content that covers the fundamentals and advanced concepts of electronics, automation, and electronics repair, enabling learners to build real-world skills.",
  },
  {
    title: "Promote Hands-On Innovation:",
    text: "Encourage creativity and critical thinking through practical projects, tutorials, and reviews that bridge theory and application in modern technology.",
  },
  {
    title: "Build a Community:",
    text: "Create an inclusive space where professionals, enthusiasts, and learners can collaborate, exchange ideas, and grow together.",
  },
  {
    title: "Inspire Future Generations:",
    text: "Motivate individuals to pursue careers in STEM by highlighting the impact and excitement of working with electronics, automation, and emerging technologies.",
  },
];

// Values from home page
export const HOME_SECTIONS_VALUES: ValueGoal[] = [
  {
    title: "Passion for Knowledge:",
    text: "Sharing with enthusiasm and dedication the love for science and technology.",
  },
  {
    title: "Innovation and Creativity:",
    text: "Promote original and practical solutions to technological problems.",
  },
  {
    title: "Transparency and Learning:",
    text: "Show both, successes and failures, highlighting the value of continuous learning.",
  },
  {
    title: "Accessibility:",
    text: "Make technical knowledge understandable and applicable for all levels.",
  },
  {
    title: "Collaboration:",
    text: "Work as a team with experts, fans, and the community to enrich the content.",
  },
];

// Website's services summary
export const CONTENT_SUMMARY: WebsiteFeatureSummary[] = [
  {
    title: "Read Articles",
    explanation:
      "Explore curated articles on astronomy, automation, electronics, and power systems. Learn at your own pace through engaging content designed to expand your knowledge and spark curiosity.",
    image: "/contentSumImgs/article_img_summary.svg",
    link: "/engineering/articles",
  },
  {
    title: "Download Assets",
    explanation:
      "Access templates, guides, and tools to support your projects. Our resources are free, practical, and easy to download—perfect for learners, makers, and professionals on the go.",
    image: "/contentSumImgs/download_img_summary.svg",
    link: "/engineering/assets",
  },
  {
    title: "Buy Products",
    explanation:
      "Browse our selection of devices and tools for electronics and aeromodelling. Shop with confidence and enjoy secure checkout with fast delivery to your doorstep.",
    image: "/contentSumImgs/shop_img_summary.svg",
    link: "/shopping",
  },
  {
    title: "Start Projects",
    explanation:
      "Make a project request and track its progress from start to finish. Collaborate with our engineering team to bring your ideas to life with expert guidance and support.",
    image: "/contentSumImgs/repair_img_summary.svg",
    link: "/engineering/projects",
  },
];
