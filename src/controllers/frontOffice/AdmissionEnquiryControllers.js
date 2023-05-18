import AdmissionEnquiryModel from "../../models/frontOffice/AdmissionEnquiry.js";

const createAdmissionEnquiry = async (req, res) => {
  try {
    const result = new AdmissionEnquiryModel({
      school: req.body.school,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      class: req.body.class,
      numberOfChild: req.body.numberOfChild,
      date: req.body.date,
      assigned: req.body.assigned,
      note: req.body.note,
      description: req.body.description,
      reference: req.body.reference,
      source: req.body.source,
      enquiryData: req.body.enquiryData,
      lastFollowUpData: req.body.lastFollowUpData,
      nextFollowUpData: req.body.nextFollowUpData,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAdmissionEnquiry = async (req, res) => {
  try {
    if (!(await AdmissionEnquiryModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await AdmissionEnquiryModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAdmissionEnquiry = async (req, res) => {
  try {
    const visitorBook = await AdmissionEnquiryModel.findByIdAndUpdate(
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

// const getAllAdmissionEnquiries = async (req, res) => {
//   try {
//     if (req.params.id) {
//       const admissionEnquiries = await AdmissionEnquiryModel.findById(
//         req.params.id
//       );
//       return res.status(200).send(admissionEnquiries);
//     }
//     const query = req.query.school;
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 2;
//     const startIndex = (page - 1) * limit;
//     const admissionEnquiries = await AdmissionEnquiryModel.find({
//       school: query,
//     })
//       .sort({ created_at: -1 })
//       .skip(startIndex)
//       .limit(limit);
//     console.log(admissionEnquiries);

//     const count = await AdmissionEnquiryModel.countDocuments();

//     return res.status(200).send({
//       data: admissionEnquiries,
//       pagination: {
//         currentPage: page,
//         totalPages: Math.ceil(count / limit),
//         totalItems: count,
//       },
//     });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };
const getAllAdmissionEnquiries = async (req, res) => {
  try {
    if (req.params.id) {
      const admissionEnquiries = await AdmissionEnquiryModel.findById(
        req.params.id
      );
      return res.status(200).send(admissionEnquiries);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const admissionEnquiries = await AdmissionEnquiryModel.find(
      query ? { school: query } : {}
    )
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await AdmissionEnquiryModel.countDocuments(
      query ? { school: query } : {}
    );

    return res.status(200).send({
      data: admissionEnquiries,
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

const filterAdmissionEnquiry = async (req, res) => {
  try {
    const filters = {};
    if (req.query.class) {
      filters.class = req.query.class;
    }
    if (req.query.source) {
      filters.source = req.query.source;
    }
    if (req.query.fromDate) {
      filters.date = req.query.fromDate;
    }
    if (req.query.toDate) {
      filters.date = req.query.toDate;
    }
    if (req.query.status) {
      filters.status = req.query.status;
    }
    const data = await AdmissionEnquiryModel(filters);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  createAdmissionEnquiry,
  deleteAdmissionEnquiry,
  UpdateAdmissionEnquiry,
  getAllAdmissionEnquiries,
  filterAdmissionEnquiry,
};
