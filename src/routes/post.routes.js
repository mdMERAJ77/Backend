const express = require("express");
const protectedAuthMiddleware= require('../middlewares/protectedAuthMiddleware');
const {createPostController} = require('../controllers/post.controller')
const multer = require('multer');

const upload =multer({storage:multer.memoryStorage()})

const router = express.Router();

router.post("/", protectedAuthMiddleware,upload.single("image"),createPostController);

module.exports = router;
