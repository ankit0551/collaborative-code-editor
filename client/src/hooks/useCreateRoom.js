import axios from "axios";

const useCreateRoom = async (roomInfo)=>{
    try{
        let res = await axios.post('http://localhost:8080/room/create', roomInfo, {
            headers : {
                'Content-Type' : 'application/json'
            }
        } )
        return res.data;
    }catch(err){
        return {error : err.message};
    }
}

export default useCreateRoom;