import EmailTemplateModel from "../../models/communicate/EmailTemplate.js";

const createEmailTemplate = async (req, res) => {
  try {
    const result = new EmailTemplateModel({
      school: req.body.school,
      title: req.body.title,
      attachedFile: req.body.attachedFile,
      message: req.body.message,
      attachDocument: `http://localhost:5000/email-template/files/${
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

const deleteEmailTemplate = async (req, res) => {
  try {
    if (!(await EmailTemplateModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await EmailTemplateModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateEmailTemplate = async (req, res) => {
  try {
    const visitorBook = await EmailTemplateModel.findByIdAndUpdate(
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

const getAllEmailTemplate = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await EmailTemplateModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await EmailTemplateModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await EmailTemplateModel.countDocuments(
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
  createEmailTemplate,
  deleteEmailTemplate,
  UpdateEmailTemplate,
  getAllEmailTemplate,
};
