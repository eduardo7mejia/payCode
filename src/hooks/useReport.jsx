import { useContext } from 'react'
import ReportContext from '../context/ReportsProvider'

const useReport = () => {
    return useContext(ReportContext)
}

export default useReport