import { NavLink, Outlet, useNavigate } from 'react-router';
import styles from './Site.module.css';
import { PATH } from './routes/paths';

function getLinkClassName(isActive: boolean) {
    return isActive ? styles.activeNavLink : styles.navLink;
}

export const App = () => {
    const navigate = useNavigate();
    const handleNavigate = (step: number) => {
        navigate(step);
    };
    return (
        <div>
            <div className={styles.header}>
                <h1>HEADER</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink
                            to={PATH.ADIDAS}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Adidas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PUMA}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Puma
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.ABIBAS}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Abibas
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PRICES}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Цены для оптовиков
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to={PATH.PROTECTED}
                            className={({ isActive }) =>
                                getLinkClassName(isActive)
                            }
                        >
                            Protected Page
                        </NavLink>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <button
                            onClick={() => handleNavigate(-1)}
                            className={styles.ButtonLikeLink}
                        >
                            Назад
                        </button>
                        <NavLink
                            to={PATH.ADIDAS}
                            className={styles.LinkLikeButton}
                        >
                            На главную
                        </NavLink>
                        <button
                            onClick={() => handleNavigate(+1)}
                            className={styles.ButtonLikeLink}
                        >
                            Вперед
                        </button>
                    </div>
                    <Outlet />
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
};
