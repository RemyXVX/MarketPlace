import React from 'react';
import Header from '../../components/Header/page';
import Banner from '../../components/Banner/page';
import FeaturedProducts from '../../components/FeaturedProducts/page';
import VendorCategories from '../../components/VendorCategories/page';
import CustomerReviews from '../../components/CustomerReviews/page';
import Footer from '../../components/Footer/page';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedProducts />
      {/* <VendorCategories /> */}
      {/* <CustomerReviews /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
