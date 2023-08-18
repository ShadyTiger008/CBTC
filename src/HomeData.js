import Portfolio from './assets/portfolio.png';
import Calculator from './assets/calculator.png';
import Todolist from './assets/Todolist.png';

export const projectData = [
    {
        id: 1,
        title: 'Task 1',
        name: 'Portfolio',
        description: 'A personal portfolio website showcasing my skills and projects.',
        imgSrc: Portfolio,
        repoLink: "https://github.com/ShadyTiger008/CBTC",
        linkUrl: "/portfolio",
        style: "flex flex-col sm:flex-row"
    },
    {
        id: 2,
        title: 'Task 2',
        name: 'Calculator',
        description: 'A web-based calculator application for performing basic arithmetic operations.',
        imgSrc: Calculator,
        repoLink: "https://github.com/ShadyTiger008/CBTC",
        linkUrl: "/portfolio",
        style: "flex flex-col sm:flex-row-reverse"
    },
    {
        id: 3,
        title: 'Task 3',
        name: 'Todo List',
        description: 'A simple to-do list application for managing tasks and activities.',
        imgSrc: Todolist,
        repoLink: "https://github.com/ShadyTiger008/CBTC",
        linkUrl: "/portfolio",
        style: "flex flex-col sm:flex-row"
    },
];

export const navBarLinks = [
    {
        name:"Home",
        linkTo:'/'
    },
    {
        name:"Portfolio",
        linkTo:'/portfolio'
    },
    {
        name:"Calculator",
        linkTo:'/calculator'
    },
    {
        name:"Todo List",
        linkTo:'/todolist'
    },
]