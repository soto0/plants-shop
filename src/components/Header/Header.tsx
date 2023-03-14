import {FC} from 'react';
import s from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from './../../assets/images/logo.svg';
import Search from './../../assets/images/search.svg';
import Basket from './../../assets/images/basket.svg';
import Login from './../../assets/images/login.svg';

const Header: FC = () => {
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
                    <Link to='/Login' className='button login'>
                        <img src={Login} alt="login" className="login__icon" />
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;