import express from "express";
import { registerValidation } from "../validations/registerValidation.mjs";
import { validationResult } from "express-validator";
import { register } from "../controller/authController.mjs";

const router = express.Router();

router.post("/register", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await register(req, res);
});

export default router;
