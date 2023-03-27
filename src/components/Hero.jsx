import React from 'react'

export const Hero = () => {
  return (
    <div className='mt-[125px] sm:w-full sm:mx-auto mx-[25px] max-w-[800px] text-black sm:mb-[150px] mb-[100px]'>
        <div className='items-center sm:mx-auto sm:pl-4 pl-2'>
            <h2 className='text-left underline font-sans sm:text-3xl text-2xl font-bold'>
                Personal Profile
            </h2>
        </div>
        <div className='sm:py-3 sm:px-4 p-2 rounded-lg bg-white backdrop-blur-md bg-opacity-50 mt-[30px] leading-3'>
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>DoB:<span className='sm:text-lg sm:ml-3 ml-2 text-md font-medium'>2nd May, 1998</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Place of Birth:<span className='sm:text-lg sm:ml-3 ml-2 text-md font-medium'>Jamnagar, Gujarat</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Height:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>5'2"</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Complexion:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Fair</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Education:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'><span className='font-bold'>B.Comm</span>(2018, SLIMS Ahmedabad), <span className='font-bold'>Diploma in Fashion Designing</span>(2018, INIFD), <span className='font-bold'>MFM</span>(2021, NIFT Gandhinagar), <span className='font-bold'>Post Graduation Diploma in EXIM</span>(2019, Symbiosis Distance) </span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Hobbies:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Travelling, Cinema, Cooking</span></p><br />
        </div>
        <div className='items-center sm:mx-auto sm:pl-4 pl-2 mt-[50px]'>
            <h2 className='text-left underline font-sans sm:text-3xl text-2xl font-bold'>
                Family Profile
            </h2>
        </div>
        <div className='sm:py-3 sm:px-4 p-2 rounded-lg bg-white backdrop-blur-md bg-opacity-50 mt-[30px] leading-3'>
        <p className='text-left font-bold sm:text-xl text-lg font-sans'>Grandparents:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Lt. Shree Kishanchand Dodecha, Smt. Chandra Kishanchand Dodecha</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Parents:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Mr. Mukesh Kishanchand Dodecha (Businessman), Mrs. Riya Mukesh Dodecha (Homemaker)</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Sibling/s:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Vivek Mukesh Dodecha (Younger Brother)</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Business:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Jay Bhavani Aloo Bhandar</span><br /><span className='ml-[90px] sm:text-md text-sm font-medium'>Address: Main Point, Subhash <span className='sm:ml-[0px] ml-[90px]'>Market, Darbargadh, </span><br className='sm:hidden' /><span className='sm:ml-[0px] ml-[90px]'> Jamnagar - 361004</span></span><br /><span className='ml-[90px] sm:text-lg text-md font-semibold'>Jay Bhavani Traders</span><br /><span className='ml-[90px] sm:text-md text-sm font-medium'>Godown No.18, Hapa Main</span><br className='sm:hidden' /><span className='sm:ml-0 ml-[90px] sm:text-md text-sm font-medium'> Yard, Jamnagar - 361110</span><br /><span className='ml-[90px] sm:text-lg text-md font-semibold'>TrendThreads Studio</span><br /><span className='ml-[90px] sm:text-md text-sm font-medium'>302 - Sterling Point, Above KD <span className='sm:ml-[0px] ml-[90px]'> Jewellers, P.N. Marg,</span><br className='sm:hidden' /><span className='md:ml-[0px] ml-[90px]'> Jamnagar - 361008</span></span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Contact:<span className='sm:text-lg sm:ml-3 text-md ml-2 font-medium'>Mukesh Dodecha - </span><br className='sm:hidden' /><span className='sm:ml-0 ml-[70px] text-md font-medium'>+91 94260 44245</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Residency Address:<span className='sm:text-lg sm:ml-3 ml-2 text-md font-medium'>3/4 - Premchand Colony, New Jail Rd., Jamnagar - 361006</span></p><br />
        </div>
    </div>
  )
}
