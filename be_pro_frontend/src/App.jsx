import PageHeader from './components/header';
import MiniMenu from './components/miniMenu';
import HeadBanner from './components/headBanner';
import FeaturedCategories from './components/featuredCategories';
import Store from './components/store';
import Gallery from './components/gallery';
import Sponsors from './components/sponsors';
import Footer from './components/footer';
import { createContext, useMemo, useState } from 'react';

// const listProductNames = ['watch', 'sunglasses', 'sandals', 'hat'];
export const StoreProductSearchContext = createContext({
  productSearch: '',
  setProductSearch: () => {},
});

export const App = () => {
  const [productSearch, setProductSearch] = useState('watch');
  const value = useMemo(
    () => ({ productSearch, setProductSearch }),
    [productSearch]
  );

  return (
    <>
      <PageHeader />
      <MiniMenu />
      <HeadBanner />
      <StoreProductSearchContext.Provider value={value}>
        {useMemo(
          () => (
            <>
              <FeaturedCategories />
              <Store />
            </>
          ),
          []
        )}
      </StoreProductSearchContext.Provider>
      <Gallery />
      <Sponsors />
      <Footer />
    </>
  );
};
