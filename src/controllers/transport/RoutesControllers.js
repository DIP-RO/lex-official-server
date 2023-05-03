import RoutesModel from "../../models/transport/Routes.js";

const createRoutes = async (req, res) => {
  try {
    const result = new RoutesModel({
      school: req.body.school,
      name: req.body.name,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteRoutes = async (req, res) => {
  try {
    if (!(await RoutesModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await RoutesModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateRoutes = async (req, res) => {
  try {
    const visitorBook = await RoutesModel.findByIdAndUpdate(
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

const getAllRoutes = async (req, res) => {
  try {
    const Routes = await RoutesModel.find();
    return res.send(Routes);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createRoutes, deleteRoutes, UpdateRoutes, getAllRoutes };
