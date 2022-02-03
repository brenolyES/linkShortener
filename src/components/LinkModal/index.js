import './LinkModal.css'
import { FiX, FiClipboard} from 'react-icons/fi'

const LinkModal = ({data, setShowModal}) => {
  
  const copyLink = async () => {
    await navigator.clipboard.writeText(data.link);
    alert('URL Copiada!')
  }

  return (
    <div className='modal-container'>

      <div className='modal-header'>
        <h2>Link Encurtado</h2>
        <button onClick={() => setShowModal(false)}>
          <FiX size={28} color='black'/>
        </button>
      </div>

      <span>{data.long_url}</span>

      <button className='modal-link' onClick={copyLink}>
        {data.link}
        <FiClipboard size={20} color='white'/>
      </button>

    </div>
  );
};

export default LinkModal;
