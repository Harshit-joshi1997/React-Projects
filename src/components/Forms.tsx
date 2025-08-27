import { useForm } from 'react-hook-form';
import axios from 'axios';


const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data: any) => {
     try {
      await axios.post('http://localhost:8000/forms', data)
      alert("Form submitted successfully!");
     } catch (error) {
      console.error("Error submitting form:", error);
     }
    console.log(data);
  };

  return (
    <div className="min-h-screen w-335 flex items-center justify-center bg-gray-100 p-6 -mt-54.5 -ml-16">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={20}
              {...register('fullname', { required: "Name is required", maxLength: 20 })}
            />
            {errors.name?.message && typeof errors.name.message === 'string' && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...{ maxLength: 100 }}
              {...register('email',{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            />
            {errors.email?.message && typeof errors.email.message === 'string' && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('phone',{ maxLength: 15 })}
            />
          </div>

          {/* City & State side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('city',{ maxLength: 50 })}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">State</label>
              <input
                type="text"
                placeholder="Enter your state"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('state', { maxLength: 20 })}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('message', { maxLength: 500 })}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg text-white font-medium
             bg-gradient-to-r from-blue-500 to-blue-400
             hover:from-blue-600 hover:to-blue-800
             transition duration-300 ease-in-out"  onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Forms