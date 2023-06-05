import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
export const navbaritems=[
    {
        icon:<MenuIcon/>,
        route:true
    },
    {
        id:0,
        icon:<ManageAccountsIcon/>,
        label:'Settings',
        route:'settings'  //url path for each item
    },
    {
        id:1,
        icon:<GroupsIcon/>,
        label:'Home',
        route:'home'
    },
    {
        id:2,
        icon:<AccountBoxIcon/>,
        label:'Account',
        route:'account'
    }
]