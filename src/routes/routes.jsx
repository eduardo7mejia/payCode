import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RutaProtegida from '../layouts/RutaProtegida'
import AuthLayout from '../layouts/AuthLayout'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

export function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path="/dashboard" element={<RutaProtegida />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    )
}
