import {AiFillHome} from 'react-icons/ai';
import {MdNotifications} from 'react-icons/md';
const navbar_list = [
    {
        id: 1,
        link: "",
        title: "home",
        icons: <AiFillHome size={30}/>
    },
    {
        id: 2,
        link: "notification",
        title: "notifications",
        icons: <MdNotifications size={30}/>
    },
]

export {navbar_list};