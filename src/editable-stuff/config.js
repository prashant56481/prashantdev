// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Prashant",
  middleName: "",
  lastName: "Dwivedi",
  message: " Passionate about using tech to increase social impact. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/prashant56481",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/prashantdwivedi56481",
    },
    {
      image: "fa-codepen",
      url: "https://www.leetcode.com/prashantdwi",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/prashantdwivedi56481",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/prashant_profile.jpeg"),
  imageSize: 375,
  message:{
    Intro: "I'm A Responsible and committed Software Engineer with high-quality product spirit and with experience of programming, development and testing in below areas: ",
    Lang : "Programming :  C++, Java, JavaScript, Python ",
    Tool : "Tools And Technologies : NodeJs, Reactjs, Spring , Spring Boot, Firebase, Flutter, Git; Database: SQL, FireStore."
  },
  resume: "https://drive.google.com/file/d/1B3ROVo4jAXEQ3g66Jf1DjCUOi_7ctZ_7/view?usp=sharing"
};

// project section
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "prashant56481", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Jammming-Spotify-Web-App", "Ravenous-Front-End-WebApp",
          "INDOOR-POSITIONING-IN-GPS-DENIED-AREAS-USING-ULTRA-WIDE-BAND-TECHNOLOGY",
          "WeatherApp-Using-JavaScript-",
          "ToDo-WebApp",
          ],
          

};
// Experience SECTION
const experience = {
  show: true,
  heading: "Experience",
  message:
    "To DO Experience About",
  images: [
    { 
      img: require("../editable-stuff/wipro.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/kohbee.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero" 
    },
  ],
  imageSize: {
    width:"1",
    height:"200"
  }
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership/Extra-curricular",
  message:
    "XYZ",
  images: [
    { 
      img: require("../editable-stuff/wipro.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/wipro.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero" 
    },
  ],
  imageSize: {
    width:"1",
    height:"200"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 85 },
    { name: "Java", value: 70 },
    { name: "HTML", value: 70 },
    { name: "CSS", value: 50 },
    { name: "Git", value: 65 },
    { name: "Node.js", value: 20 },
    { name: "JavaScript", value: 65 },
    { name: "Spring", value: 10 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 95 },
    { name: "Collaboration", value: 70 },
    { name: "Proactiveness", value: 87 },
    { name: "Adaptability", value: 75 },
    { name: "Persistence", value: 85 },
    { name: "Personal Responsibility", value: 90 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  // message:
  //   "If you're interested in working together, or learning together, please touch base",
  email: "prashant.dwivedi.56481@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills,experience, leadership, getInTouch };
