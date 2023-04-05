import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/axios'
import useAuth from '../hooks/useAuth'

const ReportContext = createContext()

export const ReportsProvider = ({ children }) => {

    const [reports, setReports] = useState([])
       const { auth } = useAuth();
    useEffect(() => {
        const obtenerReports = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios('/challenge/report', config)
                setReports(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerReports()
    }, [auth])


    return (
        <ReportContext.Provider
            value={{
                reports,
            }}
        >
            {children}
        </ReportContext.Provider>
    )
}

export default ReportContext;