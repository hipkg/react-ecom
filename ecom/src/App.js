// eslint-disable-next-line
import Header from './component/base/Header';
import Footer from './component/base/Footer';
import './assets/scss/main.scss';
import Banner from './component/Banner';

function App () {
  return (
    <div>
      <Header/>
      <Banner />
      <Footer/>
    </div>
  );
}

export default App;

