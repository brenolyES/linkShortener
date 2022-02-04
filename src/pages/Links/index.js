import { useState, useEffect } from 'react';
import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { getLinkSave, deleteLink } from '../../services/storeLinks';
import LinkModal from '../../components/LinkModal';

const Links = () => {

  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    const getLinks = async () => {
      const results = await getLinkSave('@encurtaLink');

      if (results.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(results);
    }
    getLinks();
  }, [])

  const handleOpenLink = (link) => {
    setData(link);
    setShowModal(true);
  }

  const handleDelete = async (id) => {
    const results = await  deleteLink(myLinks, id);

    if(results.length === 0){
      setEmptyList(true);
    }

    setMyLinks(results);

  }

  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='#FFF' />
        </Link>
        <h1>Meus Links 👇</h1>
      </div>

      {emptyList && (
        <div className='links-item'>
          <h2 className='empty-text'>Sua lista está vazia...</h2>
        </div>
      )}

      {
        myLinks.map(link => (
          <div key={link.id} className='links-item'>
            <button className='link' onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color='#FFF' />
              {link.long_url}
            </button>
            <button className='link-delete' onClick={()=> handleDelete(link.id)}>
              <FiTrash size={24} color='#FF5454' />
            </button>
          </div>
        ))
      }

      {showModal && (
        <LinkModal data={data} setShowModal={setShowModal}/>
      )}

    </div>
  );
};

export default Links;
