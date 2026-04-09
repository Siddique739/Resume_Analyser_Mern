import React from 'react'
import style from "./Dashboard.module.css"
import logo from "./newPerson.avif"
import  Skeleton  from '@mui/material/Skeleton';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useContext } from 'react';
import { AuthContext } from '../../utils/AuthContext';


const Dashboard = () => {
  const [uploadFiletext,setUploadFileText] = useState("Upload your resume")
  const [loading,setLoading] = useState(false)
  const [resumeFile,setResumeFile] = useState(null)
  const [jobDesc,setJobDesc] = useState("")

  const[result,setResult] = useState(null)

  const {userInfo} = useContext(AuthContext);

const handleOnChangeFile = (e)=>{
  setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name)
}

const handleUpload = async ()=>{
    
     
    setResult(null);
    if(!jobDesc || !resumeFile){
      alert("Please fill Job Description & upload Resume");
      return;
    }
    const formData = new FormData();
    formData.append("resume",resumeFile);
    formData.append("job_desc",jobDesc);
    formData.append("user",userInfo._id);
    setLoading(true);
    try{
          const result = await axios.post('/api/resume/addResume',formData)
          setResult(result.data.data)
    }
    catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
}

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
              {uploadFiletext}
            </div>
            <div className={style.DashboardInputField}>
              <label htmlFor='inputField' className={style.analyzeAIBtn}>Upload Resume</label>
              <input type='file' accept='.pdf' id='inputField' onChange={handleOnChangeFile}/>
            </div>
          </div>

          <div className={style.jobDesc}>
            <textarea value={jobDesc} onChange={(e)=>{setJobDesc(e.target.value)}} className={style.textarea} placeholder='Paste Your Job Description' rows={10} cols={50} />
            <div className={style.AnalyzeBtn} onClick={handleUpload}>Analyze</div>
            


          </div>
        </div>
      </div>
      <div className={style.DashboardRight}>
        <div className={style.DashboardRightTopCard}>
          <div>Analyze With AI</div>
          <img className={style.profileImg} src={userInfo?.photoUrl}/>
          <h2>{userInfo?.name}</h2>
        </div>


        {
          result && <div className={style.DashboardRightTopCard}>
          <div>Result</div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>
            <h1> {result?.score}% </h1>
            <CreditScoreIcon sx={{fontSize:22}}/>
          </div>
          <div className={style.feedback}>
            <h3>FeedBack</h3>
            <p>{result?.feedback}</p>
          </div>
        </div>
        }

        {
            loading && <Skeleton variant='rectangular' sx={{borderRadius:"20px"}} width={280} height={280 }/>
        }


        
      </div>
    </div>
  )
}

export default WithAuthHOC(Dashboard)
