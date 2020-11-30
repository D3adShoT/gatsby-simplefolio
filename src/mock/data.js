import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agraj Naman Mishra | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Agraj Naman Mishra',
  subtitle: 'Full Stack Developer',
  cta: 'Know More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am working as a fresher software professional. Completed my B.Tech from VIT Chennai in May,2020. ',
  paragraphTwo:
    'I was introduced with CRM and its indulgement to the full stack ways that I was already interested in, this happened in Capgemini Pune during my Internship. So I am looking my future as a Developer in the same.',
  paragraphThree: 'I also do freelancing as full stack developer.',
  resume: 'https://bit.ly/37mniZv', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Order Managing application',
    info:
      'This is the first major project which I did using all of my learning in salesforce ecosystem.',
    info2:
      'Provided with 30+ client scenario and was expected to come up with a working and fully automated application.',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Truck Booking System',
    info:
      'This is the 2nd project that I did with client scenario. Fully functional and automated application on salesforce CRM.',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Emotion Detection And Drownsiness Detector',
    info: 'The project was intended to help the road accidents and in cases of autism. ',
    info2:
      'The produced model was a software system that detects the face and returns the facial expression on basis of distances between the eyelids , lips etc. We did it for smile, sad , surprised etc.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ANM1862',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agrajnaman',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/D3adShoT',
    },
    {
      id: nanoid(),
      name: 'Instagram',
      url: 'https://www.linkedin.com/in/agrajnaman',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
