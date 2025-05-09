import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "password";
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "1d";

// POST /register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Užšifruojame (hash) slaptažodį
    const hashedPassword = await bcrypt.hash(password, 10);

    // Sukuriame naują vartotoją
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user", // Rolė priskiriama automatiškai
    });

    await newUser.save();

    res.status(201).json({ message: "Registracija sėkminga" });
  } catch (err) {
    console.error("Registracijos klaida:", err);
    res.status(500).json({ error: "Vidinė serverio klaida" });
  }
};

// POST /login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Patikriname, ar vartotojas egzistuoja
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Neteisingas el. paštas arba slaptažodis" });
    }

    // Palyginame įvestą slaptažodį su duomenų bazėje esančiu (užšifruotu)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Neteisingas el. paštas arba slaptažodis" });
    }    // Generuojame JWT tokeną
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION } // Galiojimo JWT laikas
    );

    res.status(200).json({ message: "Prisijungimas sėkmingas", token });
  } catch (err) {
    console.error("Prisijungimo klaida:", err);
    res.status(500).json({ error: "Vidinė serverio klaida" });
  }
};
