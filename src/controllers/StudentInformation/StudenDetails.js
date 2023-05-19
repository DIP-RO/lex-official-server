import StudentAdmissionModel from "../../models/StudentInformation/StudentAdmission.js";

const studentDetails = async (req, res) => {
  try {
    const { name, rollNumber, admissionId, value } = req.query;

    const filters = {};

    if (name) {
      filters.$or = [
        { firstName: { $regex: name, $options: "i" } },
        { lastName: { $regex: name, $options: "i" } },
      ];
    }

    if (rollNumber) {
      filters.rollNumber = { $regex: rollNumber, $options: "i" };
    }

    if (admissionId) {
      filters.admissionId = { $regex: admissionId, $options: "i" };
    }

    if (value) {
      filters.$or = [
        { class: { $regex: value, $options: "i" } },
        { section: { $regex: value, $options: "i" } },
      ];
    }

    const result = await StudentAdmissionModel.find(filters);
    res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const bulkDelete = async (req, res) => {
  try {
    const ids = req.body.ids;
    ids.map(async (id) => {
      await StudentAdmissionModel.findByIdAndRemove(id);
    });

    return res.status(200).send({ message: "Completed!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { studentDetails, bulkDelete };
