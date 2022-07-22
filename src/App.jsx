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
        modalVisibility={onHandleModal}
      />
      <div className='my_container_series'>
      <h1 className='my__series__title'>My Series</h1>
      <div className="my__series">
            {
              mySeriesMock.map(serie => <Card title="My series"data={serie} key={serie.id} modalVisibility={onHandleModal} />)
            }
          </div></div>
      <CardList id="topM"
        title="Top Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        modalVisibility={onHandleModal}
      />
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
      <Footer/>
    </div>
  );
}

export default App;