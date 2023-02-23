import React from 'react'
import uno from "../images/uno.png";
import dos from "../images/dos.png";
import tres from "../images/tres.png";
import quatro from "../images/quatro.png";
import sinko from "../images/sinko.png";
import ses from "../images/ses.png";

export const Images = () => {
  return (
    <>
    <div className='mb-[50px] max-w-[1000px] lg:flex hidden lg:mx-auto space-x-[50px]'>
        <div>
            <img src={uno} alt="Uno" className='w-[300px] h-[300px] rounded-2xl'/>
        </div>
        <div>
            <img src={tres} alt="Tres" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div>
        <div>
            <img src={ses} alt="Ses" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div>
    </div>
    <div className='mb-[150px] max-w-[1000px] lg:flex hidden lg:mx-auto space-x-[50px]'>
        <div>
            <img src={dos} alt="Dos" className='w-[300px] h-[300px] rounded-2xl'/>
        </div>
        <div>
            <img src={quatro} alt="Quatro" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div>
        {/* <div>
            <img src={sinko} alt="Sinko" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div> */}
    </div>
    
    <div className='lg:hidden sm:flex md:flex hidden flex-col items-center space-y-[25px] mb-[0px]'>
        <div>
            <img src={tres} alt="Tres" className='w-[500px] h-[500px] bg-fixed rounded-2xl' />
        </div><br />
        <div>
            <img src={quatro} alt="Quatro" className='w-[500px] h-[500px] bg-fixed rounded-2xl' />
        </div><br />
        <div>
            <img src={uno} alt="Uno" className='w-[500px] h-[500px] bg-fixed rounded-2xl'/>
        </div><br />
        <div>
            <img src={sinko} alt="Sinko" className='w-[500px] h-[500px] bg-fixed rounded-2xl' />
        </div><br />
        <div>
            <img src={ses} alt="Ses" className='w-[500px] h-[500px] bg-fixed rounded-2xl' />
        </div><br />
        {/* <div>
            <img src={dos} alt="Dos" className='w-[500px] h-[500px] bg-fixed rounded-2xl'/>
        </div><br /> */}
    </div>
    <div className='sm:hidden flex flex-col items-center space-y-[25px] mb-[0px]'>
        <div>
            <img src={tres} alt="Tres" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div><br />
        <div>
            <img src={quatro} alt="Quatro" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div><br />
        <div>
            <img src={uno} alt="Uno" className='w-[300px] h-[300px] bg-fixed rounded-2xl'/>
        </div><br />
        <div>
            <img src={sinko} alt="Sinko" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div><br />
        <div>
            <img src={ses} alt="Ses" className='w-[300px] h-[300px] bg-fixed rounded-2xl' />
        </div><br />
        {/* <div>
            <img src={dos} alt="Dos" className='w-[300px] h-[300px] bg-fixed rounded-2xl'/>
        </div><br /> */}
    </div>
    </>
  )
}
