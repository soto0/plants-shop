import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Offer.module.css';
import OfferIcon from './../../../assets/images/offer__icon.png';
import OfferArrow from './../../../assets/images/offer__arrow.svg';

const Offer: FC = () => {
    return (
        <div className={s.offer}>
            <div className={s.offer__banner}>
                <div className={s.offer__banner_left}>
                    <img src={OfferIcon} alt="banner_icon" className={s.banner__icon} />
                </div>
                <div className={s.offer__banner_right}>
                    <h4 className={s.banner__title}>Summer cactus<br />& succulents</h4>
                    <p className={s.banner__text}>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <NavLink to='' className="button banner__button">Find More</NavLink>
                </div>
            </div>
            <div className={s.offer__banner}>
                <div className={s.offer__banner_left}>
                    <img src={OfferIcon} alt="banner_icon" className={s.banner__icon} />
                </div>
                <div className={s.offer__banner_right}>
                    <h4 className={s.banner__title}>Styling Trends<br />& much more</h4>
                    <p className={s.banner__text}>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <NavLink to='' className="button banner__button">Find More <img src={OfferArrow} alt="offer__arrow" /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Offer;