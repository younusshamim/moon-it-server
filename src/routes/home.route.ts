import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const message = "Welcome to Rest API - 👋🌎🌍🌏";
  res.send(message);
});

export default router;
