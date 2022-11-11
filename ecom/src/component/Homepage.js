// eslint-disable-next-line
import { useEffect, useState } from 'react';
import Banner from './homepageComponent/Banner';
import Category from './homepageComponent/Category';
import OfferSection from './homepageComponent/OfferSection';
import Items from './homepageComponent/Items';
import MidBanner from './homepageComponent/MidBanner';
import CategoryWithThreeCard from './homepageComponent/CategoryWithThreeCard';
import CategoryWithTwoCard from './homepageComponent/CategoryWithTwoCard';
import Instruction from './homepageComponent/Instruction';
import Feadback from './homepageComponent/Feadback';
import {database} from './firebase/firebase';
import { ref, onValue } from "firebase/database";
export default function Homepage () {

  // Data Variables
  const [categoryData,setCategoryData] = useState([]);
  const[dealOfTheDayData,setDealOfTheDayData] = useState([]);
  const[cakesData,setCakesData] = useState([]);
  const[flowersData,setFlowersData] = useState([]);
  const[personalisedGiftsData,setPersonalisedGiftsData] = useState([]);
  const[combosData,setCombosData] = useState([]);
  const[experienceGiftsData,setExperienceGiftsData] = useState([]);
  const[user,setUser] = useState([]);

  // One time data Fetch
  useEffect(() => { 
    onValue(ref(database,"user"), (snapshot) => {
      const data = snapshot.val();
      setUser(data); 
    }); 
    onValue(ref(database,"categoryData"), (snapshot) => {
      const data = snapshot.val();
      setCategoryData(data); 
    }); 
    onValue(ref(database,"dealOfTheDay"), (snapshot) => {
      const data = snapshot.val();
      setDealOfTheDayData(data); 
    }); 
    onValue(ref(database,"cakes"), (snapshot) => {
      const data = snapshot.val();
      setCakesData(data); 
    }); 
    onValue(ref(database,"flowers"), (snapshot) => {
      const data = snapshot.val();
      setFlowersData(data); 
    }); 
    onValue(ref(database,"personalisedGifts"), (snapshot) => {
      const data = snapshot.val();
      setPersonalisedGiftsData(data); 
    }); 
    onValue(ref(database,"combos"), (snapshot) => {
      const data = snapshot.val();
      setCombosData(data); 
    }); 
    onValue(ref(database,"experienceGifts"), (snapshot) => {
      const data = snapshot.val();
      setExperienceGiftsData(data); 
    }); 
  },[]);


  return(
    <>
      <Banner />
      <Category categoryData={categoryData}/>
      <OfferSection title={'Deals of the day'} isTimer={true} offerData={dealOfTheDayData}/>
      <Items title={'Cakes'} titleColor={"white"} itemData={cakesData} sidebanner={require('../assets/images/cakes/AllCakes.png')}/>
      <OfferSection title={'Trending now'}  offerData={dealOfTheDayData}/>
      <Items title={'Flowers'} itemData={flowersData} sidebanner={require('../assets/images/flowers/AllFlowers.png')}  />
      <MidBanner />
      <Items title={'Personalised gifts'} itemData={personalisedGiftsData} sidebanner={require('../assets/images/personalisedGifts/PersonalisedGift.png')}/>
      <CategoryWithThreeCard  title={'Combos'}  itemData={combosData}/>
      <CategoryWithTwoCard title={'Gift For'}  itemData={[{category:"Her",img:require('../assets/images/Her.png')},{category:"Him",img:require('../assets/images/Him.png')}]}/>
      <CategoryWithThreeCard  title={'Experience gifting'}  itemData={experienceGiftsData}/>
      <CategoryWithTwoCard title={'Others'}  itemData={[{category:"Flower Subscription",img:require('../assets/images/FlowerSubscription.png')},{category:"Corporate Gifts",img:require('../assets/images/CorporateGifts.png')}]}/>
      <Feadback user={user}/>
      <Instruction />
    </>
  );
}