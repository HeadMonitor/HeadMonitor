import './App.css';
import Footer from './Elements/Footer';
import Header from './Elements/Header';
import Projects from './Elements/Projects';
import Background from './Images/Background.png'

function App() 
{
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <div className='flex flex-col min-h-screen justify-between items-center pt-20'>
        <Header/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
