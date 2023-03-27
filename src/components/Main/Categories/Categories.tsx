import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Categories.module.css';
import Banner from './../../../assets/images/banner.png';
import PriceSort from './PriceSort/PriceSort';

interface CategoriesProps {
    Plants: [],
    GetPlants: any,
    NewArrivals: any,
    Sale: any,
    PriceCount: number | undefined,
    SetPriceCount: any
};

const Categories: FC<CategoriesProps> = (props: CategoriesProps) => {
    const [ category, setCategory ] = useState();
    const [ size, setSize ] = useState();

    let onClickCategory = (event: any) => {
        props.GetPlants(undefined, undefined, event.target.href.slice(22), undefined, props.PriceCount);
        setCategory(event.target.href.slice(22));
        setSize(undefined);
    };
    
    let onCLickSize = (event: any) => {
        props.GetPlants(undefined, undefined, undefined, event.target.href.slice(22), props.PriceCount);
        setSize(event.target.href.slice(22));
        setCategory(undefined);
    };

    return (
        <div className={s.categories}>
            <h3 className={s.title}>Categories</h3>
            <div className={s.categories__list}>
                <NavLink to='House-Plants' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>House Plants</NavLink>
                <NavLink to='Potter-Plants' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Potter Plants</NavLink>
                <NavLink to='Seeds' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Seeds</NavLink>
                <NavLink to='Small-Plants' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Small Plants</NavLink>
                <NavLink to='Big-Plants' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Big Plants</NavLink>
                <NavLink to='Succulents' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Succulents</NavLink>
                <NavLink to='Terrariums' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Terrariums</NavLink>
                <NavLink to='Gardening' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Gardening</NavLink>
                <NavLink to='Accessions' onClick={onClickCategory} className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Accessions</NavLink>
            </div>
            <h3 className={s.price__title}>Price Range</h3>
            <PriceSort 
                GetPlants={props.GetPlants} 
                Plants={props.Plants} 
                Category={category} 
                Size={size}
                NewArrivals={props.NewArrivals}
                Sale={props.Sale}
                PriceCount={props.PriceCount}
                SetPriceCount={props.SetPriceCount}
            />
            <h3 className={s.size__title}>Size</h3>
            <div className={s.size__list}>
                <NavLink to='Small' className={({ isActive }) => isActive ? s.size_active : s.size} onClick={onCLickSize}>Small</NavLink>
                <NavLink to='Medium' className={({ isActive }) => isActive ? s.size_active : s.size} onClick={onCLickSize}>Medium</NavLink>
                <NavLink to='Large' className={({ isActive }) => isActive ? s.size_active : s.size} onClick={onCLickSize}>Large</NavLink>
            </div>
            <img src={Banner} alt="banner" className={s.banner} />
        </div>
    );
};

export default Categories;