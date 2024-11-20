import squirrel from '/images/projects/squirrel.png';
import lowdingShop from '/images/projects/lowdingShop.png';
import runnerGame from '/images/projects/runnerGame.png';
import fakeNewsDetection from '/images/projects/fakeNewsDetection.png';
import calculator from '/images/projects/calculator.png';
import drumMachine from '/images/projects/drumMachine.png';
import pomodoroTimer from '/images/projects/pomodoroTimer.png';
import hangman from '/images/projects/hangman.png';
import sudoku from '/images/projects/sudoku.png';
import bebas from '/images/projects/bebas.png';
import codeToImpact from '/images/projects/codeToImpact.png';
import clutch from '/images/projects/clutch.png';
import laba from '/images/projects/laba.png';



export const projectsArray = [
    {
      id: "p13",
      title: "LABA",
      headline: "LABA (Leveraging Analytics for Building Assets)",
      type: "Web Application",
      duration: "AUG 2024 - PRESENT",
      description: [
          "Engineered a high-performance stock price web application with React (TypeScript) and a Node.js/Express backend, delivering 10+ real-time metrics for the top 25 most active stocks in under 1 second.",
          "Deployed 11 optimized API endpoints for real-time data, price forecasts, and interactive historical charts covering ranges of 1 day, 5 days, 3 months, 6 months, 1 year, and 5 years.",
          "Automated a web scraping pipeline with Python and Beautiful Soup to extract key metrics, comprehensive historical data, and the latest 5 analyst recommendations for each stock, ensuring real-time insights."
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Python", "Beautiful Soup"],
      image: laba,
  },
  {
      id: "p12",
      title: "CLUTCH",
      headline: "CLUTCH (Car Auction Mobile Application)",
      type: "Mobile Application",
      duration: "AUG 2023 - NOV 2023",
      description: [
          "Led a team of 9 members to develop a car auction mobile application using React Native, Expo, MongoDB, Express, Node.js, and Redux.",
          "Performed the Software Development Life Cycle (SDLC) with 3 phases starting from product design (UI/UX in Figma), code development (Frontend and Backend), to end-to-end testing (Jest).",
          "Devised asynchronous JavaScript (e.g. await) to fetch JSON data from the API."
      ],
      url: "https://github.com/UnknownDelta/Auctionable",
      skills: ["React Native", "Node.js", "JavaScript"],
      image: clutch,
  },
  {
      id: "p11",
      title: "GIC #CODETOIMPACT 2023",
      headline: "GIC #CODETOIMPACT 2023",
      type: "Hackathon Project",
      duration: "SEP 2023",
      description: [
          "Developed the front end of a dashboard with 6 pages and various elements (e.g. dynamic charts, tables, search bar, sorting function, and edit data) using React JS and Material UI.",
          "Implemented Anthropic API to develop an Artificial Intelligence chatbot which responds to any prompt from the user about the data.",
          "Utilized 5 AWS Cloud Services in the microservices architecture (Amazon API Gateway), in the storage (Amazon RDS and S3 Bucket), and in the deployment (CloudFront and AWS Elastic Beanstalk)."
      ],
      url: "https://drive.google.com/file/d/15V3bHL0vQh3HtTZnxuNnIGLQQFg8EmD5/view",
      skills: ["React.js", "Cloud Services", "Amazon Web Services (AWS)", "Material UI", "Prompt Engineering"],
      image: codeToImpact
  },
    {
        id: "p10",
        title: "SQUIRREL",
        headline: "SQUIRREL",
        type: "Mobile Application",
        duration: "MAR 2023 - MAY 2023",
        description: [
          "Designed an Android Mobile Application with a team of 2 members to help students study their modules.",
          "Applied Java and XML to create 14 mobile application screens (e.g. Login, Register, Module List, Topic List, Quiz) and React Typescript for the front-end of the dashboard (e.g. Student List, Student Results).",
          "Utilised SQL to build the database with 5 tables (i.e. students, results, modules, questions, and choices) and Java Servlet to form 14 Java Classes for the backend."
        ],
        url: "https://github.com/bryannoels/SQUIRREL",
        image: squirrel,
      },
      {
        id: "p9",
        title: "LowdingShop",
        headline: "LowdingShop",
        type: "Web Application",
        duration: "FEB 2023 - MAR 2023",
        description: [
          "Co-developed an interactive online shop web application with Home, Shopping Cart, and Login pages utilising React Typescript, React Redux, Tailwind CSS, Toastify, and React Router DOM.",
          "Applied SQL to configure the database and create 2 tables (i.e. products and users tables).",
          "Devised Java Servlet to construct 4 classes implementing GET, POST, and UPDATE HTTP methods."
        ],
        url: "https://github.com/EdmersonLow/LowdingShop/",
        image: lowdingShop,
      },
      {
        id: "p8",
        title: "Runner Game",
        headline: "Runner Game",
        type: "Game Development",
        duration: "JAN 2023 - FEB 2023",
        description: [
          "Co-designed a functional game application using Unity where a character runs in three-lane endless tiles, moving left and right to avoid buildings and collecting coins to earn points.",
          "Authored 7 scripts using C# programming language to control characters, tiles, coins, cameras, and audio.",
          "Devised 2 trigger functions inside the game (i.e. collision with buildings and collecting coins)."
        ],
        url: "https://github.com/bryannoels/Runner-Game",
        image: runnerGame,
      },
      {
        id: "p7",
        title: "Fake News Detection",
        headline: "Fake News Detection: Introduction to Data Science and Artificial Intelligence",
        type: "Machine Learning",
        duration: "AUG 2022 - NOV 2022",
        description: [
          "Developed a Data Analytics and Machine Learning Project in a team of 4 people to analyse the reliability of news (i.e. true or fake news) from its title.",
          "Applied Python programming language with functions from 6 libraries (i.e. NumPy, Pandas, Seaborn, Matplotlib, Calendar, and Scikit-learn).",
          "Utilised Vectorization, Porter Stemmer, and Logistic Regression to optimise prediction accuracy up to 94.6%."
        ],
        url: "https://github.com/cyprus09/Fake-News-Predictor",
        image: fakeNewsDetection,
      },
      {
        id: "p6",
        title: "Calculator",
        headline: "Calculator (React JavaScript)",
        type: "Personal Project",
        duration: "AUG 2022",
        description: [
          "Implemented JavaScript (React) to create a functional calculator with addition, subtraction, multiplication, divide, and clear (AC) functions.",
          "Created an automatic checker to prevent invalid operations (e.g. leading zeros, consecutive operators).",
          "Designed a calculation algorithm which followed the order of operation rule."
        ],
        url: "https://codepen.io/bryannoel/pen/MWVVrrM",
        image: calculator,
      },
      {
        id: "p5",
        title: "Drum Machine",
        headline: "Drum Machine",
        type: "Personal Project",
        duration: "JUL 2022 - AUG 2022",
        description: [
          "Applied JavaScript (React) to develop a digital drum machine with nine clickable elements, each with different sound effects.",
          "Utilised key-down event listener to collect input when pressing a keyboard key.",
          "Passed data from child to parent component to display the name of the pressed button."
        ],
        url: "https://codepen.io/bryannoel/pen/QWmajdx",
        image: drumMachine,
      },
      {
        id: "p4",
        title: "Pomodoro Timer",
        headline: "Pomodoro Timer",
        type: "Personal Project",
        duration: "JUL 2022 - AUG 2022",
        description: [
          "Created a Pomodoro timer using JavaScript (React), with features like start, stop, reset, increment, and decrement buttons.",
          "Utilized asynchronous function 'set-Timeout' to start and stop the timer."
        ],
        url: "https://codepen.io/bryannoel/pen/ZExJeby",
        image: pomodoroTimer,
      },
      {
        id: "p3",
        title: "Hangman Game",
        headline: "TikTok Youth Camp 2022: Build a Hangman Game (Front-End Development Group Project)",
        type: "Web Application",
        duration: "MAY 2022",
        description: [
          "Applied HTML, CSS, and JavaScript to create a Hangman Game with choices of categories, interactive buttons, and life count.",
          "Implemented ReactJS with states to store the letters chosen and to count the remaining life."
        ],
        url: "https://kermit-hangman.netlify.app/",
        image: hangman,
      },
      {
        id: "p2",
        title: "Sudoku Game",
        headline: "Designing and Development of Sudoku Game",
        type: "Game Development",
        duration: "JAN 2022 - APR 2022",
        description: [
          "Applied Java Programming to design and create a Sudoku Game with features like Challenging Levels, Start / Stop Button, Timer for entertainment and leisure purposes."
        ],
        url: "https://github.com/aftanza/Sudoku",
        image: sudoku,
      },
      {
        id: "p1",
        title: "Post-Covid Tourism",
        headline: "Web Application to Reshape Post-Covid Tourism in Digital World",
        type: "Web Application",
        duration: "MAR 2022",
        description: [
          "Deployed software 'Figma' to design and develop a fully functional software prototype with user flow intact.",
          "Successfully utilised HTML, CSS, and JavaScript to develop a minimum viable product of a web application that integrated with map API."
        ],
        url: "https://drive.google.com/drive/folders/1nN6y0WTjPO2UrU7Dx82YpSScIVOcnTMF",
        image: bebas,
      }
];