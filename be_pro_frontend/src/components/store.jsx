import { useQuery } from '@tanstack/react-query';
import featuredProduct from '../assets/featured_product.png';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { StoreProductSearchContext } from '../App';


function Store() {
  const { productSearch } = useContext(
    StoreProductSearchContext
  );
  
  console.log('productSearch :',productSearch);

  const { isLoading, data, error } = useQuery({
    queryKey: ['productSearch', productSearch],
    queryFn: async () => {
      const data = await fetch(`/api/ebay/${productSearch}`,{
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(results => results.json());
      return data;
    },
  });

  console.log({ isLoading, data, error });
  // "id": 123,
  // "index": "4",
  // "title": "Vintage 1950's Gruen Veri-thin precision Gold Cal 415/739  17 Jewels Men's Watch",
  // "price": "$83.00",
  // "productSearchId": 1,
  // "createdAt": "2023-08-09T23:04:12.875Z",
  // "updatedAt": "2023-08-09T23:04:12.875Z",
  // "hashCode": "item3ba4c01f1d",
  // "image": "https://i.ebayimg.com/thumbs/images/g/z7wAAOSwo4hksUR7/s-l300.webp",
  // "shippingCost": "28 bids · ",
  // "sold": null,
  // "deletedAt": null
  
  if (error) {
    console.error('Error :', error);
  }

  return isLoading || error ? (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto'>
        {/* popular product */}
        <div className='flex flex-wrap -m-4'>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 bg-black h-full flex flex-col justify-center items-center'>
              <div className=''>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-14 h-14 text-blue-600'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <h2 className='text-gray-100 title-font text-lg font-medium uppercase pt-4'>
                popular product
              </h2>
              <a href='#' className='mt-1 text-gray-100 font-bold pt-10'>
                More Product &nbsp;&rArr;
              </a>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          {/* banner */}
          <div className='lg:w-3/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 bg-blue-600 h-full relative'>
              <a className='block relative h-full rounded overflow-hidden float-right'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={featuredProduct}
                />
              </a>
              <div className='absolute ml-16 mt-7'>
                <a
                  href=''
                  className='bg-gray-100 text-blue-500 rounded-md px-2'
                >
                  new
                </a>
                <h2 className='text-gray-100 title-font text-lg font-medium uppercase pt-6'>
                  Lifestyle
                </h2>
                <p className='mt-1 text-gray-100 font-bold text-3xl md:w-full lg:w-1/2'>
                  Subscribe to email newsletters and get notified of hot deals
                </p>
                <a
                  href='#'
                  className='bg-gray-100 rounded-full text-blue-600 uppercase relative top-14 py-2 px-8'
                >
                  $5.00 usd &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src='https://dummyimage.com/200x260'
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <span className='mt-1 text-gray-400 font-bold line-through'>
                  $65.00 USD
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-blue-700 font-bold'>$15.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto'>
        {/* popular product */}
        <div className='flex flex-wrap -m-4 items-stretch'>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[0]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 bg-black h-full flex flex-col justify-center items-center'>
              <div className=''>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-14 h-14 text-blue-600'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <h2 className='text-gray-100 title-font text-lg font-medium uppercase pt-4'>
                popular product
              </h2>
              <a href='#' className='mt-1 text-gray-100 font-bold pt-10'>
                More Product &nbsp;&rArr;
              </a>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[1]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[0]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[0]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[0]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[0]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[2]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[1]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[1]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[1]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[1]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[3]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[2]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[2]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[2]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[2]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[4]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[3]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[3]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[3]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[3]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          {/* banner */}
          <div className='lg:w-3/4 md:w-1/2 p-4'>
            <div className='w-full border-solid border-2 bg-blue-600 h-full relative'>
              <a className='block relative h-full rounded overflow-hidden float-right'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={featuredProduct}
                />
              </a>
              <div className='absolute ml-16 mt-7'>
                <a
                  href=''
                  className='bg-gray-100 text-blue-500 rounded-md px-2'
                >
                  new
                </a>
                <h2 className='text-gray-100 title-font text-lg font-medium uppercase pt-6'>
                  Lifestyle
                </h2>
                <p className='mt-1 text-gray-100 font-bold text-3xl md:w-full lg:w-1/2'>
                  Subscribe to email newsletters and get notified of hot deals
                </p>
                <a
                  href='#'
                  className='bg-gray-100 rounded-full text-blue-600 uppercase relative top-14 py-2 px-8'
                >
                  $5.00 usd &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[5]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[4]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[4]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[4]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[4]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[6]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[5]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[5]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[5]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[5]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[7]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[6]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[6]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[6]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[6]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 p-4' onClick={() => open(data[8]?.productLink, '_blank')}>
            <div className=' cursor-pointer w-full border-solid border-2 p-4'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center h-full block m-auto'
                  src={data[7]?.image}
                />
              </a>
              <div className='mt-8 mb-5 ml-7'>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {data[7]?.title}
                </h2>
                <span className='mt-1 text-blue-700 font-bold'>
                  {data[7]?.price}
                </span>
                &nbsp;&nbsp;
                <span className='mt-1 text-gray-400 font-bold'>
                  {data[7]?.shippingCost}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Store.prototype = {
  search: PropTypes.string
}

export default Store;