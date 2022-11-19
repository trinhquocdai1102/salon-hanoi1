import HomeComponent from '../components/Home';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Trang chủ - Salon Hà Nội 1</title>
            </Helmet>
            <HomeComponent />
        </>
    );
};

export default Home;
