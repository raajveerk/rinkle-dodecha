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
    <div className='mb-[75px] max-w-[1000px] md:flex hidden items-center sm:mx-auto space-x-[50px]'>
        <div>
            <img src={uno} alt="Uno" className='w-[300px] h-[300px] bg-fixed rounded-lg'/>
        </div>
        <div>
            <img src={dos} alt="Dos" className='w-[300px] h-[300px] bg-fixed rounded-lg'/>
        </div>
        <div>
            <img src={tres} alt="Tres" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div>
    </div>
    <div className='mb-[150px] max-w-[1000px] md:flex hidden items-center sm:mx-auto space-x-[50px]'>
        <div>
            <img src={quatro} alt="Quatro" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div>
        <div>
            <img src={sinko} alt="Sinko" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div>
        <div>
            <img src={ses} alt="Ses" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div>
    </div>
    
    <div className='md:hidden flex flex-col items-center space-y-[25px] mb-[0px]'>
        <div>
            <img src={quatro} alt="Quatro" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div><br />
        <div>
            <img src={sinko} alt="Sinko" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div><br />
        <div>
            <img src={ses} alt="Ses" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div><br />
        <div>
            <img src={uno} alt="Uno" className='w-[300px] h-[300px] bg-fixed rounded-lg'/>
        </div><br />
        <div>
            <img src={dos} alt="Dos" className='w-[300px] h-[300px] bg-fixed rounded-lg'/>
        </div><br />
        <div>
            <img src={tres} alt="Tres" className='w-[300px] h-[300px] bg-fixed rounded-lg' />
        </div><br />
    </div>
    </>
  )
}
