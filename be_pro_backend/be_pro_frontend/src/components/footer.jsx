import githubIcon from '../assets/6955730631582634776.svg';
import LinkedIcon from '../assets/19768422391530099617.svg';
import emailIcon from '../assets/17952689171595156226.svg';

export default function footer() {
  return (
    <footer className='text-gray-600 body-font' id='footerSection'>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:w-1/2 w-full'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='text-5xl mb-5 font-bold text-gray-600'>Be.pro</span>
          </a>
          <p className='mt-2 text-sm text-gray-500'>
            Step into a world of sunlit elegance at our Summer Fashion Store.
            Embrace the season with our curated collection, where vibrant prints
            and breathable fabrics come together in perfect harmony. From
            flowing sundresses to laid-back shorts, our selection embodies the
            carefree spirit of summer. Whether you&apos;re lounging by the beach
            or attending a garden party, our trendy designs and accessories will
            ensure you stay stylishly cool all season long.
          </p>
        </div>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md:w-1/2 w-full'>
          <div className='px-4'>
            <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
              CATEGORIES
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-gray-600 hover:text-gray-800'>Watch</a>
              </li>
              <li>
                <a className='text-gray-600 hover:text-gray-800'>Sunglasses</a>
              </li>
              <li>
                <a className='text-gray-600 hover:text-gray-800'>hot</a>
              </li>
              <li>
                <a className='text-gray-600 hover:text-gray-800'>Sandals</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className='bg-gray-100'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            © 2021 <span className='font-bold'>Be.pro</span> —
            <a
              href='https://www.linkedin.com/in/abdellah-ezzaky/'
              rel='noopener noreferrer'
              className='text-gray-600 ml-1'
              target='_blank'
            >
              @Abdellah
            </a>
          </p>
          <p className='text-gray-500 text-sm text-center sm:text-left pl-5'>
            Icon by <a href='https://freeicons.io/profile/3'>icon king1</a> on{' '}
            <a href='https://freeicons.io'>freeicons.io</a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <a
              className='ml-3 text-gray-500'
              href='https://www.linkedin.com/in/abdellah-ezzaky/'
            >
              <img src={LinkedIcon} className='h-6' />
            </a>
            <a
              className='ml-3 text-gray-500'
              href='https://github.com/ezzakyabdellah/be_pro_backend'
            >
              <img src={githubIcon} className='h-6' />
            </a>
            <a
              className='ml-3 text-gray-500'
              href='mailto:magicalscript@hotmail.fr'
            >
              <img src={emailIcon} className='h-6' />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
