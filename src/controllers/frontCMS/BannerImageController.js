import BannerImageModel from "../../models/frontCMS/BannerImage.js";

const createBannerImage = async (req, res) => {
  try {
    const result = new BannerImageModel({
      school: req.body.school,
      file: req.body.file,
      fileType: req.body.fileType,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteBannerImage = async (req, res) => {
  try {
    if (!(await BannerImageModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await BannerImageModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateBannerImage = async (req, res) => {
  try {
    const visitorBook = await BannerImageModel.findByIdAndUpdate(
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

const getAllBannerImage = async (req, res) => {
  try {
    const BannerImage = await BannerImageModel.find();
    return res.send(BannerImage);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createBannerImage,
  deleteBannerImage,
  UpdateBannerImage,
  getAllBannerImage,
};
