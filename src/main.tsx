import { createRoot } from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { router } from './components/app/routes/router.tsx';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
