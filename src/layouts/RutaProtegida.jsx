import { Outlet, Navigate } from 'react-router-dom'

import useAuth from '../hooks/useAuth';

const RutaProtegida = () => {
    const { auth, cargando, tokens } = useAuth();
    const valor = localStorage.getItem("token");
    if (cargando) return 'cargando...'
    return (
        <>
            {valor ? (
                <main className=''>
                    <Outlet />
                </main>
            ) : <Navigate to="/" />}

        </>
    )
};

export default RutaProtegida;