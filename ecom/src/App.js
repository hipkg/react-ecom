// eslint-disable-next-line
import Header from './component/base/Header';
import Footer from './component/base/Footer';
import './assets/scss/main.scss';
import Banner from './component/Banner';
import Category from './component/Category';
import { useState } from 'react';
import OfferSection from './component/OfferSection';
import demo from './Json/demo.json'
import Items from './component/Items';
import MidBanner from './component/MidBanner';
import CategoryWithThreeCard from './component/CategoryWithThreeCard';
import CategoryWithTwoCard from './component/CategoryWithTwoCard';
import Instruction from './component/Instruction';
import Feadback from './component/Feadback';

function App () {
  const [categoryData] = useState(demo.categoryData);
  const[dealOfTheDayData] = useState(demo.dealOfTheDay);
  const[cakesData] = useState(demo.cakes);
  const[flowersData] = useState(demo.flowers);
  const[personalisedGiftsData] = useState(demo.personalisedGifts);
  const[combosData] = useState(demo.combos);
  const[experienceGiftsData] = useState(demo.experienceGifts);

  return (
    <div>
      <Header/>
      <Banner />
      <Category categoryData={categoryData}/>
      <OfferSection title={'Deals of the day'} isTimer={true} offerData={dealOfTheDayData}/>
      <Items title={'Cakes'} titleColor={"white"} itemData={cakesData} sidebanner={require('./assets/images/cakes/AllCakes.png')}/>
      <OfferSection title={'Trending now'}  offerData={dealOfTheDayData}/>
      <Items title={'Flowers'} itemData={flowersData} sidebanner={require('./assets/images/flowers/AllFlowers.png')}/>
      <MidBanner />
      <Items title={'Personalised gifts'} itemData={personalisedGiftsData} sidebanner={require('./assets/images/personalisedGifts/PersonalisedGift.png')}/>
      <CategoryWithThreeCard  title={'Combos'}  itemData={combosData}/>
      <CategoryWithTwoCard title={'Gift For'}  itemData={[require('./assets/images/Her.png'),require('./assets/images/Him.png')]}/>
      <CategoryWithThreeCard  title={'Experience gifting'}  itemData={experienceGiftsData}/>
      <CategoryWithTwoCard title={'Others'}  itemData={[require('./assets/images/FlowerSubscription.png'),require('./assets/images/CorporateGifts.png')]}/>
      <Feadback />
      <Instruction />
      <Footer/>
    </div>
  );
}

export default App;