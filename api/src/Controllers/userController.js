//Constantes
const userCtrl  = {};
const User = require('../Models/userModel');

//Metodos
userCtrl.getUsers = async(req,  res)  =>  {
  const users  = await User.find();
  res.json(users);
}
userCtrl.createUser = async(req,  res)  =>  {
  const newUser  = new User(req.body);
  newUser.save((error,newUser) =>  {
    if(error){
      return  res.status(400).json({error:  'Hubo un error, porfavor revisa los campos'})
    }
    newUser.salt = undefined;
    newUser.hashed_password  = undefined;
    res.json('Usuario creado con exito');
  })
}
userCtrl.getUser  = async(req,  res)  =>  {
  const user = await User.findById(req.params.id).exec((err,user)  =>  {
      if(err||!user._id)  {
        return  res.status(400).json({error:'Usuario no encontrado'})
      }
      res.json(user);
    })
}
userCtrl.updateUser = async(req,  res)  =>  {
  await User.findByIdAndUpdate(req.params.id,  req.body).exec((err,user)  =>  {
      if(err||!user._id)  {
        return  res.status(400).json({error:'Usuario no encontrado'})
      }
      res.json('Usuario actualizado con exito')
    })
}
userCtrl.deleteUser = async(req,  res)  =>  {
  await User.findByIdAndDelete(req.params.id).exec((err,user)  =>  {
      if(err||!user._id)  {
        return  res.status(400).json({error:'Usuario no encontrado'})
      }
      res.json('Usuario eliminado con exito');
    })
}

//Exportacion
module.exports  = userCtrl;
