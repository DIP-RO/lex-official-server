import StudentAdmissionModel from "../../models/StudentInformation/StudentAdmission.js";

const studentDetails = async(req,res)=>{
    try {
        const studentClass = req.query.class
        const section = req.query.section

        const result = await StudentAdmissionModel.find({class:studentClass,section:section})
        res.status(200).send(result)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export { studentDetails };

