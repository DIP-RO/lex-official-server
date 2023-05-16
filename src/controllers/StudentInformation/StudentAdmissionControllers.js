import StudentAdmissionModel from "../../models/StudentInformation/StudentAdmission.js";

const createAdmission = async(req, res)=>{
    try {
        console.log(req.body);
        const result = new StudentAdmissionModel(req.body)
        await result.validate()
        await result.save()
        res.status(201).send(result)
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
}


export { createAdmission };
