import './App.css';
import Footer from './Elements/Footer';
import Projects from './Elements/Projects';

function App() 
{
  return (
    <div className="App bg-black">
      <div className='flex flex-col min-h-screen justify-center items-center'>
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
