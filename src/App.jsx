import { useState } from 'react';

import Navbar from './components/Navbar';
import CardList from './components/CardList';
import mySeriesMock from './assets/mySeries/mySeries';
import Card from './components/Card';
import Modal from './components/Modal';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App">
    <Navbar/>
      <CardList id="topS"
        title="Top series"
        BASE_URL='https://edgemony-backend.herokuapp.com/series'
        mySeriesMock={""}
        modalVisibility={onHandleModal}
      />
      
      <CardList id="topM"
        title="Top Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        mySeriesMock={""}
        modalVisibility={onHandleModal}
      />
      <CardList id="topM"
        title="My Series"
        BASE_URL=''
        mySeriesMock={mySeriesMock}
        modalVisibility={onHandleModal}
      />
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
      <Footer/>
    </div>
  );
}

export default App;