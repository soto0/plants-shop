import {FC, useEffect, useState} from 'react';
import Blog from '../components/Main/Blog/Blog';
import Categories from '../components/Main/Categories/Categories';
import Goods from '../components/Main/Goods/Goods';
import Offer from '../components/Main/Offer/Offer';
import Slider from '../components/Main/Slider/Slider';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MainPage: FC = () => {
    const { getPlants, getPosts } = useActions();
    const { Plants } = useTypedSelector(state => state.Plants);
    const { Posts } = useTypedSelector(state => state.Posts);
    const url = window.location.pathname;
    const [ newArrivals, setNewArrivals ] = useState();
    const [ sale, setSale ] = useState();
    const [ priceCount, setPriceCount ] = useState<number>();

    useEffect(() => {
        const checkUrl = () => {
            switch (url) {
                case '/':
                    return getPlants(undefined, undefined, undefined, undefined, priceCount)
                case '/New-Arrivals':
                    return  (
                        getPlants(true, undefined, undefined, undefined, priceCount)
                    )
                case '/Sale':
                    return (
                        getPlants(undefined, true, undefined, undefined, priceCount)
                    )
                default:
                    return undefined
            }
        };

        checkUrl();
        getPosts();
    }, [url]);

    return (
        <main>
            <div className="container">
                <Slider />
                <div className="main__center">
                    <Categories 
                        Plants={Plants} 
                        GetPlants={getPlants} 
                        NewArrivals={newArrivals} 
                        Sale={sale}
                        PriceCount={priceCount}
                        SetPriceCount={setPriceCount}
                    />
                    <Goods 
                        Plants={Plants} 
                        GetPlants={getPlants} 
                        SetNewArrivals={setNewArrivals} 
                        SetSale={setSale}  
                        PriceCount={priceCount}
                    />
                </div>
                <div className="main__bottom">
                    <Offer />
                    <Blog Posts={Posts} />
                </div>
            </div>
        </main>
    );
};

export default MainPage;