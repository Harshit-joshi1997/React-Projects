import './App.css'
import Cards from './components/Cards'
import Slider from './components/Slider'
import Forms from './components/Forms'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
     
      <div className='flex'>
        <div className="flex-1 p-6 mt-5">
          <h1 className="text-3xl font-bold bg-gradient-to-r from blue-500 to-blue-900 bg-clip-text text-transparent">Vehicle Hub</h1>
          <p className="mt-4 text-gray-600 ">
            " Your Trust is Our Drive, Our Commitment is Your Journey. "
          </p>
        </div>
      </div>
      <Slider/>
      <div>
        <div className="pt-15">
          <Cards />
          <Forms/>
          <Footer/>
        </div>
      </div>
    </>
  )
}
export default App
