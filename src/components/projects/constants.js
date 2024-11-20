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



export const projectsArray = [
    {
        id: "p1",
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
        image: squirrel, // Replace with actual image reference
      },
      {
        id: "p2",
        title: "LowdingShop",
        headline: "LowdingShop",
        type: "Web Application",
        duration: "FEB 2023 - MAR 2023",
        description: [
          "Co-developed an interactive online shop web application with Home, Shopping Cart, and Login pages utilising React Typescript, React Redux, Tailwind CSS, Toastify, and React Router DOM.",
          "Applied SQL to configure the database and create 2 tables (i.e. products and users tables).",
          "Devised Java Servlet to construct 4 classes implementing GET, POST, and UPDATE HTTP methods."
        ],
        url: "https://github.com/EdmersonLow/LowdingShop/", // Add the web application URL here
        image: lowdingShop, // Replace with actual image reference
      },
      {
        id: "p3",
        title: "Runner Game",
        headline: "Runner Game",
        type: "Game Development",
        duration: "JAN 2023 - FEB 2023",
        description: [
          "Co-designed a functional game application using Unity where a character runs in three-lane endless tiles, moving left and right to avoid buildings and collecting coins to earn points.",
          "Authored 7 scripts using C# programming language to control characters, tiles, coins, cameras, and audio.",
          "Devised 2 trigger functions inside the game (i.e. collision with buildings and collecting coins)."
        ],
        url: "https://github.com/bryannoels/Runner-Game", // Add the game application URL here
        image: runnerGame, // Replace with actual image reference
      },
      {
        id: "p4",
        title: "Fake News Detection",
        headline: "Fake News Detection: Introduction to Data Science and Artificial Intelligence",
        type: "Machine Learning",
        duration: "AUG 2022 - NOV 2022",
        description: [
          "Developed a Data Analytics and Machine Learning Project in a team of 4 people to analyse the reliability of news (i.e. true or fake news) from its title.",
          "Applied Python programming language with functions from 6 libraries (i.e. NumPy, Pandas, Seaborn, Matplotlib, Calendar, and Scikit-learn).",
          "Utilised Vectorization, Porter Stemmer, and Logistic Regression to optimise prediction accuracy up to 94.6%."
        ],
        url: "https://github.com/cyprus09/Fake-News-Predictor", // Add relevant URLs here
        image: fakeNewsDetection, // Replace with actual image reference
      },
      {
        id: "p5",
        title: "Calculator",
        headline: "Calculator (React JavaScript)",
        type: "Personal Project",
        duration: "AUG 2022",
        description: [
          "Implemented JavaScript (React) to create a functional calculator with addition, subtraction, multiplication, divide, and clear (AC) functions.",
          "Created an automatic checker to prevent invalid operations (e.g. leading zeros, consecutive operators).",
          "Designed a calculation algorithm which followed the order of operation rule."
        ],
        url: "https://codepen.io/bryannoel/pen/MWVVrrM", // Add relevant URLs here
        image: calculator, // Replace with actual image reference
      },
      {
        id: "p6",
        title: "Drum Machine",
        headline: "Drum Machine",
        type: "Personal Project",
        duration: "JUL 2022 - AUG 2022",
        description: [
          "Applied JavaScript (React) to develop a digital drum machine with nine clickable elements, each with different sound effects.",
          "Utilised key-down event listener to collect input when pressing a keyboard key.",
          "Passed data from child to parent component to display the name of the pressed button."
        ],
        url: "https://codepen.io/bryannoel/pen/QWmajdx", // Add relevant URLs here
        image: drumMachine, // Replace with actual image reference
      },
      {
        id: "p7",
        title: "Pomodoro Timer",
        headline: "Pomodoro Timer",
        type: "Personal Project",
        duration: "JUL 2022 - AUG 2022",
        description: [
          "Created a Pomodoro timer using JavaScript (React), with features like start, stop, reset, increment, and decrement buttons.",
          "Utilized asynchronous function 'set-Timeout' to start and stop the timer."
        ],
        url: "https://codepen.io/bryannoel/pen/ZExJeby", // Add relevant URLs here
        image: pomodoroTimer, // Replace with actual image reference
      },
      {
        id: "p8",
        title: "Hangman Game",
        headline: "TikTok Youth Camp 2022: Build a Hangman Game (Front-End Development Group Project)",
        type: "Web Application",
        duration: "MAY 2022",
        description: [
          "Applied HTML, CSS, and JavaScript to create a Hangman Game with choices of categories, interactive buttons, and life count.",
          "Implemented ReactJS with states to store the letters chosen and to count the remaining life."
        ],
        url: "https://kermit-hangman.netlify.app/", // Add relevant URLs here
        image: hangman, // Replace with actual image reference
      },
      {
        id: "p9",
        title: "Sudoku Game",
        headline: "Designing and Development of Sudoku Game",
        type: "Game Development",
        duration: "JAN 2022 - APR 2022",
        description: [
          "Applied Java Programming to design and create a Sudoku Game with features like Challenging Levels, Start / Stop Button, Timer for entertainment and leisure purposes."
        ],
        url: "https://github.com/aftanza/Sudoku", // Add relevant URLs here
        image: sudoku, // Replace with actual image reference
      },
      {
        id: "p10",
        title: "Post-Covid Tourism",
        headline: "Web Application to Reshape Post-Covid Tourism in Digital World",
        type: "Web Application",
        duration: "MAR 2022",
        description: [
          "Deployed software 'Figma' to design and develop a fully functional software prototype with user flow intact.",
          "Successfully utilised HTML, CSS, and JavaScript to develop a minimum viable product of a web application that integrated with map API."
        ],
        url: "https://drive.google.com/drive/folders/1nN6y0WTjPO2UrU7Dx82YpSScIVOcnTMF", // Add relevant URLs here
        image: bebas, // Replace with actual image reference
      }
];