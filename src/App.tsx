import { Error404 } from './components/pages/Error404';
import { PageOne } from './components/pages/PageOne';
import { PageThree } from './components/pages/PageThree';
import { PageTwo } from './components/pages/PageTwo';
import styles from './components/Site.module.css';
import { Navigate, Route, Routes } from 'react-router';

export const App = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>HEADER</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>Здесь будет навигация</div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={'/page1'} />} />
                        <Route path='/page1' element={<PageOne />} />
                        <Route path='/page2' element={<PageTwo />} />
                        <Route path='/page3' element={<PageThree />} />
                        <Route path='/error404' element={<Error404 />} />
                        <Route
                            path='/*'
                            element={<Navigate to={'/error404'} />}
                        />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
};
