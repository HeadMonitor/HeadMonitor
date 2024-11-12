import '../App.css';

import HeadMonitor from '../Images/HeadMonitor.png'

function Header() 
{
  return (
    <div className='flex flex-col justify-between items-center'>
        <a href='https://headmonitor.net'>
            <img src={HeadMonitor} alt='HeadMonitor' width='256' className='outline outline-[0.5rem] transition-transform duration-200 hover:drop-shadow-[0_25px_50px_rgba(255,0,132,0.8)]'/>
        </a>
        <h1 className='text-white font-[PixelatedFont] drop-shadow-[0_1.2px_5px_rgba(255,0,132,0.8)]'>
          HeadMonitor
        </h1>
    </div>
  );
}

export default Header;
