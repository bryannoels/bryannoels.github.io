export function i(image: string): string {
    return require(`../../public/images/${image}.png`);
  }

export const timeLine = [
    {
        id: 'workExperience',
        title: 'Work Experience',
        class: 'timeline-page-header-title-smaller',
        component: [
            {
                title: 'Sopra Steria, Software Engineering Intern',
                title2: 'Sopra Steria, Software Engineering Intern',
                date: 'May 2022 – Jul 2022',
                details: [
                    "Applied 3 frontend programming languages (i.e. HTML, CSS, TypeScript) with Angular Framework to build an internal web application with features (e.g. form validation, file upload) for a corporate client.",
                    "Performed 2 backend programming languages (i.e. Java and SQL) in developing web application's backend side (e.g. calling API, managing SQL query).",
                    "Formulated a form automatically sought for approval from manager upon submission using Microsoft Power Automate."
                ],
                offset: 0.45
            }
        ],
        offset: 0.6
    },
    {
        id: 'education',
        title: 'Education',
        class: 'timeline-page-header-title',
        component: [
            {
                title: 'Nanyang Technological University (NTU)',
                title2: 'Nanyang Technological University (NTU)',
                date: 'Aug 2021 – Jun 2025 (Expected)',
                details: [
                    "Bachelor of Engineering (Information Engineering and Media)",
                    "Honours (Highest Distinction) (Expected)",
                    "Relevant Modules: (1) From Computational Thinking to Programming (2) Object-Oriented Programming (3) Introduction to Data Science and Algorithm (4) Data Structure and Algorithm"
                ],
                offset: 0.45
            },
            {
                title: 'SMAK St. Louis 1 Surabaya Indonesia',
                title2: 'SMAK St. Louis 1 Surabaya Indonesia',
                date: 'Jul 2018 – Jun 2021',
                details: [
                    "GPA: 92 / 100; 90th Percentile of Cohort in 3 Academic Years",
                    "Honourable Mention Awardee, National Informatics Competition 2020."
                ],
                offset: 0.67
            }
        ],
        offset: 0.75
    },
    {
        id: 'leadership',
        title: 'Leadership',
        class: 'timeline-page-header-title',
        component: [
            {
                title: 'NTU Indonesian Students Association, Director (Information Technology)',
                title2: 'PINTU, Director (Information Technology)',
                date: 'Oct 2022 – Present',
                details: [
                    "Lead a team of 13 subcommittees to work on PINTU’s IT related projects (e.g. PINTU Website, PINTU App), applying 5 software programming (HTML, CSS, JavaScript, Python, SQL).",
                    "Conducted and delivered a 2-hour presentation to teach 25 undergraduates about HTML-CSS.",
                ],
                offset: 0.45
            },
            {
                title: 'NTU EEE Club, Student Development Director',
                title2: 'EEE Club, Student Development Director',
                date: 'Sep 2022 – Present',
                details: [
                    "Lead a team of 24 subcommittees to develop projects aim to help academics of EEE and IEM students (e.g. Digitalizing past year paper solutions, Module Summary, Module Review).",
                    "Initiated a series of 5 crash courses in EEE and IEM modules participated by more than 480 students.",
                    "Co-authored a course survey to gain feedback for the EEE and IEM courses and collected more than 1200 responses."
                ],
                offset: 0.7
            }
        ],
        offset: 0.9
    },
    {
        id: 'volunteerActivities',
        title: 'Volunteer Activities',
        class: 'timeline-page-header-title-smaller',
        component: [
            {
                title: 'Competitive Programming Coach, SMAK St. Louis 1 Surabaya',
                title2: 'Competitive Programming Coach',
                date: 'Nov 2020 - Nov 2021',
                details: [
                    "Coached 10 high school students in competitive programming",
                    "Authored multiple notes on various topics (e.g. Software Programming Syntax, Discrete Math, Dynamic Programming, Graphs, Bitwise Operation)",
                    "Mentored 2 students to participate National Informatics Competition 2021; 1 student successfully won the gold medal"
                ],
                offset: 0.45
            },
            {
                title: 'Design Subcommittee, NTU Welfare Services Club (NTUWSC)',
                title2: 'NTU Welfare Services Club (NTUWSC)',
                date: 'Sep 2021 - Aug 2022',
                details: [
                    "Designed keychains and notebook covers for NTU Welfare Services Club's fundraising event called Social Impact Week 2022.",
                    "Designed Telegram Stickers for NTU Welfare Services Club's social media."
                ],
                offset: 0.6
            },
            {
                title: 'Publicity and Publications Subcommittee, Balik Kampoeng',
                title2: 'PnP Subcommittee, Balik Kampoeng',
                date: 'Jan 2022 - Jun 2022',
                details: [
                    "Designed Instagram Posts and Stories for Balik Kampoeng's events, such as Fundraising, PMI Day, and PMI Resilience (Instagram: @balik.kampoeng)",
                    "Documented videos and photos during PMI Day and PMI Resilience",
                    "Edited a 1-minute highlight video for the PMI Resilience event"
                ],
                offset: 0.77
            }
        ],
        offset: 1
    }
];

