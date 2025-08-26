

function Tesla  (){
  return (
    <>
<section className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tesla Model Y</h1>
        <p className="text-gray-600 mb-6">
          The latest redesign of Tesla’s Model Y, codenamed “Juniper,” delivers advanced efficiency, enhanced performance, and sleek new features—including improved suspension, streamlined light bars, and an 8-inch rear touchscreen. Available now in select Asia-Pacific markets.
        </p>
        <a href="#" className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
          Learn More
        </a>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Tesla Model Y" className="rounded-lg shadow-lg object-cover w-full h-full"/>
      </div>
    </div>

    
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Physical Turn Signal</h3>
        <p className="text-gray-600">
          The refreshed Model Y brings back the physical turn signal stalk, improving driving ergonomics.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Extended Range</h3>
        <p className="text-gray-600">
          Choose between rear-wheel drive (593 km) or long-range (719 km), with top speed up to 201 km/h.  
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Over-the-Air Updates</h3>
        <p className="text-gray-600">
          Always stay updated with new features and performance enhancements via OTA software updates.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Advanced Interior</h3>
        <p className="text-gray-600">
          Enjoy a dual-screen layout—front and rear—plus ambient lighting and plush seating designed for comfort.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Supercharger Network</h3>
        <p className="text-gray-600">
          Access Tesla’s global charging infrastructure for fast, reliable long-distance travel.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Pet-Friendly Features</h3>
        <p className="text-gray-600">
          Supports “Dog Mode” to maintain cabin comfort for pets and display a safety message while parked.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Tesla