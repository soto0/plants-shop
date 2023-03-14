import {FC} from 'react';
import Categories from '../components/Main/Categories/Categories';
import Goods from '../components/Main/Goods/Goods';
import Slider from '../components/Main/Slider/Slider';

const MainPage: FC = () => {
    return (
        <main>
            <div className="container">
                <Slider />
                <div className="main__center">
                    <Categories />
                    <Goods />
                </div>
            </div>
        </main>
    );
};

export default MainPage;