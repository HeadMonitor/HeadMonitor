import '../App.css';
import ScreenCrowStudiosLogo from '../Images/ScreenCrow Studios Logo.png'

function Projects() 
{
  return (
    <div>
      <div className='text-white'>
        <h2 className='font-[PixelatedFont] drop-shadow-[0_1.2px_5px_rgba(255,0,132,0.8)] underline'>
            My Projects
        </h2>
        <img src={ScreenCrowStudiosLogo} width='256'/>
      </div>
    </div>
  );
}

export default Projects;
