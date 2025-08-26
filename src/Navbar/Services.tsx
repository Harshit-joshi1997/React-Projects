

const Services = () => {
  return (
    <>
    <section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
      Our Services
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Discover the wide range of automotive services we offer to keep your car performing at its best.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="h-12 w-12 text-indigo-600"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 7h10M3 12h18M7 17h14" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Diagnostics</h3>
        <p className="text-gray-600">
          Thorough electronic and mechanical inspections using advanced tools to pinpoint issues fast.
        </p>
      </div>
      
      
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="h-12 w-12 text-indigo-600"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8c4.418 0 8 1.79 8 4s-3.582 4-8 4-8-1.79-8-4 3.582-4 8-4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Oil Change</h3>
        <p className="text-gray-600">
          High-quality oil and filter replacement to keep your engine running smoothly and efficiently.
        </p>
      </div>
      
      
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="h-12 w-12 text-indigo-600"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Brake Service</h3>
        <p className="text-gray-600">
          Inspection and replacement of brake pads, rotors, and fluid to ensure safe braking performance.
        </p>
      </div>

      
      
    </div>
  </div>
</section>
</>
  )
}

export default Services