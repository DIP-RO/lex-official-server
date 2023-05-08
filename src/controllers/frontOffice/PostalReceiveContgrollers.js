import PostalReceiveModel from "../../models/frontOffice/PostalReceive.js";

const createPostalReceive = async (req, res) => {
  try {
    const result = new PostalReceiveModel({
      school: req.body.school,
      formTitle: req.body.formTitle,
      referenceNo: req.body.referenceNo,
      address: req.body.address,
      note: req.body.note,
      toTitle: req.body.toTitle,
      date: req.body.date,
      attachDocument: `http://localhost:5000/postal-receive/files/${
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

const deletePostalReceive = async (req, res) => {
  try {
    if (!(await PostalReceiveModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PostalReceiveModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePostalReceive = async (req, res) => {
  try {
    const PostalReceive = await PostalReceiveModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!PostalReceive) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(PostalReceive);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllPostalReceive = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await PostalReceiveModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await PostalReceiveModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await PostalReceiveModel.countDocuments(
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
  createPostalReceive,
  deletePostalReceive,
  UpdatePostalReceive,
  getAllPostalReceive,
};
