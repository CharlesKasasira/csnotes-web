import { AiFillHome } from 'react-icons/ai'
import { GiPapers } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { IoSchoolSharp } from 'react-icons/io5'


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
        label: 'Profile',
        icon: <CgProfile />,
        link: '/profile'
    }
]


export { menuItem }