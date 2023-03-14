import { FC } from 'react';
import s from './Footer.module.css';
import { Link } from 'react-router-dom';
import FooterForm from './FooterForm/FooterForm';
import Logo from './../../assets/images/logo.svg';
import GardenCare from './../../assets/images/footer__icon.png';
import PlantRenovation from './../../assets/images/footer__icon2.png';
import WateringGarden from './../../assets/images/footer__icon3.png';
import Facebook from './../../assets/images/facebook.svg';
import Instagram from './../../assets/images/instagram.svg';
import Twitter from './../../assets/images/twitter.svg';
import LinkedIn from './../../assets/images/in.svg';
import Un from './../../assets/images/un.svg';
import Accept from './../../assets/images/accept.png';

const Footer: FC = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className={s.footer__top}>
                    <div className={s.footer__top_left}>
                        <div className={s.footer__block}>
                            <img src={GardenCare} alt='footer__icon' className={s.footer__block_icon} />
                            <div className={s.footer__block_ellipse}></div>
                            <h3 className={s.footer__block_title}>Garden Care</h3>
                            <p className={s.footer__block_text}>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>

                        <div className={s.footer__block}>
                            <img src={PlantRenovation} alt='footer__icon' className={s.footer__block_icon} />
                            <div className={s.footer__block_ellipse}></div>
                            <h3 className={s.footer__block_title}>Plant Renovation</h3>
                            <p className={s.footer__block_text}>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                        <div className={s.footer__block}>
                            <img src={WateringGarden} alt='footer__icon' className={s.footer__block_icon} />
                            <div className={s.footer__block_ellipse}></div>
                            <h3 className={s.footer__block_title}>Watering Garden</h3>
                            <p className={s.footer__block_text}>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                    </div>
                    <FooterForm />
                </div>
                <div className={s.footer__center}>
                    <div className={s.footer__center_back}></div>
                    <Link to=''>
                        <img src={Logo} alt="logo" className={s.logo} />
                    </Link>
                    <address className={s.address}>70 West Buckingham Ave.<br /> Farmingdale, NY 11735</address>
                    <a href="mailto:contact@greenshop.com" className={s.email__address}>contact@greenshop.com</a>
                    <a href="tel:8801911717490" className={s.number}>+88 01911 717 490</a>
                </div>
                <div className={s.footer__bottom}>
                    <div className={s.footer__account}>
                        <h3 className={s.title}>My Account</h3>
                        <ul className={s.menu__list}>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>My Account</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Our stores</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Contact us</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Career</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Specials</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.footer__help}>
                        <h3 className={s.title}>Help & Guide</h3>
                        <ul className={s.menu__list}>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Help Center</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>How to Buy</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Shipping & Delivery</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Product Policy</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>How to Return</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.footer__categories}>
                        <h3 className={s.title}>Categories</h3>
                        <ul className={s.menu__list}>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>House Plants</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Potter Plants</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Seeds</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Small Plants</Link>
                            </li>
                            <li className={s.menu__item}>
                                <Link to='' className={s.menu__link}>Accessories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.footer__socials}>
                        <h3 className={s.title}>Social Media</h3>
                        <div className={s.social__links}>
                            <a href="#" className={s.social__link}>
                                <img src={Facebook} alt="facebook" className={s.social__icon} />
                            </a>
                            <a href="#" className={s.social__link}>
                                <img src={Instagram} alt="instagram" className={s.social__icon} />
                            </a>
                            <a href="#" className={s.social__link}>
                                <img src={Twitter} alt="twitter" className={s.social__icon} />
                            </a>
                            <a href="#" className={s.social__link}>
                                <img src={LinkedIn} alt="linkedIn" className={s.social__icon} />
                            </a>
                            <a href="#" className={s.social__link}>
                                <img src={Un} alt="un" className={s.social__icon} />
                            </a>
                        </div>
                        <h3 className={s.accept__title}>We accept</h3>
                        <img src={Accept} alt="accept" className={s.accept} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;