import { Education, Experience, Profile } from "./interface";

export const educations: Education[] = [
  {
    degree: "BEng, Computer  Engineering",
    from: "2012",
    to: "2016",
    school: {
      label: "HKUST",
      link: "https://hkust.edu.hk/",
    },
  },
];

export const experiences: Experience[] = [
  {
    company: {
      label: "Morgan Stanley",
      link: "https://www.morganstanley.com/",
    },
    position: "Prime Brokerage Tooling Strategist",
    specialRemark: "Agency Contract from Walters People",
    from: "03/2023",
    to: "Now",
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Ant Design",
      "Tailwind CSS",
      ".NET Core",
      "MongoDB",
      "kdb+ q",
    ],
    duties: [
      "Designed UI/UX and built web client & service for internal content management system",
      "Designed UI/UX and built web client & service for internal marginal pricing system",
      "Built service for automating daily risk cleanup process",
      "Enhanced existing web client & service for pay-to-hold booking system",
      "Enhanced existing web client & service for internal dashboard building system",
    ],
  },
  {
    company: {
      label: "CLSA",
      link: "https://www.clsa.com",
    },
    position: "Software Engineer",
    from: "10/2021",
    to: "02/2022",
    techStack: ["Typescript", "React", "Next.js", "MaterialUI", "Docker"],
    duties: ["Built web client for client management system"],
  },
  {
    company: {
      label: "FWD Life Insurance Company (Bermuda) Limited",
      link: "https://www.fwd.com.hk/online-insurance/en/",
    },
    position: "System Analyst",
    specialRemark: "Agency Contract from Cornerstone Global Partners",
    from: "01/2021",
    to: "09/2021",
    techStack: [
      "Typescript",
      "React",
      "Next.js",
      "NestJS",
      "MaterialUI",
      "MongoDB",
      "GraphQL",
      "Microservices",
      "AWS",
      "Docker",
    ],
    duties: [
      "Developed 13 microservices from scratch for e-commerce platform, merge query/mutation into one endpoint for web client through GraphQL Federation",
      "Lead a team of 2 engineers to launch CMS cache system built with MongoDB Atlas to reduce network/api cost by 80%",
      "Collaborated with team leads and scrum master to perform the whole agile development process",
    ],
  },

  {
    company: {
      label: "AVA Intelligent Partners Limited",
      link: "https://www.avaval.com/en",
    },
    position: "Senior Programmer",
    from: "06/2018",
    to: "12/2020",
    techStack: [
      "Typescript",
      "React",
      "MaterialUI",
      "Node.js",
      ".NET Core",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Docker",
    ],
    duties: [
      "Developed web client and services from scratch for Internal ERP system",
      "Developed web client and services from scratch for ESG report generation system",
      "Researched and analyzed on SEO to boost firm’s official website ranking on google from page 5 to top 10 results",
    ],
  },
  {
    company: {
      label: "Lucky Technology Ltd.",
      link: "https://www.lucky-tech.com/en/home",
    },
    position: "Programmer",
    from: "08/2016",
    to: "05/2018",
    techStack: ["JavaScript", "AngularJS", "Node.js", ".NET Core", "SQL"],
    duties: [
      "Built web client and services from scratch and worked with hardware engineers to bootstrap time and attendance system",
    ],
  },
];

export const profile: Profile = {
  name: "Owen Siu",
  phone: "+852 68434007",
  email: "owensiu1002@gmail.com",
  description: "A Software Engineer",
  websites: [
    {
      name: "github",
      label: "Github",
      link: "http://github.com/owen1002",
    },
    {
      name: "linkedin",
      label: "Linkedin",
      link: "https://www.linkedin.com/in/ming-ngai-owen-siu-a26012133/",
    },
    {
      name: "medium",
      label: "Medium",
      link: "https://medium.com/@owensiu",
    },
  ],
  educations,
  experiences,
};
