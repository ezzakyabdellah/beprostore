import { useContext } from 'react';
import sunglassesIcon from '../assets/12579731491579605641.svg';
import watchIcon from '../assets/16092071581556279661.svg';
import hotIcon from '../assets/4084173571595601899.svg';
import sandalsIcon from '../assets/5601192491685116824.svg';
import { StoreProductSearchContext } from '../App';

export default function FeaturedCategories() {
  // const [productSearch, setProductSearch] = useState('watch');
  const { setProductSearch } = useContext(
    StoreProductSearchContext
  );
  return (
    <div className='container mx-auto' id='shopSection'>
      <div
        className='flex flex-row rounded-xl flex-wrap justify-between items-center py-12 px-12 relative -top-24 -mb-24 bg-gray-100 
      [&>span]:border-solid [&>span]:border-l-2 [&>span]:md:h-24 [&>span]:hidden [&>span]:md:block
      [&>div]:md:w-1/5 [&>div]:sm:w-full [&>div]:border-t-2 [&>div]:md:border-t-0'
      >
        <div
          className='flex justify-between items-stretch gap-2 cursor-pointer'
          onClick={() => {
            setProductSearch('watch');
          }}
        >
          <div className=''>
            <img src={watchIcon} alt='' className='h-24' />
          </div>
          <div>
            <div className='text-2xl font-medium'>Watch</div>
            <div className='text-lg text-gray-500'>
              Find the hots watches on Ebay now
            </div>
          </div>
        </div>
        <span></span>
        <div
          className='flex justify-center items-center gap-2 cursor-pointer'
          onClick={() => {
            setProductSearch('sunglasses');
          }}
        >
          <div className=''>
            <img src={sunglassesIcon} alt='' className='h-24' />
          </div>
          <div>
            <div className='text-2xl font-medium'>Sunglasses</div>
            <div className='text-lg text-gray-500'>
              A sunglasses is your friend to enjoys the summer
            </div>
          </div>
        </div>
        <span></span>
        <div
          className='flex justify-center items-center gap-2 cursor-pointer'
          onClick={() => {
            setProductSearch('hat');
          }}
        >
          <div className=''>
            <img src={hotIcon} alt='' className='h-24' />
          </div>
          <div>
            <div className='text-2xl font-medium'>Hot</div>
            <div className='text-lg text-gray-500'>
              Discover cooles Hots on ebay right now
            </div>
          </div>
        </div>
        <span></span>
        <div
          className='flex justify-center items-center gap-2 cursor-pointer'
          onClick={() => {
            setProductSearch('sandals');
          }}
        >
          <div className=''>
            <img src={sandalsIcon} alt='' className='h-24' />
          </div>
          <div>
            <div className='text-2xl font-medium'>Sandals</div>
            <div className='text-lg text-gray-500'>
              Confortable sandals exclusively on ebay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
