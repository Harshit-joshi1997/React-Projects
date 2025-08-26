

const About = () => {
  return (
    <>
    <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
    
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img src="/path/to/your-image.jpg" alt="Team or Brand" className="rounded-lg shadow-lg"/>
    </div>

    
    <div className="w-full md:w-1/2 md:pl-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
      <p className="text-gray-700 mb-6">
        We’re a passionate team dedicated to delivering exceptional digital experiences.
        Our journey began in 2020, and since then, we’ve helped over 200,000 users build, create, and grow with purpose.
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
        <p className="text-gray-600">
          To empower creators and businesses through intuitive, impactful design and innovative technology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-indigo-600">200K+</h4>
          <p className="text-gray-600">Happy Users</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-indigo-600">50+</h4>
          <p className="text-gray-600">Projects Delivered</p>
        </div>
      </div>

      <a href="/contact"
         className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
        Get in Touch
      </a>
    </div>
  </div>
</section>
</>
  )
}

export default About