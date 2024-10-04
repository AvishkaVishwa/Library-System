import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../../../components';
import './LoginRegisterModal.css';
import { AppDispatch, RootState } from '../../../../../redux/reduxStore';
import { useEffect, useState } from 'react';
import { setDisplayLogin } from '../../../../../redux/Slices/ModalSlice';
import { LoginForm } from '../LoginForm';

export const LoginRegisterModal: React.FC = () => {
  const authState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const [login, setLogin] = useState<boolean>(true);

  const closeModal = () => {
    dispatch(setDisplayLogin(false));
  }

  const toggleLogin = () => {
    setLogin(!login);
  }

    useEffect (() => {
        if (authState.loggedInUser) {
            closeModal();
        } 

        return (() => {
            if (authState.loggedInUser) {
                localStorage.setItem('userId',authState.loggedInUser._id);
        }
    })
    }, [authState.loggedInUser, closeModal]);

  return (
    <Modal 
      content={login ? <LoginForm toggleRegister={toggleLogin}/>:<></>} 
      toggleModal={closeModal}
    />
  )
}
