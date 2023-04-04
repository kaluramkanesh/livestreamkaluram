// const express = require("express");
// const PORT = process.env.PORT || 8000;
// const https = require("https");
// const app = express();
// const fs = require("fs");
// app.get("/kaluram", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
// // app.get("/video",
// //   function (req, res) {
// //       const range = req.headers.range;
// //       console.log("Hello")
// //     if (!range) {
// //       res
// //         .status(400)
// //         .send({ status: false, message: "Requires range hearder" });
// //     }
// //     const videoPath ="./JavaScriptVideos.mp4"; //videoURL
// //     const videosSize = fs.statSync(videoPath).size;

// //     const Chunk_Size = 10 ** 6; //1MB
// //     const start = Number(range.replace(/\D/g, ""));
// //     const end = Math.min(start + Chunk_Size, videosSize - 1);
// //     const contetLength = end - start + 1;
// //     const headers = {
// //       "Content-Range": `bytes ${start}-${end}/${videosSize}`,
// //       "Accept-Ranges": "bytes",
// //       "Content-Length": contetLength,
// //       "Content-Type": "video/mp4",
// //     };
// //     res.writeHead(206, headers);
// //     const videoStream = fs.createReadStream(videoPath, { start, end });
// //     videoStream.pipe(res);
// //   }
// // );
// const server = https.createServer((req, res) => {
//     // app.get("/video", function (req, res) {
//     const videoUrl ="https://media.publit.io/file/introtodatascience/Introduction_to_Machine_Learning.mp4";
//     if (req.url === "/kaluram") {
//         console.log(req.url)
//       // Make a request to the video URL
//       const videoRequest = https.get(videoUrl, (videoResponse) => {
//         // Set the headers for the response
//         res.setHeader("Content-Type", "video/mp4");
//         res.setHeader("Transfer-Encoding", "chunked");

//         // Pipe the response to the client as a stream
//         videoResponse.pipe(res);
//       });

//       // Handle errors with the request
//       videoRequest.on("error", (err) => {
//         console.error(err);
//         res.writeHead(500);
//         res.end();
//       });
//     } else {
//       // Handle other requests
//       res.writeHead(404);
//       res.end();
//     }

// })
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

const express = require("express");
const request = require("request");

const app = express();

// Create an API route for the video
app.get("/kaluram", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/video", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    const videoUrl ="https://media.publit.io/file/introtodatascience/Introduction_to_Machine_Learning.mp4";
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Transfer-Encoding", "chunked");

  // Set the headers for the response

  // Make a request to the video URL and pipe the response to the client
  request.get(videoUrl).pipe(res);
});

// Start the server
const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

