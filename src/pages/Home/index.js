import React from 'react';
import Logo from '../../images/Logo.png'
import { FiLink} from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu';

const Home = () => {
  return (
    <div className='container-home'>

      <div className='logo'>
        <img src={Logo} alt="logo" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className='area-input'>
        <div>
          <FiLink size={24} color='#FFF'/>
          <input type="text" placeholder='Cole seu link aqui!' />
        </div>

        <button>Encurtar Link</button>
      </div>

      <Menu/>

    </div>
  );
};

export default Home;
