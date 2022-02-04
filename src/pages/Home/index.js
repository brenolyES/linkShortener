import './home.css'
import React, { useState } from 'react';
import Logo from '../../images/Logo.png'
import { FiLink } from 'react-icons/fi'
import Menu from '../../components/Menu';
import LinkModal from '../../components/LinkModal';
import apiBitly from '../../services/api';
import { saveLink, getLinkSave } from '../../services/storeLinks';

const Home = () => {

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  const handleShortLink = async () => {
    try {
      const { data } = await apiBitly.post('/shorten', {
        long_url: link
      })
      console.log(data);
      setData(data);
      setShowModal(true);
      saveLink('@encurtaLink', data);
      setLink('');

    } catch {
      alert('Algo deu errado!');
      setLink('');
    }
  }

  return (
    <div className='container-home'>

      <div className='logo'>
        <img src={Logo} alt="logo" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className='area-input'>
        <div>
          <FiLink size={24} color='#FFF' />
          <input value={link} onChange={e => setLink(e.target.value)} type="text" placeholder='Cole seu link aqui!' />
        </div>

        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkModal data={data} setShowModal={setShowModal}/>
      )}


    </div>
  );
};

export default Home;
