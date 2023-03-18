import {FC, useState} from 'react';
import s from './Header.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './../../assets/images/logo.svg';
import Search from './../../assets/images/search.svg';
import Basket from './../../assets/images/basket.svg';
import Login from './../../assets/images/login.svg';
import Popup from '../Popups/Popup';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Header: FC = () => {
    const { IsAuth, User, Error } = useTypedSelector(state => state.Login);
    const [ popupActive, setPopupActive ] = useState(false);
    const navigate = useNavigate();

    let PopupToggle = () => {
        setPopupActive(!popupActive);
        navigate('');
    };

    return (
        <header>
            <div className="container">
                <Link to=''>
                    <img src={Logo} alt="logo" className={s.logo} />
                </Link>
                <nav className={s.menu}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}>
                            <NavLink to='' className={s.menu__link}>Home</NavLink>
                        </li>
                        <li className={s.menu__item}>
                            <NavLink to='Shop' className={s.menu__link}>Shop</NavLink>
                        </li>
                        <li className={s.menu__item}>
                            <NavLink to='Plant-Care' className={s.menu__link}>Plant Care</NavLink>
                        </li>
                        <li className={s.menu__item}>
                            <NavLink to='Blogs' className={s.menu__link}>Blogs</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={s.right__menu}>
                    <img src={Search} className={s.search} />
                    <div className={s.basket}>
                        <p className={s.basket__count}>0</p>
                        <img src={Basket} alt="basket" className={s.basket} />
                    </div>
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