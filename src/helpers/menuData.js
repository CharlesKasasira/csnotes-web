import { AiFillHome } from 'react-icons/ai'
import { GiPapers } from 'react-icons/gi'
import { IoSchoolSharp } from 'react-icons/io5'
import { MdForum, MdSettings } from 'react-icons/md'


const menuItem = [
    {
        label: 'Dashboard',
        icon: <AiFillHome />,
        link: '/dashboard'
    },
    {
        label: 'Course',
        icon: <IoSchoolSharp />,
        link: '/course'
    },
    {
        label: 'Past Papers',
        icon: <GiPapers />,
        link: '/past-papers'
    },
    {
        label: 'Forum',
        icon: <MdForum />,
        link: '/forum'
    },
    {
        label: 'Settings',
        icon: <MdSettings />,
        link: '/settings'
    }
]


export { menuItem }