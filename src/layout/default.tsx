import { Outlet } from 'react-router-dom';
import Header from './header';

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}