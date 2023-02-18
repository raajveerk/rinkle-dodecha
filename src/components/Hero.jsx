import React from 'react'

export const Hero = () => {
  return (
    <div className='mt-[175px] sm:w-full sm:mx-auto mx-[25px] max-w-[800px] text-black mb-[200px]'>
        <div className='items-center sm:mx-auto pl-2'>
            <h2 className='text-left underline font-sans sm:text-3xl text-2xl font-bold'>
                Personal Profile
            </h2>
        </div>
        <div className='sm:p-3 p-2 rounded-lg bg-white backdrop-blur-md bg-opacity-50 mt-[30px] leading-3'>
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>DoB:<span className='sm:text-lg ml-4 text-md font-semibold'>2nd May, 1998</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Place of Birth:<span className='sm:text-lg ml-4 text-md font-semibold'>Jamnagar, Gujarat</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Height:<span className='sm:text-lg ml-4 text-md font-semibold'>5'1"</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Complexion:<span className='sm:text-lg ml-4 text-md font-semibold'>Fair</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Education:<span className='sm:text-lg ml-4 text-md font-semibold'><span className='font-bold'>B.Comm</span>(2018, SLIMS Ahmedabad), <span className='font-bold'>Diploma in Fashion Designing</span>(2018, INIFD), <span className='font-bold'>MFM</span>(2021, NIFT Gandhinagar), <span className='font-bold'>Post Graduation Diploma in EXIM</span>(2019, Symbiosis Distance) </span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Hobbies:<span className='sm:text-lg ml-4 text-md font-semibold'>Travelling, Cinema, Cooking</span></p><br />
        </div>
        <div className='items-center sm:mx-auto pl-2 mt-[50px]'>
            <h2 className='text-left underline font-sans sm:text-3xl text-2xl font-bold'>
                Family Profile
            </h2>
        </div>
        <div className='sm:p-3 p-2 rounded-lg bg-white backdrop-blur-md bg-opacity-50 mt-[30px] leading-3'>
        <p className='text-left font-bold sm:text-xl text-lg font-sans'>Grandparents:<span className='sm:text-lg ml-4 text-md font-semibold'>Lt. Shree Kishanchand Dodecha, Smt. Chandra Kishanchand Dodecha</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Parents:<span className='sm:text-lg ml-4 text-md font-semibold'>Mr. Mukesh Kishanchand Dodecha (Businessman), Mrs. Riya Mukesh Dodecha (Homemaker)</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Sibling/s:<span className='sm:text-lg ml-4 text-md font-semibold'>Vivek Mukesh Dodecha (Younger Brother)</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Business:<span className='sm:text-lg ml-4 text-md font-semibold'>Jay Bhavani Traders</span><br /><span className='ml-[100px] sm:text-md text-sm font-medium'>Address: Main Point, Subhash <span className='sm:ml-[0px] ml-[100px]'>Market, Darbargadh, </span> <span className='sm:ml-[0px] ml-[100px]'> Jamnagar - 361004</span></span><br /><span className='ml-[100px] sm:text-lg text-md font-semibold'>Jay Bhavani Traders</span><br /><span className='ml-[100px] sm:text-md text-sm font-medium'>Godown No.18, Hapa Main Yard, <span className='sm:ml-[0px] ml-[100px]'> Jamnagar - 361110</span></span><br /><span className='ml-[100px] sm:text-lg text-md font-semibold'>TrendThreads Studio</span><br /><span className='ml-[100px] sm:text-md text-sm font-medium'>302 - Sterling Point, Above KD <span className='sm:ml-[0px] ml-[100px]'> Jewellers, P.N. Marg,</span><br /><span className='md:ml-0 sm:ml-[100px] ml-[100px]'> Jamnagar - 361008</span></span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Contact:<span className='sm:text-lg ml-4 text-md font-semibold'>Mukesh Dodecha - +91 94260 44245</span></p><br />
            <p className='text-left font-bold sm:text-xl text-lg font-sans'>Residency Address:<span className='sm:text-lg ml-4 text-md font-semibold'>3/4 - Premchand Colony, New Jail Rd., Jamnagar - 361006</span></p><br />
        </div>
    </div>
  )
}
