import '../App.css';

import {BsGithub} from 'react-icons/bs';

function Footer() 
{
  return (
    <footer className='align-middle h-32 inset-x-0 bottom-0 md:px-72'>
        <div className='text-[#6b6b6b] text-s font-bold items-center h-full flex flex-col justify-center'>
            <p className='font-[PixelatedFont] drop-shadow-[0_1.2px_15px_rgba(107,107,107,0.8)] py-2'>
              Icon and Background by <a href='https://www.instagram.com/l_darlo_/' target='_blank' rel="noreferrer">Lili Darlington</a>
            </p>
            
            <div className='flex space-x-2'>
              <a href='https://github.com/HeadMonitor'> <BsGithub width='32' className='hover:contrast-[.25] transition-transform duration-200 transform hover:-translate-y-2'/> </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
