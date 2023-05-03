import BookListModel from "../../models/library/BookList.js";

const createBookList = async (req, res) => {
  try {
    const result = new BookListModel({
      school: req.body.school,
      name: req.body.name,
      bookNumber: req.body.bookNumber,
      isbnNumber: req.body.isbnNumber,
      publisher: req.body.publisher,
      author: req.body.author,
      subject: req.body.subject,
      rackNumber: req.body.rackNumber,
      qty: req.body.qty,
      bookPrice: req.body.bookPrice,
      description: req.body.description,
      status: req.body.status,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteBookList = async (req, res) => {
  try {
    if (!(await BookListModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await BookListModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateBookList = async (req, res) => {
  try {
    const visitorBook = await BookListModel.findByIdAndUpdate(
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

const getAllBookList = async (req, res) => {
  try {
    const BookList = await BookListModel.find();
    return res.send(BookList);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export { createBookList, deleteBookList, UpdateBookList, getAllBookList };
