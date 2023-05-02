import NoticeBoardModel from "../../models/communicate/NoticeBoard.js";

const createNoticeBoard = async (req, res) => {
  try {
    const result = new NoticeBoardModel({
      school: req.body.school,
      title: req.body.title,
      noticeDate: req.body.noticeDate,
      publishOn: req.body.publishOn,
      attachedFile: req.body.attachedFile,
      message: req.body.message,
      messageTo: req.body.messageTo,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteNoticeBoard = async (req, res) => {
  try {
    if (!(await NoticeBoardModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await NoticeBoardModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateNoticeBoard = async (req, res) => {
  try {
    const visitorBook = await NoticeBoardModel.findByIdAndUpdate(
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

const getAllNoticeBoard = async (req, res) => {
  try {
    const NoticeBoard = await NoticeBoardModel.find();
    return res.send(NoticeBoard);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export {
  createNoticeBoard,
  deleteNoticeBoard,
  UpdateNoticeBoard,
  getAllNoticeBoard,
};
