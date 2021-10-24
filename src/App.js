import { Main } from './components/main/main';
// import { ModalLogin } from '../components/modal-login/modal-login';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import './index.scss';

function App() {
  return (
    <>
      <Header />
      {/* {modalLoginIsOpen && <ModalLogin /> } */}
      <Main/>
      <Footer />
    </>
  );
};

export default App;
