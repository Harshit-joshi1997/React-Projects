import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'


const News = () => {
  return (
    
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Latest Car News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={news1} alt="Car News" className="rounded-t-xl w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Electric Cars Take Over</h3>
              <p className="text-gray-600 mb-4">
                Governments around the world are accelerating EV adoption with new infrastructure investments.
              </p>
              <a href="#" className="inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                Read more →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={news2} alt="Car News" className="rounded-t-xl w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">SUV Sales Surge in 2025</h3>
              <p className="text-gray-600 mb-4">
                The SUV segment sees record-breaking sales thanks to rising consumer demand for space
              </p>
            </div>
          </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={news3} alt="Car News" className="rounded-t-xl w-full h-48 object-cover"/>
                <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Autonomous Driving Advances</h3>
                <p className="text-gray-600 mb-4">
                    New AI technologies are pushing the boundaries of self-driving cars closer to reality.
                </p>
                <a href="#" className="inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                    Read more →
                </a>
                </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default News