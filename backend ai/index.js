const express = require('express');

const app = express();
require('./conn')

app.use(express.json());

const PORT = 4000;

const UserRoutes = require("./Routes/user");
const ResumeRoutes = require('./Routes/resume')
app.use("/api/user",UserRoutes);
app.use('/api/resume',ResumeRoutes)
app.listen(PORT,() =>{
  console.log("backend is running ",PORT)
})