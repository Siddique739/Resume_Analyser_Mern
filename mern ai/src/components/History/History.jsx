import React, { useState, useEffect, useContext } from 'react'
import style from './History.module.css'
import { Skeleton } from '@mui/material'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
import axios from '../../utils/axios'
import { AuthContext } from '../../utils/AuthContext'

const History = () => {
    const [data,setData] =  useState([]);
    const [loader,setLoader] = useState(false);

    const {userInfo} = useContext(AuthContext)

    useEffect(()=>{
      const fetchUserData = async ()=>{
        setLoader(true);
        try{
            const results = await axios.get(`/api/resume/get/${userInfo?._id}`)
            console.log(results.data.resumes)
             setData(results.data.resumes)
        }catch(err){
            console.log(err)
            alert("Something Went Wrong");
           
        }finally{
           setLoader(false);
        }
      }

      fetchUserData();
    },[])

  return (
    <div className={style.History}>
      <div className={style.HistoryCardBlock}>
      {
        loader && <>
        <Skeleton variant='rectangular' 
      sx={{borderRadius:"20px"}} 
      width={200} 
      height={200}/>
      <Skeleton variant='rectangular' 
      sx={{borderRadius:"20px"}} 
      width={200} 
      height={200}/>
      <Skeleton variant='rectangular' 
      sx={{borderRadius:"20px"}} 
      width={200} 
      height={200}/>
      <Skeleton variant='rectangular' 
      sx={{borderRadius:"20px"}} 
      width={200} 
      height={200}/>
        </>
      }
        

        {
          data.map((item,index)=>{
            return(
            <div key={item._id} className={style.HistoryCard}>
          <div className={style.cardPercentage}>{item.score}%</div>
          {/* <h2>{Frontend developer}</h2> */}
          <p>Resume Name : {item.resume_name}</p>
          <p>{item.feedback}</p>
          <p>Dated :{item.createdAt.slice(0,10)}</p>
        </div>
        )
          })
        }



      </div>
 
    </div>
  )
}

export default WithAuthHOC(History)
