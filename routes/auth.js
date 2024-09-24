const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
//SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashpassword });
    await user
      .save()
      .then(() => res.status(200).json({ message: "Cadastro realizado!" }));
  } catch (error) {
    res.status(200).json({ message: "Usuário já existe..." });
  }
});

//SIGN IN

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Usuário não encontrado. Se cadastre primeiro." });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Senha não correta." });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ user: others });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno de servidor" });
  }
});

module.exports = router;
