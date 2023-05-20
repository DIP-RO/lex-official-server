import LiveMeetingModel from "../../models/gMeet/liveMeeting.js";

const createLiveMeeting = async (req, res) => {
  try {
    const result = new LiveMeetingModel({
      school: req.body.school,
      classTitle: req.body.classTitle,
      classDate: req.body.classDate,
      classDuration: req.body.classDuration,
      staff: req.body.staff,
      role: req.body.role,
      class: req.body.class,
      section: req.body.section,
      url: req.body.url,
      description: req.body.description,
    });
    await result.validate();
    await result.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deleteLiveMeeting = async (req, res) => {
  try {
    if (!(await LiveMeetingModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await LiveMeetingModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateLiveMeeting = async (req, res) => {
  try {
    const meet = await LiveMeetingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!meet) {
      return res.status(404).send({
        error: "meet not found",
      });
    }
    return res.send(meet);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getLiveMeeting = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await LiveMeetingModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await LiveMeetingModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await LiveMeetingModel.countDocuments(
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
  createLiveMeeting,
  deleteLiveMeeting,
  UpdateLiveMeeting,
  getLiveMeeting,
};
