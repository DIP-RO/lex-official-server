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
        const meet = await GMeetModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        );
        if (!meet) {
            return res.status(404).send({
                error: "meet not found"
            });
        }
        return res.send(meet);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getGMeets = async (req, res) => {
    try {
        const meets = await GMeetModel.find();
        return res.status(200).send(meets);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export {
    createLiveClass,
    deleteLiveClass,
    UpdateGMeets,
    getGMeets,
};