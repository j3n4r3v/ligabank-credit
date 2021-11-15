import {useSelector } from 'react-redux';

import { Main } from './components/main/main';
import { ModalLogin } from './components/modal-login/modal-login';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import './index.scss';

function App() {
  const modalLoginIsOpen = useSelector(state => state.modalLoginIsOpen);
  return (
    <>
      <Header />
      {modalLoginIsOpen && <ModalLogin />}
      <Main />
      <Footer />
    </>
  );
};

export default App;
