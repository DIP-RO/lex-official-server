import offlinePaymentModel from "../../models/OnlineCourse/OflinePayments.js";


const createOfflinePayment = async (req, res) => {
  try {
    const result = new offlinePaymentModel({
      school: req.body.school,
      course: req.body.course,
      section: req.body.section,
      lesson: req.body.lesson,
      quiz: req.body.quiz,
      courseProvider: req.body.courseProvider,
      price: req.body.price,
      currentPrice: req.body.currentPrice,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteOfflinePayment = async (req, res) => {
  try {
    if (!(await offlinePaymentModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await offlinePaymentModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateOfflinePayment = async (req, res) => {
  try {
    const visitorBook = await offlinePaymentModel.findByIdAndUpdate(
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

const getAllOfflinePayment = async (req, res) => {
  try {
    const OfflinePayment = await offlinePaymentModel.find();
    return res.send(OfflinePayment);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createOfflinePayment, deleteOfflinePayment, UpdateOfflinePayment, getAllOfflinePayment };
