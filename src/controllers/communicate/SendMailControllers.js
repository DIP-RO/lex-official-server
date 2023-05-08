import SendMailModel from "../../models/communicate/SendMail.js";

const createSendMail = async (req, res) => {
  try {
    const result = new SendMailModel({
      school: req.body.school,
      template: req.body.template,
      title: req.body.title,
      attachedFile: req.body.attachedFile,
      message: req.body.message,
      messageTo: req.body.messageTo,
      sendNow: req.body.sendNow,
      scheduleDate: req.body.scheduleDate,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteSendMail = async (req, res) => {
  try {
    if (!(await SendMailModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await SendMailModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateSendMail = async (req, res) => {
  try {
    const visitorBook = await SendMailModel.findByIdAndUpdate(
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

const getAllSendMail = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await SendMailModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await SendMailModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await SendMailModel.countDocuments(
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
export { createSendMail, deleteSendMail, UpdateSendMail, getAllSendMail };
