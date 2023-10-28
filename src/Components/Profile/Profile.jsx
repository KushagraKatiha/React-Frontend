import axios from 'axios';
import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

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
      <div className='m-auto w-auto h-1/2 backdrop-blur-md border border-white rounded-lg flex flex-col justify-center items-center gap-9 px-5 sm:w-1/2 md:w-1/3 lg:1/3'>
        <h1 className='text-white text-3xl'>Your Details</h1>
        <div className='flex w-full gap-10 justify-center items-center'>
          <div className='border-2 border-white rounded-full'>
            <img className="rounded-full h-40 w-40" src="https://images.pexels.com/photos/18078283/pexels-photo-18078283/free-photo-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile img" />
          </div>
          <div className='flex flex-col gap-5 bg-slate-800 px-10 py-8 border-b-4 border-white rounded-lg text-white text-lg underline'>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
