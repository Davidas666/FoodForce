import { body } from 'express-validator';

// ✅ Logino validacija 
export const loginValidation = [
  body('email')
    .isEmail().withMessage('Įveskite galiojantį el. pašto adresą'),
  body('password')
    .isLength({ min: 4 }).withMessage('Slaptažodis turi būti bent 4 simbolių')  // ✅ Slaptažodžio ilgis
    .matches(/\d/).withMessage('Slaptažodyje turi būti bent vienas skaičius') // ✅ Slaptažodžio sudėtingumas
    .matches(/[a-zA-Z]/).withMessage('Slaptažodyje turi būti bent viena raidė') // ✅ Raidžių buvimas
    .matches(/[^a-zA-Z0-9]/).withMessage('Slaptažodyje turi būti bent vienas specialus simbolis') // ✅ Specialių simbolių buvimas
];

// ✅ Registracijos validacija
export const registerValidation = [
  body('name').notEmpty().withMessage('Vardas yra privalomas'),
  body('email').isEmail().withMessage('El. paštas yra neteisingas'),
  body('password')
    .isLength({ min: 4 }).withMessage('Slaptažodis turi būti bent 4 simbolių')
    .matches(/\d/).withMessage('Slaptažodyje turi būti bent vienas skaičius')
];
