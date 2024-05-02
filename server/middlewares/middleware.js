const jwt = require('jsonwebtoken');


module.exports.isLogin = (req, res, next)=>{
    let token = req.cookies.token;
    let verify = jwt.verify(token, "secretkey"); 
    if(!verify){
        res.send({error : "login first"});
        return;
    }
    req.user = verify.user
    next();
}