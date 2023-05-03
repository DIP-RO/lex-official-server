import StaffIDCardModel from "../../models/certificate/StaffIDCard.js";

const createStaffIDCard = async (req, res) => {
  try {
    const result = new StaffIDCardModel({
      school: req.body.school,
      bgImage: req.body.bgImage,
      logo: req.body.logo,
      schoolName: req.body.schoolName,
      addressEmailPhone: req.body.addressEmailPhone,
      title: req.body.title,
      headerColor: req.body.headerColor,
      StaffName: req.body.StaffName,
      StaffID: req.body.StaffID,
      designation: req.body.designation,
      department: req.body.department,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      currentAddress: req.body.currentAddress,
      dateOfJoining: req.body.dateOfJoining,
      phone: req.body.phone,
      dob: req.body.dob,
      designType: req.body.designType,
      barCode: req.body.barCode,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteStaffIDCard = async (req, res) => {
  try {
    if (!(await StaffIDCardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await StaffIDCardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateStaffIDCard = async (req, res) => {
  try {
    const visitorBook = await StaffIDCardModel.findByIdAndUpdate(
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

const getAllStaffIDCard = async (req, res) => {
  try {
    const StaffIDCard = await StaffIDCardModel.find();
    return res.send(StaffIDCard);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createStaffIDCard,
  deleteStaffIDCard,
  UpdateStaffIDCard,
  getAllStaffIDCard,
};
