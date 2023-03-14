import {FC} from 'react';
import Categories from '../components/Categories/Categories';
import Slider from '../components/Main/Slider/Slider';

const MainPage: FC = () => {
    return (
        <main>
            <div className="container">
                <Slider />
                <Categories />
            </div>
        </main>
    );
};

export default MainPage;