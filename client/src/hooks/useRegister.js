import axios from "axios";


let useRegister = async (inputs)=>{
    try{
        let res = await axios.post('http://localhost:8080/user/register', inputs , {
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        return res.data;

    }catch(err){
        console.log(err)
        return {error : err.message};
    }
}


export default useRegister;
