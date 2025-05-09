import express from "express";
import { registerValidation } from "../validations/registerValidation.mjs";
import { validationResult } from "express-validator";
import { register, login } from "../controller/authController.mjs";

const router = express.Router();

// REGISTRACIJA
router.post("/register", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await register(req, res);
});

// PRISIJUNGIMAS
router.post("/login", async (req, res) => {
  await login(req, res);
});

export default router;
