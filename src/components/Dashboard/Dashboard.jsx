import React from 'react'
import style from "./Dashboard.module.css"
import logo from "./newPerson.avif"
import  Skeleton  from '@mui/material/Skeleton';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <div className={style.DashboardLeft}>
        <div className={style.DashboardHeader}>
          <div className={style.DashboardHeaderTitle}>Smart Resume Screening</div>
          <div className={style.DashboardHeaderLargeTitle}>Resume Match Score</div>

          <div className={style.alertInfo}>
            <div>🔔 Important Instructions:</div>
            <div className={style.DashboardInstruction}>
              <div>📄 Please paste the complete job description in the "Job Description" field before submitting.</div>
              <div >📎 Only PDF format (.pdf) resume are accepted.</div>
            </div>



          </div>
          <div className={style.DashboardUploadResume}>
            <div className={style.DashboardResumeBlock}>
              Upload Your Resume
            </div>
            <div className={style.DashboardInputField}>
              <label htmlFor='inputField' className={style.analyzeAIBtn}>Upload Resume</label>
              <input type='file' accept='.pdf' id='inputField' />
            </div>
          </div>

          <div className={style.jobDesc}>
            <textarea className={style.textarea} placeholder='Paste Your Job Description' rows={10} cols={50} />
            <div className={style.AnalyzeBtn}>Analyze</div>
            


          </div>
        </div>
      </div>
      <div className={style.DashboardRight}>
        <div className={style.DashboardRightTopCard}>
          <div>Analyze With AI</div>
          <img className={style.profileImg} src={logo}/>
          <h2>Coding Hunger</h2>
        </div>


{/* <div className={style.DashboardRightTopCard}>
          <div>Result</div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>
            <h1> 75% </h1>
            <CreditScoreIcon sx={{fontSize:22}}/>
          </div>
          <div className={style.feedback}>
            <h3>FeedBack</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium ipsam quidem ut facilis aliquam eaque non dolorum eos! Fugiat quo est omnis eveniet officiis adipisci commodi, aliquam quis deserunt.</p>
          </div>
        </div> */}



<Skeleton variant='rectangular' sx={{borderRadius:"20px"}} width={280} height={280 }/>
        
      </div>
    </div>
  )
}

export default WithAuthHOC(Dashboard)
