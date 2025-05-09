import bcrypt from "bcrypt";
import User from "../models/userModel.js";

// POST /register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём нового пользователя
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user", // роль задаётся принудительно
    });

    await newUser.save();

    res.status(201).json({ message: "Registracija sekminga" });
  } catch (err) {
    console.error("Register klaida:", err);
    res.status(500).json({ error: "Vidine serverio klaida" });
  }
};
