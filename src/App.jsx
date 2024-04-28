import './app.css';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import data from './Components/Main/data';

const App = () => {

  const [filteredData, setFilteredData] = useState(data);

  const handlePriceFilter = (price, destination) => {
    const filtered = data.filter(item => parseInt(item.fees.slice(1), 10) <= price && item.destTitle.toLowerCase().includes(destination.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <>
      <NavBar/>
      <Home onPriceFilter={handlePriceFilter}/>
      <Main filteredData={filteredData}/>
      <Footer/>
    </>
  )
}

export default App;
