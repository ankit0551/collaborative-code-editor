import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import toast from 'react-hot-toast';
import useStore from '../store/store';

const Login = () => {
  const [inputs, setInputs] = useState({
    email : "",
    password : "",
  })

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const setUser = useStore((state)=> state.setUser);

  async function handelSubmit(e){
    e.preventDefault();
    if(!inputs.email || !inputs.password){
      toast.error("Inputs mismatched");
      return;
    }
    setLoading(true);
    let data = await useLogin(inputs);
    if(data.error){
      toast.error(data.error);
    }
    if(data.success){
      setUser(data.user);
      localStorage.setItem('_l_user', JSON.stringify(data.user));
      toast.success(data.success);
      navigate('/')
    }
    setLoading(false);
  }

  return (
    <div className='flex flex-col justify-center items-center h-full'>
    
      <div className='min-w-[500px] bg-[#151515] p-4 rounded-xl text-[#aeaeae]'>
        <div className='mb-[50px] mt-5 flex justify-center'>
        <Link to={'/'}><h2 className='text-white tracking-tight  font-bold text-[50px]'><span>Code</span><span className='bg-blue-700 text-black rounded-[3px] px-1 mx-1'>hub</span></h2></Link>
        </div>
        <h2 className='text-center text-2xl text-white font-semibold mb-1'>Member Sign in</h2>
        <p className='text-center'>Access your codehub account</p>
        <div>

        </div>
        <form onSubmit={handelSubmit} className='flex flex-col gap-3 mt-5'>
          
          <div>
            <input type="email" className='bg-[#212121] text-white input w-full h-11 rounded-sm border-1 focus:outline-none  border-[#2f2f2f] focus:border-gray-200 ' value={inputs.email} onChange={(e)=> setInputs({...inputs, email : e.target.value})} placeholder='E-Mail-Address' />
          </div>
          <div>
            <input type="password" className='bg-[#212121] text-white input w-full h-11 rounded-sm border-1 focus:outline-none  border-[#2f2f2f] focus:border-gray-200 ' value={inputs.password} onChange={(e)=> setInputs({...inputs, password : e.target.value})} placeholder='Password' />
          </div>
          
          <div className='flex flex-col justify-between items-center my-5'>
            <button className='rounded-sm text-[#969696] font-semibold bg-[#2f2f2f] py-2 px-8 hover:bg-blue-700 hover:text-black'>Sign in</button>
          </div>
        </form>
        <div className='text-center'>
          <p>Don't have an account yet?<Link to={'/register'}><span className='text-blue-700 mx-2 font-semibold '>Register</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login