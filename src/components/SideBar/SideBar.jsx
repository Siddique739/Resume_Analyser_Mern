import React from 'react'
import style from './SideBar.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import { Dashboard } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation} from 'react-router-dom';

const SideBar = () => {

    const location=useLocation()
    
  return (
    <div className={style.sideBar}>
        <div className={style.sideBarIcon}>
            <ArticleIcon sx={{fontSize:54,marginBottom:2}}/>
        
            <div className={style.sideBarTopContent}>Resume Screening</div>

        </div>
        <div className={style.sideBarOptionBlock}>

                <Link to={'/dashboard'} className={[style.sideBarOption,location.pathname==='/dashboard'?style.selectedOption:null].join(' ')}>
                    <Dashboard sx={{fontSize:22}}/>
                    <div>Dashboard</div>
                </Link>

                <Link to={'/history'} className={[style.sideBarOption,location.pathname==='/history'?style.selectedOption:null].join(' ')}>
                    <HistoryIcon sx={{fontSize:22}}/>
                    <div>History</div>
                </Link>

                <Link to={'/admin'} className={[style.sideBarOption,location.pathname==='/admin'?style.selectedOption:null].join(' ')}>
                    <AdminPanelSettingsIcon sx={{fontSize:22}}/>
                    <div>Admin</div>
                </Link>

                <div className={style.sideBarOption}>
                    <LogoutIcon sx={{fontSize:22}}/>
                    <div>Logout</div>
                </div>



            </div>
    </div>
  )
}

export default SideBar
