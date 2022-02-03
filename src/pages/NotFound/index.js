import './NotFound.css'
import ImgNotFound from '../../images/notfound.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container-notfound'>
      <img src={ImgNotFound} alt="Pagina nao encontrada" />
      <h1>Página não encontrada!</h1>
      <Link to='/'>Voltar para página inicial</Link>
    </div>
  );
};

export default NotFound;
