import { body } from "express-validator";
import User from "../models/userModel.js";

export const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Vardas butinas")
    .isLength({ min: 4 })
    .withMessage("Vardas turi buti bent 4 simboliu"),

  body("email")
    .notEmpty()
    .withMessage("El. pastas butinas")
    .isEmail()
    .withMessage("Neteisingas el. pastas")
    .custom(async (value) => {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) {
        return Promise.reject("El. pastas jau uzimtas");
      }
      return true;
    }),

  body("password")
    .notEmpty()
    .withMessage("Slaptazodis butinas")
    .isLength({ min: 4 })
    .withMessage("Slaptazodis turi buti bent 4 simboliu")
    .matches(/\d/)
    .withMessage("Slaptazodyje turi buti bent 1 skaicius")
    .matches(/[a-zA-Z]/)
    .withMessage("Slaptazodyje turi buti bent 1 raide"),

  body("passwordConfirm")
    .notEmpty()
    .withMessage("Slaptazodzio patvirtinimas butinas")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Slaptazodžiai nesutampa");
      }
      return true;
    }),
];
