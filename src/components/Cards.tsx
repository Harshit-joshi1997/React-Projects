import car1 from '../assets/car1.jpg'
import  car2 from '../assets/car2.jpg'
import  car3 from '../assets/car3.jpg';
import  car4 from '../assets/car4.jpg';

const Cards = () => {
  return (
        <div className="  min-h-screen ml-0.5">
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={car1}
                alt="Car 1"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">2021 Tesla Model S</h3>
                <p className="text-gray-600 mb-4">Electric Sedan</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
                </button>
            </div>
            </div>
    
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={car2}
                alt="Car 2"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">2020 BMW X5</h3>
                <p className="text-gray-600 mb-4">Luxury SUV</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
                </button>
            </div>
            </div>
    
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={car3}
                alt="Car 3"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
               
                     <h3 className="text-lg font-semibold mb-2">2020 BMW X5</h3>
                <p className="text-gray-600 mb-4">Luxury SUV</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
                </button>
        
   
    </div>
    </div>
     <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={car4}
                alt="Car 3"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
               
                     <h3 className="text-lg font-semibold mb-2">2020 BMW X5</h3>
                <p className="text-gray-600 mb-4">Luxury SUV</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
                </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cards