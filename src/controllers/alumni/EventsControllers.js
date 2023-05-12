import AlumniEventModel from "../../models/alumni/Events.js";

const createAlumniEvent = async (req, res) => {
  try {
    const result = new AlumniEventModel({
      school: req.body.school,
      passOutSession: req.body.passOutSession,
      class: req.body.class,
      section: req.body.section,
      eventFor: req.body.eventFor,
      title: req.body.title,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      banner: req.body.banner,
      note: req.body.note,
      notificationMessage: req.body.notificationMessage,
      email: req.body.email,
      sms: req.body.sms,
      templateID: req.body.templateID,
      attachDocument: `http://localhost:5000/alumni-event/files/${
        req?.file?.filename ? req?.file?.filename : "null"
      }`,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteAlumniEvent = async (req, res) => {
  try {
    if (!(await AlumniEventModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await AlumniEventModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateAlumniEvent = async (req, res) => {
  try {
    const visitorBook = await AlumniEventModel.findByIdAndUpdate(
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

const getAllAlumniEvent = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await AlumniEventModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await AlumniEventModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await AlumniEventModel.countDocuments(
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
  createAlumniEvent,
  deleteAlumniEvent,
  UpdateAlumniEvent,
  getAllAlumniEvent,
};
