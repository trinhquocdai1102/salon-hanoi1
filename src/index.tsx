import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'rc-slider/assets/index.css';
import App from './App';
import { SWRConfig } from 'swr';
import { Toaster } from 'react-hot-toast';
import { MenuContextProvider } from './context/MenuContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <MenuContextProvider>
            <SWRConfig value={{ revalidateOnFocus: false }}>
                <App />
                <Toaster reverseOrder={false} />
            </SWRConfig>
        </MenuContextProvider>
    </BrowserRouter>
);
