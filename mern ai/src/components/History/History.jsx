import React from 'react'
import style from './History.module.css'
import { Skeleton } from '@mui/material'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
const History = () => {
  return (
    <div className={style.History}>
      <div className={style.HistoryCardBlock}>
      <Skeleton variant='rectangular' 
      sx={{borderRadius:"20px"}} 
      width={266} 
      height={200}/>
        <div className={style.HistoryCard}>
          <div className={style.cardPercentage}>80%</div>
          <h2>Fronten Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae odit hic consectetur placeat ea fugit provident cumque rerum, quam inventore consequatur ipsum assumenda? Reprehenderit porro eos deserunt exercitationem aliquam iste!</p>
          <p>Dated : 2025-11-25</p>
        </div>

        <div className={style.HistoryCard}>
          <div className={style.cardPercentage}>80%</div>
          <h2>Fronten Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae odit hic consectetur placeat ea fugit provident cumque rerum, quam inventore consequatur ipsum assumenda? Reprehenderit porro eos deserunt exercitationem aliquam iste!</p>
          <p>Dated : 2025-11-25</p>
        </div>

        <div className={style.HistoryCard}>
          <div className={style.cardPercentage}>80%</div>
          <h2>Fronten Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae odit hic consectetur placeat ea fugit provident cumque rerum, quam inventore consequatur ipsum assumenda? Reprehenderit porro eos deserunt exercitationem aliquam iste!</p>
          <p>Dated : 2025-11-25</p>
        </div>


        <div className={style.HistoryCard}>
          <div className={style.cardPercentage}>80%</div>
          <h2>Fronten Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae odit hic consectetur placeat ea fugit provident cumque rerum, quam inventore consequatur ipsum assumenda? Reprehenderit porro eos deserunt exercitationem aliquam iste!</p>
          <p>Dated : 2025-11-25</p>
        </div>



      </div>
 
    </div>
  )
}

export default WithAuthHOC(History)
