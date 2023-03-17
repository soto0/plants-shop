import {FC, useEffect} from 'react';
import Categories from '../components/Main/Categories/Categories';
import Goods from '../components/Main/Goods/Goods';
import Slider from '../components/Main/Slider/Slider';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MainPage: FC = () => {
    const { getPlants } = useActions();
    const { Plants } = useTypedSelector(state => state.Plants);
    
    let onClickCategory = (event: any) => {
        getPlants(undefined, undefined, event.target.href.slice(22));
    };

    let onCLickSize = (event: any) => {
        getPlants(undefined, undefined, undefined, event.target.href.slice(22));
    };

    useEffect(() => {
        getPlants();
    }, []);

    return (
        <main>
            <div className="container">
                <Slider />
                <div className="main__center">
                    <Categories OnClickCategory={onClickCategory} Plants={Plants} OnCLickSize={onCLickSize} GetPlants={getPlants} />
                    <Goods Plants={Plants} GetPlants={getPlants} />
                </div>
            </div>
        </main>
    );
};

export default MainPage;