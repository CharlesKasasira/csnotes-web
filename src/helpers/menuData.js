import { AiFillHome } from 'react-icons/ai'
import { GiPapers } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'


const menuItem = [
    {
        label: 'Dashboard',
        icon: <AiFillHome />,
        link: '/dashboard'
    },
    {
        label: 'Course',
        icon: <AiFillHome />,
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