// import path from "path";
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// // serve products images
// const complainFiles = async (req, res) => {
//   try {
//     const imageName = req.params.fileName;
//     const filePath = path.join(
//       __dirname,
//       "uploads",
//       "files",
//       "complain_box",
//       imageName
//     );
//     console.log(filePath);
//     return res.sendFile(filePath);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send({ message: "Invalid Requests!" });
//   }
// };

// export { complainFiles };
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createReadStream } from "fs";
import { createServer } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// serve products images
const complainFiles = async (req, res) => {
  try {
    const imageName = req.params.fileName;
    const filePath = join(
      __dirname,
      "uploads",
      "files",
      "complain_box",
      imageName
    );
    console.log(filePath);
    const stream = createReadStream(filePath);
    stream.pipe(res);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};

export { complainFiles };
