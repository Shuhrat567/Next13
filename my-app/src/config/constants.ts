import { FaBook , FaQuestion  } from 'react-icons/fa';
import { FaCirclePlay } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";





import { MdImportContacts,MdOutlineExplore ,  } from 'react-icons/md';
import {AnnouncementIcons, CodingIcons, DesignIcons, LaptopIcons, PrintIcons, PersonIcon} from "@/icons";



export const navigation = [
    {
        title: 'General',
        links: [
            {
                label: 'Explore',
                route: '/',
                icon: MdOutlineExplore,
            },
            {
                label: 'Courses',
                route: '/courses',
                icon: FaCirclePlay,
            },
            {
                label: 'Books',
                route: '/books',
                icon: FaBook  ,
            },
            {
                label: 'Articles',
                route: '/articles',
                icon: MdImportContacts,
            },
        ],
    },
    {
        title: 'Pages',
        links: [
            {
                label: 'About',
                route: '/about',
                icon: RiTeamLine,
            },
            {
                label: 'Contact',
                route: '/contact',
                icon: MdOutlineContactPhone,
            },
            {
                label: 'Pricing',
                route: '/pricing',
                icon: TbCurrencyDollar,
            },
            {
                label: 'FAQ',
                route: '/faq',
                icon: FaQuestion,
            },
        ],
    },
];
export const categories = [
    {
        name: 'design_category',
        id: 1,
        icon: DesignIcons,
    },
    {
        name: 'sales_marketing_category',
        id: 2,
        icon: AnnouncementIcons,
    },
    {
        name: 'development_it_category',
        id: 3,
        icon: CodingIcons,
    },
    {
        name: 'engineering_architecture_category',
        id: 4,
        icon: PrintIcons,
    },
    {
        name: 'personl_development_category',
        id: 5,
        icon: PersonIcon,
    },
    {
        name: 'finance_accounting_category',
        id: 6,
        icon: LaptopIcons,
    },
];
export const categoryCarousel = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
