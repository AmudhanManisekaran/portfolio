﻿import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Amudhan Manisekaran",
  title: "Hello, I'm Amudhan",
  subTitle: emoji("A Software Engineering Graduate student having experience in Python and Full Stack Development with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."),
  sub2: emoji('Graduating in May 2021. 🎓'),
  resumeLink: "https://drive.google.com/file/d/1ckW_eQ1seubxXgnvpNbUHEYH5d5AwX6Y/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/amudhan-manisekaran/",
  github: "https://github.com/AmudhanManisekaran",
  gmail: "amudhanmanisekaran@gmail.com",
  facebook: "https://www.facebook.com/amudhanmanisekaran",
  instagram: "https://www.instagram.com/a.m.d.o.n/"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("🔹 Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("🔹 Analyze user requirements, then research and brainstorm practical solutions to meet those needs, and determine the best course of action"),
    emoji("🔹 Integration of third party services such as AWS")
  ],


  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "adobe creative suite",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "August 2019 - Present",
      desc: "CGPA: 3.78",
      descBullets: [
        "Courses: Advanced Data Structures and Algorithms, Semantic Web Engineering, Data Mining, Software Agility",
        "Serving as a Technology Assistant Supervisor at University Technology Office, managing a team of Technology Assistants.",
        "Serving as an Instruction Aide: Math, assisting professors in 100 and 200 level Mathematics courses"
      ]
    },
    {
      schoolName: "PSG College of Technology, India",
      logo: require("./assets/images/psgLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2015 - April 2019",
      desc: "CGPA: 8.17",
      descBullets: [
        "Courses: Object Oriented Programming, Cloud Computing, Artificial Intelligence, Distributed Systems",
        "Served as the Secretary of Indutrial Interaction Forum, organizing various events and workshops",
        "Served as the Graphic Designer of Higher Education Forum, making social media content and promotion material."
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Python Programming",  
      progressPercentage: "80%"  
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Amazon Web Services",
      progressPercentage: "65%"
    }
  ]
};


const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "PayPal's Opportunity Hack",
      companylogo: require("./assets/images/opphackLogo.png"),
      date: "May 2020 - August 2020",
      descBullets: [
        "Developed opportunityhack.io, a full-stack web application to showcase software solutions built by Opportunity Hack.",
        "Resolved issues causing site crashes, elevating uptime to 99%. Efforts were key to a 37% increase in daily traffic.",
        "Improved navigation by creating dynamic media sections, introducing live dashboards, and adding social media plugins.",
        "Ensured technical feasibility and optimum functioning of design features that accelerated load time by 20%."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "AES Technologies",
      companylogo: require("./assets/images/aesLogo.png"),
      date: "December 2018 – June 2019",
      descBullets: [
        "Designed and implemented AI-Cop, an artificially intelligent traffic violation detection and management system.",
        "Built the visual recognition system using Computer Vision techniques to detect violators and extract vehicle information.",
        "Developed a novel Machine Learning model for Optical Character Recognition and achieved 96% accuracy for text recognition in license plates which is 20% more accurate than the model which was being used previously.",
        "Re-trained models with a set of 100,000 high-resolution vehicle images to improve classification accuracy to 98%."
      ]
    },
  ]
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "xyz", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Projects"),
  subtitle: "Out of the several cool projects that I have developed, these are the ones that I am most proud of",

  achievementsCards: [
    {
      title: "Personal Expenditure Insights",
      subtitle: "A light-weight methodology for extracting insights from text representing personal transactions using Triple Stores and Web Ontology Language(OWL).",
      image: require("./assets/images/expenseLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/AmudhanManisekaran/Personal-Expenditure-Insights" }
      ]
    },
    {
      title: "opportuityhack.io",
      subtitle: "A full-stack web application to showcase software solutions built by Opportunity Hack.",
      image: require("./assets/images/opphackLogo2.png"),
      footerLink: [
        { name: "View Project", url: "https://opportunityhack.io/" }
      ]
    },
    {
      title: "AWS Account Vending Machine",
      subtitle: "A serverless and dynamic Account Vending Machine to create AWS accounts and Organizational Units.",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/AmudhanManisekaran/AWS-AccountVendingMachine" },
      ]
    },
    {
      title: "AI-Cop",
      subtitle: "An artificially intelligent traffic violation detection and management system.",
      image: require("./assets/images/aicopLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/AmudhanManisekaran/AI-Cop" },
      ]
    },
    {
      title: "CodeZilla - Compiler and Interpreter",
      subtitle: "A novel and easy-to-use Imperative Programming Language, inspired by Python.",
      image: require("./assets/images/codezillaLogo.png"),
      footerLink: [{ name: "View Project", url: "https://github.com/AmudhanManisekaran/CodeZilla" }]
    },
    {
      title: "MatHub - Math Learning Platform",
      subtitle: "An interactive web application to assist middle school students in learning Math fundamentals.",
      image: require("./assets/images/mathubLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/AmudhanManisekaran/MatHub-MathLearningPlatform" }
      ]
    }
  ]
};

const bigProjects = {
  title: "Hobbies",
  subtitle: "What I do to refresh and rejuvenate?",
  hobbiesList: [
    {
      hobbyName: "soccer",
      fontAwesomeClassname: "fas fa-futbol"
    },
    {
      hobbyName: "art & illustration",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      hobbyName: "travel",
      fontAwesomeClassname: "fas fa-map-marked-alt"
    },
    {
      hobbyName: "gaming",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      hobbyName: "music",
      fontAwesomeClassname: "fas fa-music"
    }
  ]
};

const pubSection = {

  title: "Publications",
  subtitle: "My experience is not limited to coding. I have also published my works in reputed International Journals",

  pubs: [
    {
      url: "http://www.proteusresearch.org/gallery/pj-2657-44-f.pdf",
      title: "Cluster Based Routing for Wireless Sensor Networks",
      description: "In this paper, an algorithm for finding a cluster-based routing for communication in WSN using closeness centrality measure is proposed."
    },
    {
      url: "http://www.ijesi.org/papers/Vol(7)i9/Version-2/G0709026167.pdf",
      title: "Graph Theory Based Software Clustering Algorithm",
      description: "In this paper, a novel graph theory based clustering algorithm to group data entities is proposed."
    }
  ]
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("😅"),

  talks: [
    {
      title: "abc",
      subtitle: "xyz",
      slides_url: "",
      event_url: ""
    }
  ]
};

const podcastSection = {
  title: emoji("🎙️"),
  subtitle: "abc",
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "amudhanmanisekaran@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, pubSection, talkSection, podcastSection, contactInfo};
