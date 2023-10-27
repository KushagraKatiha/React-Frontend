import React from 'react'

function Profile() {
  return (
    <section className='h-screen w-full flex bg-cover bg-center bg-repeat-y' 
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/5435304/pexels-photo-5435304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
    >
        <div className='m-auto w-auto h-1/2 backdrop-blur-md border border-white rounded-lg flex flex-col justify-center items-center gap-9 px-5 sm:w-1/2 md:w-1/3 lg:1/3'>
          <h1 className='text-white text-3xl'>Your Details</h1>
            <div className='flex w-full gap-10 justify-center items-center'>
            <div className='border-2 border-white rounded-full'>
                <img className="rounded-full h-40 w-40" src="https://images.pexels.com/photos/18078283/pexels-photo-18078283/free-photo-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile img" />
            </div>
            <div className='flex flex-col gap-5 bg-slate-800 px-10 py-8 border-b-4 border-white rounded-lg text-white text-lg'>
                <p>Name</p>
                <p>Username</p>
                <p>Email</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Profile