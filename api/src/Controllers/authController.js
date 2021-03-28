//Dependencias
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

//Constantes
const authCtrl = {};
const User = require('../Models/userModel');

//Metodos
authCtrl.signin = async(req,  res)  =>  {
  const {username, password} = req.body
  User.findOne({username}, (error, user) => {
    if (error||!user) {
      return res.status(400).json({error: 'El usuario no existe'});
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({error: 'El usuario y la contraseña no coinciden'});
    }
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
    res.cookie('t', token, {expire: new Date() + 9999})
    const {_id, username, role} = user
    return res.json({token, user: {_id, username, role}})
  });
}
authCtrl.signout = async(req,  res)  =>  {
  res.clearCookie('t')
  res.json({message:'Deslogeado'});
}

//Exportacion
module.exports  = authCtrl;