export const projects = [
    {
        component: [
            {
                title: 'Calculator (React JavaScript)',
                url: 'https://codepen.io/bryannoel/pen/MWVVrrM',
                image: i('calculator')
            },
            {
                title: 'Drum Machine',
                url: 'https://codepen.io/bryannoel/pen/QWmajdx',
                image: i('drumMachine')
            },
            {
                title: 'Pomodoro Timer',
                url: 'https://codepen.io/bryannoel/pen/ZExJeby',
                image: i('pomodoroTimer')
            }
        ]
    },
    {
        component: [
            {
                title: 'Markdown Previewer',
                url: 'https://codepen.io/bryannoel/pen/JjpqZbz',
                image: i('markdownPreviewer')
            },
            {
                title: 'Random Quote Generator',
                url: 'https://codepen.io/bryannoel/pen/xxYrmdd',
                image: i('randomQuoteGenerator')
            },
            {
                title: 'Introduction to Dynamic Programming',
                url: 'https://codepen.io/bryannoel/pen/XWVggEB',
                image: i('introductionToDynamicProgramming')
            }
        ]
    },
    {
        component: [
            {
                title: 'Hangman Game',
                url: 'https://kermit-hangman.netlify.app/',
                image: i('hangmanGame')
            },
            {
                title: 'Sudoku',
                url: 'https://github.com/aftanza/Sudoku',
                image: i('sudoku')
            },
            {
                title: 'Post-covid Tourism',
                url: 'https://bryan-noel-salindeho.github.io/EEE-Hackeeethon/',
                image: i('postCovidTourism')
            }
        ]
    }

];

export const projectsInPhone = [
            {
                title: 'Calculator (React JavaScript)',
                url: 'https://codepen.io/bryannoel/pen/MWVVrrM',
                image: i('calculator')
            },
            {
                title: 'Drum Machine',
                url: 'https://codepen.io/bryannoel/pen/QWmajdx',
                image: i('drumMachine')
            },
            {
                title: 'Pomodoro Timer',
                url: 'https://codepen.io/bryannoel/pen/ZExJeby',
                image: i('pomodoroTimer')
            },
            {
                title: 'Markdown Previewer',
                url: 'https://codepen.io/bryannoel/pen/JjpqZbz',
                image: i('markdownPreviewer')
            },
            {
                title: 'Random Quote Generator',
                url: 'https://codepen.io/bryannoel/pen/xxYrmdd',
                image: i('randomQuoteGenerator')
            },
            {
                title: 'Introduction to Dynamic Programming',
                url: 'https://codepen.io/bryannoel/pen/XWVggEB',
                image: i('introductionToDynamicProgramming')
            },
            {
                title: 'Hangman Game',
                url: 'https://kermit-hangman.netlify.app/',
                image: i('hangmanGame')
            },
            {
                title: 'Sudoku',
                url: 'https://github.com/aftanza/Sudoku',
                image: i('sudoku')
            },
            {
                title: 'Post-covid Tourism',
                url: 'https://bryan-noel-salindeho.github.io/EEE-Hackeeethon/',
                image: i('postCovidTourism')
            }
];