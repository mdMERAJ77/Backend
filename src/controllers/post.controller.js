
const generateCaption = require('../service/ai.service');

async function createPostController(req, res) {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("📥 File received:", file.originalname);

    const base64Image = Buffer.from(file.buffer).toString('base64');

    const caption = await generateCaption(base64Image);
    console.log("🤖 AI Generated Caption:", caption);

    // Optional: Save post to database
    // const newPost = await postModel.create({ image: base64Image, caption });

    res.status(200).json({
      message: "File received successfully",
      aiCaption: caption,
      file: {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      },
    });
  } catch (error) {
    console.error("❌ Server Error:", error.message);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
}

module.exports = { createPostController };
