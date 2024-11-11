import './App.css';
import Footer from './Elements/Footer';
import Projects from './Elements/Projects';
import Background from './Images/Background.png'
import HeadMonitor from './Images/HeadMonitor.png'

function App() 
{
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <title>HeadMonitor</title>

      <div className='flex flex-col min-h-screen justify-between items-center'>
        <br/>
        <img src={HeadMonitor} alt='HeadMonitor' width='256' className='outline outline-[0.5rem]'/>
        <h1 className='text-white font-[PixelatedFont] drop-shadow-[0_1.2px_5px_rgba(255,0,132,0.8)]'>
          HeadMonitor
        </h1>

        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
