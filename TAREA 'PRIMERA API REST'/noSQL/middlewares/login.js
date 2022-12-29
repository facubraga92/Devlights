const login = (req,res,next) => {
    console.log("Recibi una request a la ruta:", `${req.baseUrl}${req.path}`, req.method);

  next();
}



module.exports = login