// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#cad71a,#d71a2d,#cad71a,#d71a2d,#cad71a,#d71a2d",
  firstName: "Shashini",
  middleName: "",
  lastName: "Dileka",
  message: " Wants to be a person who interacts with new technology ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ShashiniDileka", 
    },
    //{
      // image: "fa-facebook",
      //url: "https://www.facebook.com/hashirshoaeb",
    //},
    //{
      //image: "fa-instagram",
      //url: "https://www.instagram.com/_ok_shashi/",
    //},
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/o-k-shashini-dileka-838a8620b",
    },
    //{
      //image: "fa-twitter",
      //url: "https://www.twitter.com/hashirshoaeb/",
    //},
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me", 
  imageLink: require("../editable-stuff/shashini.jpg"),
  imageSize: 300,
  message:
    "My name is O.K. Shashini Dileka. I’m an undergraduate and I follow BSC(Hons)Information Technology degree program in university of Sri Jayewardenepura.I am intersting in cybersecurity field.",
  resume: "https://drive.google.com/file/d/164xvjmKNf5UISORVZQeVLApO_BbdLdlu/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ShashiniDileka", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
  
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 50 },
    { name: "SQL", value: 80 },
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 55 },
    { name: "React", value: 70 },
    { name: "HTML/CSS", value: 60 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Leadership", value: 85},
    { name: "Teamwork", value: 80 },
    { name: "Positivity", value: 60 },
    { name: "Adaptability", value: 70 },
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 80 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 80 },
    { name: "Work ethic", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am interested in the cybersecurity field and if you know of any positions or courses available related to the field email me at",
  email: "okdileka12@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
