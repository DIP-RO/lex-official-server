import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// serve products images
const complainFiles = async (req, res) => {
  try {
    const imageName = req.params.fileName;
    const filePath = path.join(
      __dirname,
      "uploads",
      "files",
      "complain_box",
      imageName
    );
    console.log(filePath);
    return res.sendFile(filePath);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Invalid Requests!" });
  }
};

export { complainFiles };
