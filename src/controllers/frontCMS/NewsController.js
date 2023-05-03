import NewsModel from "../../models/frontCMS/News.js";

const createNews = async (req, res) => {
  try {
    const result = new NewsModel({
      school: req.body.school,
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      images: req.body.images,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteNews = async (req, res) => {
  try {
    if (!(await NewsModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await NewsModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateNews = async (req, res) => {
  try {
    const visitorBook = await NewsModel.findByIdAndUpdate(
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

const getAllNews = async (req, res) => {
  try {
    const News = await NewsModel.find();
    return res.send(News);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createNews, deleteNews, UpdateNews, getAllNews };
