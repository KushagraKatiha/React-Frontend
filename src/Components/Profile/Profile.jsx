import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  let handleUpdate = () => {
    navigate('/updateuser');
  }

  let handleDelete = async ()=>{
    const response = await axios.delete('http://localhost:3000/deleteuser' , {withCredentials: true})
    if(response.status === 200){
      alert('User Deleted ! Login with another account')
      navigate('/signin');
    }
  }  

  let handleLogOut = async () => {
    try {
      const response = await axios.get('http://localhost:3000/logout', { withCredentials: true });
  
      if (response.status === 200) {
        alert('Logged Out!');
        navigate('/signin');
      } else {
        alert('Logout failed'); // Handle other status codes as needed
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  

  async function fetchUserDetails() {
      try {
        const response = await axios.get('http://localhost:3000/userdetails', {withCredentials: true});

        console.log(response.data); // Assuming the response contains JSON data.
        console.log(response.status);

        
        if (response.status === 200) { // Check for a successful GET request (status code 200)
          const userData = response.data.data;
          // Update the state with the received data
          setName(userData.name.toUpperCase());
          setUsername(userData.username);
          setEmail(userData.email);
        }

      } catch (error) {
        console.log(error.message);
        console.error(error);
      }
  }

    fetchUserDetails();
  
  return (
    <section className='h-screen w-full flex bg-cover bg-center bg-repeat-y'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5435304/pexels-photo-5435304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
      }}
    >
      <div className='m-auto w-4/5 md:w-2/4 md:h-5/6 h-auto backdrop-blur-md border border-white rounded-lg flex flex-col justify-center items-center md:gap-5 gap-4 px-5 py-5 '>
        <h1 className='text-white text-3xl'>Your Details</h1>
        <div className='flex gap-5 justify-center w-full h-5/6 items-center'>
          <div className='border-2 w-[30%] h-[30%] md:h-[60%] md:w-[50%] border-white rounded-full'>
            <img className="rounded-full w-full h-full" src="https://images.pexels.com/photos/18078283/pexels-photo-18078283/free-photo-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile img" />
          </div>
          <div className='flex flex-col md:w-3/4 md:h-3/4 gap-5 justify-center bg-slate-800 px-8 py-8 border-b-4 border-white rounded-lg text-white md:text-lg text-sm '>
            <p className='text-base font-bold md:text-xl text-orange-400'>Name: <span className='font-semibold underline text-xs md:text-lg text-white'>{`${name}`}</span></p>
            <p className='text-base font-bold md:text-xl text-orange-400'>Username: <span className='underline font-semibold text-white text-xs md:text-lg '>{`@${username}`}</span></p>
            <p className='text-base font-bold md:text-xl text-orange-400'>Email: <span className='underline text-xs text-white font-semibold md:text-lg '>{`${email}`}</span></p>
          </div>
        </div>
        <div className='w-full flex justify-around'>
          <button className='px-10 text-white bg-red-600 hover:bg-red-800 rounded-lg cursor-pointer py-2' 
            onClick={handleDelete}
          >Delete User !</button>
          <button onClick={handleUpdate} className='px-10 text-white bg-green-500 hover:bg-green-800 rounded-lg cursor-pointer py-2'>Update User </button>
        </div>
        <button onClick={handleLogOut} className='px-10 text-white bg-blue-600 hover:bg-blue-900 rounded-lg cursor-pointer py-2'>Logout !</button>
      </div>
    </section>
  );
}

export default Profile;
