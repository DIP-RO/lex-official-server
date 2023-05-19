import StudentAdmissionModel from "../../models/StudentInformation/StudentAdmission.js";

const createAdmission = async (req, res) => {
  try {
    const attachDocuments = [];

    if (req.files) {
      for (const fieldName in req.files) {
        const files = req.files[fieldName];
        files.forEach((file) => {
          const originalName = file.originalname;
          const fileName = originalName.substring(
            0,
            originalName.lastIndexOf(".")
          );
          const fileUrl = `http://localhost:5000/student-admission/files/${file.filename}`;
          const document = {
            [fieldName]: fileUrl,
          };
          attachDocuments.push(document);
        });
      }
    }
    const result = new StudentAdmissionModel({
      school: req.body.school,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      admissionNo: req.body.admissionNo,
      rollNumber: req.body.rollNumber,
      paymentStatus: req.body.paymentStatus,
      formStatus: req.body.formStatus,
      class: req.body.class,
      section: req.body.section,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      category: req.body.category,
      religion: req.body.religion,
      caste: req.body.caste,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      admissionDate: req.body.admissionDate,
      bloodGroup: req.body.bloodGroup,
      house: req.body.house,
      height: req.body.height,
      weight: req.body.weight,
      measurementDate: req.body.measurementDate,
      medicalHistory: req.body.medicalHistory,
      routeList: req.body.routeList,
      pickupPoint: req.body.pickupPoint,
      feesMonth: req.body.feesMonth,
      hostel: req.body.hostel,
      roomNo: req.body.roomNo,
      feesDetails: req.body.feesDetails,
      fatherName: req.body.fatherName,
      fatherPhone: req.body.fatherPhone,
      fatherOccupation: req.body.fatherOccupation,
      motherName: req.body.motherName,
      motherPhone: req.body.motherPhone,
      motherOccupation: req.body.motherOccupation,
      ifGuardianIs: req.body.ifGuardianIs,
      guardianName: req.body.guardianName,
      guardianRelation: req.body.guardianRelation,
      guardianPhone: req.body.guardianPhone,
      guardianOccupation: req.body.guardianOccupation,
      guardianEmail: req.body.guardianEmail,
      guardianAddress: req.body.guardianAddress,
      ifGuardianIsCurrentAddress: req.body.ifGuardianIsCurrentAddress,
      currentAddress: req.body.currentAddress,
      ifPermanentIsCurrentAddress: req.body.ifPermanentIsCurrentAddress,
      permanentCurrent: req.body.permanentCurrent,
      bankAccountNumber: req.body.bankAccountNumber,
      bankName: req.body.bankName,
      IFSCCode: req.body.IFSCCode,
      nationalIdentificationNumber: req.body.nationalIdentificationNumber,
      localIdentificationNumber: req.body.localIdentificationNumber,
      rte: req.body.rte,
      previousSchoolDetails: req.body.previousSchoolDetails,
      note: req.body.note,
      title_1: req.body.title_1,
      title_2: req.body.title_2,
      title_3: req.body.title_3,
      title_4: req.body.title_4,
      attachDocument: attachDocuments,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const onlineAdmission = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await StudentAdmissionModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await StudentAdmissionModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await StudentAdmissionModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export { createAdmission, onlineAdmission };
