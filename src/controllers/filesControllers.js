import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// serve products images
const complainFiles = async (req, res) => {
  try {
    const fileName = req.params.fileName;
    const normalizedPath = __dirname.replace(/^\/+/, "");
    console.log(normalizedPath);
    const filePath = path.join(
      normalizedPath,
      "uploads",
      "files",
      "complain_box",
      fileName
    );
    console.log(filePath);
    return res.sendFile(filePath);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Invalid Requests!" });
  }
};

export { complainFiles };
