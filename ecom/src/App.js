// eslint-disable-next-line
import Header from './component/base/Header';
import Footer from './component/base/Footer';
import './assets/scss/main.scss';
import Banner from './component/Banner';
import Category from './component/Category';
import { useEffect, useState } from 'react';
import OfferSection from './component/OfferSection';
import Items from './component/Items';
import MidBanner from './component/MidBanner';
import CategoryWithThreeCard from './component/CategoryWithThreeCard';
import CategoryWithTwoCard from './component/CategoryWithTwoCard';
import Instruction from './component/Instruction';
import Feadback from './component/Feadback';
import db from './firebase';
import { ref, onValue } from "firebase/database";

function App () {

  // Data Variables
  const [categoryData,setCategoryData] = useState([]);
  const[dealOfTheDayData,setDealOfTheDayData] = useState([]);
  const[cakesData,setCakesData] = useState([]);
  const[flowersData,setFlowersData] = useState([]);
  const[personalisedGiftsData,setPersonalisedGiftsData] = useState([]);
  const[combosData,setCombosData] = useState([]);
  const[experienceGiftsData,setExperienceGiftsData] = useState([]);
  const[user,setUser] = useState([]);

  // Database Variables
  const UserData = ref(db,"user");
  const CategoryData = ref(db,"categoryData");
  const DealOfTheDayData = ref(db,"dealOfTheDay");
  const CakesData = ref(db,"cakes");
  const FlowersData = ref(db,"flowers");
  const PersonalisedGiftsData = ref(db,"personalisedGifts");
  const CombosData = ref(db,"combos");
  const ExperienceGiftsData = ref(db,"experienceGifts");
  
  // One time data Fetch
  useEffect(() => { 

    onValue(UserData, (snapshot) => {
      const data = snapshot.val();
      setUser(data); 
    }); 
    onValue(CategoryData, (snapshot) => {
      const data = snapshot.val();
      setCategoryData(data); 
    }); 
    onValue(DealOfTheDayData, (snapshot) => {
      const data = snapshot.val();
      setDealOfTheDayData(data); 
    }); 
    onValue(CakesData, (snapshot) => {
      const data = snapshot.val();
      setCakesData(data); 
    }); 
    onValue(FlowersData, (snapshot) => {
      const data = snapshot.val();
      setFlowersData(data); 
    }); 
    onValue(PersonalisedGiftsData, (snapshot) => {
      const data = snapshot.val();
      setPersonalisedGiftsData(data); 
    }); 
    onValue(CombosData, (snapshot) => {
      const data = snapshot.val();
      setCombosData(data); 
    }); 
    onValue(ExperienceGiftsData, (snapshot) => {
      const data = snapshot.val();
      setExperienceGiftsData(data); 
    }); 

  },[]);

  return(
    <div>
      <Header/>
      <Banner />
      <Category categoryData={categoryData}/>
      <OfferSection title={'Deals of the day'} isTimer={true} offerData={dealOfTheDayData}/>
      <Items title={'Cakes'} titleColor={"white"} itemData={cakesData} sidebanner={require('./assets/images/cakes/AllCakes.png')}/>
      <OfferSection title={'Trending now'}  offerData={dealOfTheDayData}/>
      <Items title={'Flowers'} itemData={flowersData} sidebanner={require('./assets/images/flowers/AllFlowers.png')}  />
      <MidBanner />
      <Items title={'Personalised gifts'} itemData={personalisedGiftsData} sidebanner={require('./assets/images/personalisedGifts/PersonalisedGift.png')}/>
      <CategoryWithThreeCard  title={'Combos'}  itemData={combosData}/>
      <CategoryWithTwoCard title={'Gift For'}  itemData={[require('./assets/images/Her.png'),require('./assets/images/Him.png')]}/>
      <CategoryWithThreeCard  title={'Experience gifting'}  itemData={experienceGiftsData}/>
      <CategoryWithTwoCard title={'Others'}  itemData={[require('./assets/images/FlowerSubscription.png'),require('./assets/images/CorporateGifts.png')]}/>
      <Feadback user={user}/>
      <Instruction />
      <Footer/>
    </div>
  );
}

export default App;