import GMeetModel from "../../models/gMeet/gMeet.js";

const createLiveClass = async (req, res) => {
  try {
    const result = new GMeetModel({
      school: req.body.school,
      meetTitle: req.body.meetTitle,
      meetDate: req.body.meetDate,
      meetDuration: req.body.meetDuration,
      staff: req.body.staff,
      class: req.body.class,
      section: req.body.section,
      url: req.body.url,
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

const deleteLiveClass = async (req, res) => {
  try {
    if (!(await GMeetModel.findById(req.params.id))) {
      return res.status(400).send({
        message: "Invalid Id!",
      });
    }
    await GMeetModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
const UpdateGMeets = async (req, res) => {
  try {
    const meet = await GMeetModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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

const getGMeets = async (req, res) => {
  try {
    if (req.params.id) {
      const data = await GMeetModel.findById(req.params.id);
      return res.status(200).send(data);
    }
    const query = req.query.school;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const startIndex = (page - 1) * limit;
    const data = await GMeetModel.find(query ? { school: query } : {})
      .sort({ created_at: -1 })
      .skip(startIndex)
      .limit(limit);

    const count = await GMeetModel.countDocuments(
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

export { createLiveClass, deleteLiveClass, UpdateGMeets, getGMeets };
