import React from 'react'
import { useForm } from "react-hook-form"
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data)

  return (
    <>
    <div max-w-screen-2xl container mx-auto md:px-20 px-4  >
        
        <Navbar/>
       <div className='mt-28 items-center justify-center text-center flex bg-sky-300 '>


        {/* firstpart */}
       <div className='w-1/2 text-white'>
        <h1 className='text-pink-500 text-2xl font-extrabold'>Contact Info</h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sit voluptas, eligendi mollitia veniam doloremque, odio tempora totam voluptates pariatur cumque repellat dolores excepturi unde delectus sequi quisquam repellendus. Dolorem.</p>
        <div className='flex mt-6 items-center justify-center text-white'>
            <div>
                <h3>London</h3>
                <p>34 Street name ,city Name <br />Here United States</p>
                <p>+1222228973222</p>
                <p>info@mywebsite.com</p>
            </div>
            <div>
                <h3>New York</h3>
                <p>34 Street name ,city Name <br />Here United States</p>
                <p>+1222228973222</p>
                <p>info@mywebsite.com</p>
            </div>
        </div>
       </div>


    {/* form */}
       <div className='bg-white m-2 p-3 rounded-md'>
       <form onSubmit={handleSubmit(onSubmit)} >
              
            <h3 className="font-bold text-lg">Signup</h3>
            <div>
                {/* Name */}
                <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 border rounded-md py-1 outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span>This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 border rounded-md py-1 outline-none"
                  {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && <span>This field is required</span>}
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Message"
                  className="w-80 px-3 border rounded-md py-1 outline-none"
                  {...register("message", { required: true })}
                  />
                  <br />
                  {errors.message && <span>This field is required</span>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 px-3 text-white rounded-md py-1 hover:bg-pink-700 duration-200 ">
                  Send Message
                </button>
              </div>
            </div>
        </form>
       </div>
       </div>
       <Footer/>
        
    </div>
    </>
  )
}

export default Contact
