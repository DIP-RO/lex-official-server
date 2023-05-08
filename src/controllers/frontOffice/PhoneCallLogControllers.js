import PhoneCallLogModel from "../../models/frontOffice/PhoneCallLog.js";

const createPhoneCallLog = async (req, res) => {
  try {
    const result = new PhoneCallLogModel({
      school: req.body.school,
      name: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      callTypes: req.body.callTypes,
      nextFollowUpData: req.body.nextFollowUpData,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletePhoneCallLog = async (req, res) => {
  try {
    if (!(await PhoneCallLogModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PhoneCallLogModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePhoneCallLog = async (req, res) => {
  try {
    const visitorBook = await PhoneCallLogModel.findByIdAndUpdate(
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

const getAllPhoneCallLogs = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await PhoneCallLogModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await PhoneCallLogModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await PhoneCallLogModel.countDocuments(
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

export {
  createPhoneCallLog,
  deletePhoneCallLog,
  UpdatePhoneCallLog,
  getAllPhoneCallLogs,
};
