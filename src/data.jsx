import { nanoid } from 'nanoid';
import { FaSearch, FaBlogger, FaEdit } from 'react-icons/fa';

/* href has to match the id of the target scroll element */
export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
    { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'SEO',
        icon: <FaSearch className='h-16 w-16 text-emerald-500' />,
        text: 'Highly skilled in SEO, efficiently improving page speed and content relevance.',
    },
    {
        id: nanoid(),
        title: 'Blogging',
        icon: <FaBlogger className='h-16 w-16 text-emerald-500' />,
        text: 'Expertise in Blogging, expressing interesting and captivating stories with a focus on inspriational travel and exploring adventures',
    },
    {
        id: nanoid(),
        title: 'Editing',
        icon: <FaEdit className='h-16 w-16 text-emerald-500' />,
        text: 'Advanced proficiency in Editing, creating efficient and concise web content with a strong emphasis on readability and engagement.',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: '',
        github: '',
        title: 'first project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: '',
        github: '',
        title: 'second project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: '',
        github: '',
        title: 'third project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
];