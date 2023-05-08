import PostalDispatchModel from "../../models/frontOffice/PostalDispatch.js";
const createPostalDispatch = async (req, res) => {
  try {
    const result = new PostalDispatchModel({
      school: req.body.school,
      toTitle: req.body.toTitle,
      referenceNo: req.body.referenceNo,
      formTitle: req.body.formTitle,
      date: req.body.date,
      address: req.body.address,
      Note: req.body.Note,
      inTime: req.body.inTime,
      outTime: req.body.outTime,
      attachDocument: `http://localhost:5000/postal-dispatch/files/${
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

const deletePostalDispatch = async (req, res) => {
  try {
    if (!(await PostalDispatchModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await PostalDispatchModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdatePostalDispatch = async (req, res) => {
  try {
    const PostalDispatch = await PostalDispatchModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!PostalDispatch) {
      return res.status(404).send({ error: "Visitor book not found" });
    }
    return res.send(PostalDispatch);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllPostalDispatch = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await PostalDispatchModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await PostalDispatchModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await PostalDispatchModel.countDocuments(
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
  createPostalDispatch,
  deletePostalDispatch,
  UpdatePostalDispatch,
  getAllPostalDispatch,
};
