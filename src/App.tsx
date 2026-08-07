import { Error404 } from './components/pages/Error404';
import { PageOne } from './components/pages/Adidas';
import { PageThree } from './components/pages/Abibas';
import { PageTwo } from './components/pages/Puma';
import styles from './components/Site.module.css';
import { Navigate, NavLink, Route, Routes } from 'react-router';
import { SneakerModel } from './components/pages/SneakerModel';

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/error404',
} as const;

function getLinkClassName(isActive: boolean) {
    return isActive ? styles.activeNavLink : styles.navLink;
}

export const App = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>HEADER</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink
                            to={PATH.PAGE1}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Adidas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PAGE2}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Puma
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PAGE3}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Abibas
                        </NavLink>
                    </div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route
                            path='/'
                            element={<Navigate to={PATH.PAGE1} />}
                        />
                        <Route path={PATH.PAGE1} element={<PageOne />} />
                        <Route path={PATH.PAGE2} element={<PageTwo />} />
                        <Route path={PATH.PAGE3} element={<PageThree />} />
                        <Route
                            path={'/:model/:id'}
                            element={<SneakerModel />}
                        />
                        <Route
                            path={'/:model/:id'}
                            element={<SneakerModel />}
                        />
                        <Route path='/*' element={<Error404 />} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
};
