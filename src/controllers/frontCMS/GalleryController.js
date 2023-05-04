import GalleryModel from "../../models/frontCMS/Gallery.js";

const createGallery = async (req, res) => {
  try {
    const result = new GalleryModel({
      school: req.body.school,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteGallery = async (req, res) => {
  try {
    if (!(await GalleryModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GalleryModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGallery = async (req, res) => {
  try {
    const visitorBook = await GalleryModel.findByIdAndUpdate(
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

const getAllGallery = async (req, res) => {
  try {
    const Gallery = await GalleryModel.find();
    return res.send(Gallery);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createGallery, deleteGallery, UpdateGallery, getAllGallery };