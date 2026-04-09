const ResumeModel = require("../Models/resume");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const path = require("path");
const {CohereClient} = require("cohere-ai");

const cohere = new CohereClient({
  token:"NdVYQfEi6MIytClNqpCKqvBlyir526Ukg2CmHOzp",
})
exports.addResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;
    // console.log(req.file)
    // console.log(job_desc,user)

    const pdfBuffer = req.file.buffer || null;
    const pdfPath = req.file.path;
    const fs = require("fs");
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdfParse(dataBuffer);

    const prompt = `
        You are a resume analyzer. Your task is to analyze the resume and job description and provide a score out of 100 and give a feedback.
        
        Resume:${pdfData.text}

        Job Description:${job_desc}

        Return the score and a brief explanation in this format:
        Score:XX
        Reason: ...

      `;

    const response = await cohere.chat({
      model:"command-r-plus-08-2024",
      message: prompt,
      maxTokens: 400,
      temperature: 0.7,
    })

    let result = response.text;
    

    const match = result.match(/Score:\s*(\d+)/);
    const score = match ? parseInt(match[1],10) : null;

    const reasonMatch = result.match(/Reason:\s*([\s\S]*)/)
    const reason = reasonMatch ? reasonMatch[1].trim() : null;

    

    const  newResume = new ResumeModel({
      user,
      resume_name:req.file.originalname,
      job_desc,
      score,
      feedback:reason
    })

    await newResume.save();

    fs.unlinkSync(pdfPath);//remove tep files

    res.status(200).json({
      message:"Your analysis are ready", data: newResume
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};


exports.getAllResumeForUser = async (req,res)=>{
  try{
      const {user} = req.params;
      let resumes = await ResumeModel.find({user:user}).sort({createdAt : -1})
      return res.status(200).json({message:"Your Previous History",resumes:resumes})
      
  }
  catch(err){
    console.log(err);
    return res.status(500).json({error:'Server Error',message:err.message})
  }
}

exports.getResumeForAdmin  = async (req,res)=>{
  try{
    let resumes = await ResumeModel.find({}).sort({createdAt : -1})
      return res.status(200).json({message:"Fetched All History",resumes:resumes}) 
  }
  catch(err){
    console.log(err);
    return res.status(500).json({error:'Server Error',message:err.message})
  }
}