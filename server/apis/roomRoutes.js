const {Router} = require('express');
const router = Router();
const Room = require('../models/Room');
const {isLogin} = require('../middlewares/middleware')


router.post('/create', async (req, res)=> {
    const  {roomname, owner, roomId} = req.body;
    try{
        let room = await Room.findOne({roomname});
        if(room){
            res.send({error : "Room Name already used"});
            return;
        }
        room = await Room.create({roomname, owner, roomId});
        res.send({success : "Room created", room});
    }catch(err){
        res.send({error : err.message});
    }
})


router.get('/getRoom', async(req, res)=>{
    const {roomId} = req.body;
    try{
        let room = await Room({roomId});
        if(!room){
            res.send({error : "Room Does not exist!"});
            return;
        }
        res.send({room});

    }catch(err){
        res.send({error : err.message});
    }
})




module.exports = router;