const express = require("express");
const noteModel = require("../models/note.model");

const router = express.Router();

//✅ CREATE
router.post("/note", async (req, res) => {
  let { title, content } = req.body;

  //! Input trim()
  title = title?.trim();
  content = content?.trim();

  if (!title || typeof title !== "string") {
    return res.status(400).json({
      message: "Title is required and must be non empty string",
    });
  }
  if (!content || typeof content !== "string") {
    return res.status(400).json({
      message: "Content is required and must be non empty string",
    });
  }

  try {
    const userNote = await noteModel.create({
      title,
      content,
    });
    res.status(201).json({
      message: "userNOTE created Successfully",
      userNote,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server ERROR", error: err.message });
  }
});

//✅ READ
router.get("/note", async (req, res) => {
  try {
    const notes = await noteModel.find();

    if (!notes || notes.length === 0) {
      return res.status(404).json({
        message: "No notes found in the database",
      });
    }

    res.status(200).json({
      message: "Notes fetched successfully",
      notes,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

//✅ UPDATE
router.patch("/note/:id", async (req, res) => {
  try {
    let { title, content } = req.body;
    const id = req.params.id;
    //!Trim Inputs
    title = title?.trim(); //This line is using optional chaining (?.) and string trimming.
    content = content?.trim();

    if (!title || title.length == 0) {
      return res.status(400).json({
        message: "Title is required and must be non empty string",
      });
    }
    if (!content || content.length == 0) {
      return res.status(400).json({
        message: "Content is required and must be non empty string",
      });
    }

    const updateNotes = await noteModel.findOneAndUpdate(
      { _id: id },
      { title, content },
      { new: true }
    );

    if (!updateNotes) {
      return res.status(404).json({
        message: "Note with the given ID not found",
      });
    }

    res.status(200).json({
      message: "Note updated successfully",
      updateNotes,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
});

//✅ DELETE
router.delete("/note/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const deleteNotes = await noteModel.findOneAndDelete({ _id: id });

    if (!deleteNotes) {
      return res.status(404).json({
        message: "Note with the given ID not found",
      });
    }

    res.status(200).json({
      message: "Note successfully deleted",
      deleteNotes,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
});

module.exports = router;
