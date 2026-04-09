import React, { useState } from 'react'
import style from './Admin.module.css'
import { Skeleton, StyledEngineProvider } from '@mui/material'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
const Admin = () => {
    
    const [data,setData] =  useState([]);
    const [loader,setLoader] = useState(false);


  return (
    <div className={style.Admin}>
      <div className={style.AdminBlock}>

      <Skeleton  variant='rectangular' 
      sx={{borderRadius:"20px"}} 
      width={266} 
      height={200}/>

      <div className={style.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color:'blue'}}>ms123@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit facere qui? Minima sunt debitis ad totam quod. Odio ut deleniti pariatur laborum impedit aliquid, vel dolore deserunt libero voluptatem?</p>
      </div>


      <div className={style.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color:'blue'}}>ms123@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit facere qui? Minima sunt debitis ad totam quod. Odio ut deleniti pariatur laborum impedit aliquid, vel dolore deserunt libero voluptatem?</p>
      </div>


      <div className={style.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color:'blue'}}>ms123@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit facere qui? Minima sunt debitis ad totam quod. Odio ut deleniti pariatur laborum impedit aliquid, vel dolore deserunt libero voluptatem?</p>
      </div>


      <div className={style.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color:'blue'}}>ms123@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit facere qui? Minima sunt debitis ad totam quod. Odio ut deleniti pariatur laborum impedit aliquid, vel dolore deserunt libero voluptatem?</p>
      </div>
      </div>
      
    </div>
  )
}
export default WithAuthHOC(Admin);
