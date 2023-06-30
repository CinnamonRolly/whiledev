import React from 'react'

const Bio = () => {
  return (
    <div className='py-10 px-10 bg-[#f9f9f9] rounded-lg max-w-4xl font-semibold mx-auto items-center md:items-start flex flex-col'>
        <div className='w-full'>
          <h4 data-aos="fade-right" className='text-center md:text-start font-bold md:pl-4 text-[#147efb]'>BIO</h4>
          <h3 data-aos="fade-left" className='md:text-start text-center md:pl-4 font-bold text-2xl'>A short description of me from the start</h3>
          <div className='pl-4 pt-3'>
            <div className=''>
                <div  data-aos="fade-right" className='flex'>
                    <div>
                        <h3 className='bg-[#147efb] w-[40px] text-center rounded-md text-white'>2010</h3>
                    </div>
                    <p className='pl-3'>Born in Chonburi(ชลบุรี), Thailand.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" className='flex mt-3'>
                    <div>
                        <h3 className='bg-[#147efb] w-[40px] text-center rounded-md text-white'>2015</h3>
                    </div>
                    <p className='pl-3'>Attended Satit Burapha Demonstration School.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="200"  className='flex mt-3'>
                    <div>
                        <h3 className='bg-[#147efb] w-[40px] text-center rounded-md text-white'>2019</h3>
                    </div>
                    <p className='pl-3'>I discovered Python and started my coding journey.</p>
                </div>
                <div data-aos="fade-right"  data-aos-delay="300" className='flex mt-3'>
                    <div>
                        <h3 className='bg-[#147efb] w-[40px] text-center rounded-md text-white'>2021</h3>
                    </div>
                    <p className='pl-3'>I joined a coding bootcamp and learned front-end development.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="400"  className='flex mt-3'>
                    <div>
                        <h3 className='bg-[#147efb] w-[40px] text-center rounded-md text-white'>2023</h3>
                    </div>
                    <p className='pl-3'>I learn about back-end development and try to make a useful product for everyone.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Bio