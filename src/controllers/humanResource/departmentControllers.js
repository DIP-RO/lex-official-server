import DepartmentModel from "../../models/humanResource/department.js";

const createDepartment = async (req, res) => {
  try {
    const result = new DepartmentModel({
      school: req.body.school,
      name: req.body.name,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    if (!(await DepartmentModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await DepartmentModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateDepartment = async (req, res) => {
  try {
    const visitorBook = await DepartmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!visitorBook) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(visitorBook);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllDepartment = async (req, res) => {
  try {
    const Department = await DepartmentModel.find();
    return res.send(Department);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createDepartment,
  deleteDepartment,
  UpdateDepartment,
  getAllDepartment,
};
