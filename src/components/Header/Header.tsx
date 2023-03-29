import {FC, useEffect, useState} from 'react';
import s from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './../../assets/images/logo.svg';
import Search from './../../assets/images/search.svg';
import Basket from './../../assets/images/basket.svg';
import Login from './../../assets/images/login.svg';
import Popup from '../Popups/Popup';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Header: FC = () => {
    const { BasketToggle } = useTypedSelector(state => state.Basket);
    const { IsAuth, User, Error } = useTypedSelector(state => state.Login);
    const [ popupActive, setPopupActive ] = useState(false);
    const { getBasketToggle, getPlants } = useActions();
    const navigate = useNavigate();

    let PopupToggle = () => {
        setPopupActive(!popupActive);
        navigate('');
    };

    useEffect(() => {
        if (User.userName) {
            getBasketToggle(User.userName);
        };
        getPlants();
    }, [User]);
    
    return (
        <header>
            <div className="container">
                <Link to=''>
                    <img src={Logo} alt="logo" className={s.logo} />
                </Link>
                <div className={s.right__menu}>
                    <img src={Search} className={s.search} />
                    <Link to='/Shopping-Cart' className={s.basket}>
                        <p className={s.basket__count}>{BasketToggle.length}</p>
                        <img src={Basket} alt="basket" className={s.basket} />
                    </Link>
                    {
                        IsAuth ?
                            <p className={s.user__name}>{User?.userName}</p> :
                            <Link to='Login' className='button login' onClick={PopupToggle}>
                                <img src={Login} alt="login" className="login__icon" />
                                Login
                            </Link>
                    }
                </div>
            </div>
            <Popup PopupActive={popupActive} OnClickPopupButton={PopupToggle} Error={Error} User={User} />
        </header>
    );
};

export default Header;