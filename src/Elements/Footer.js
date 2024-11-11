import '../App.css';

function Footer() 
{
  return (
    <footer className='align-middle h-32 inset-x-0 bottom-0 md:px-72'>
        <div className='text-[#6b6b6b] text-xs font-bold items-center h-full flex flex-col justify-center'>
            <p className='font-[PixelatedFont] drop-shadow-[0_1.2px_15px_rgba(107,107,107,0.8)]'>
                Icon and Background by <a href='https://www.instagram.com/l_darlo_/' target='_blank'>Lili Darlington</a>
            </p>
        </div>
    </footer>
  );
}

export default Footer;
