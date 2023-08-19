import imgBanner1 from '../assets/pexels-lokman-sevim-13932020_01.jpg';
import imgBanner2 from '../assets/pexels-radwan-menzer-17747031_03.jpg';
import imgBanner3 from '../assets/pexels-riccardo-307008_02.jpg';

export default function gallery() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto px-5 py-24 flex flex-wrap'>
        <div className='w-full'>
          <div className='flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4'>
            <img
              alt='gallery'
              className='w-full object-cover h-full object-center block opacity-50 absolute inset-0 '
              src={imgBanner3}
            />
            <div className='text-center relative z-10 w-full'>
              <h2 className='text-2xl text-gray-900 font-medium title-font mb-2'>
                Sizzling Summer
              </h2>
              <p className='leading-relaxed'>
                Styles: Embrace the Heat in Fashion.
              </p>
              {/* <a className='mt-3 text-indigo-500 inline-flex items-center'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div className='flex flex-wrap -mx-2'>
            <div className='px-2 w-1/2'>
              <div className='flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block opacity-50 absolute inset-0'
                  src={imgBanner2}
                />
                <div className='text-center relative z-10 w-full'>
                  <h2 className='text-xl text-gray-900 font-medium title-font mb-2'>
                    Sun-Kissed Chic
                  </h2>
                  <p className='leading-relaxed'>
                    Elevate Your Summer Wardrobe.
                  </p>
                  {/* <a className='mt-3 text-indigo-500 inline-flex items-center'>
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
            <div className='px-2 w-1/2'>
              <div className='flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block opacity-50 absolute inset-0'
                  src={imgBanner1}
                />
                <div className='text-center relative z-10 w-full'>
                  <h2 className='text-xl text-gray-900 font-medium title-font mb-2'>
                    Sizzling Summer Styles
                  </h2>
                  <p className='leading-relaxed'>
                    Embrace the Heat in Fashion.
                  </p>
                  {/* <a className='mt-3 text-indigo-500 inline-flex items-center'>
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
