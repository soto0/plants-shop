import {FC, useEffect} from 'react';
import Blog from '../components/Main/Blog/Blog';
import Categories from '../components/Main/Categories/Categories';
import Goods from '../components/Main/Goods/Goods';
import Offer from '../components/Main/Offer/Offer';
import Slider from '../components/Main/Slider/Slider';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MainPage: FC = () => {
    const { getPlants, getPosts, getPages } = useActions();
    const { Plants, Pages } = useTypedSelector(state => state.Plants);
    const { Posts } = useTypedSelector(state => state.Posts);
    
    let onClickCategory = (event: any) => {
        getPlants(undefined, undefined, event.target.href.slice(22));
    };

    let onCLickSize = (event: any) => {
        getPlants(undefined, undefined, undefined, event.target.href.slice(22));
    };

    useEffect(() => {
        getPlants();
        getPosts();
    }, []);

    return (
        <main>
            <div className="container">
                <Slider />
                <div className="main__center">
                    <Categories OnClickCategory={onClickCategory} Plants={Plants} OnCLickSize={onCLickSize} GetPlants={getPlants} />
                    <Goods Plants={Plants} Pages={Pages} GetPlants={getPlants} GetPages={getPages}  />
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