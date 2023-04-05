import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { MyRoutes } from './routes/routes'
import { ReportsProvider } from './context/ReportsProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ReportsProvider>
            <MyRoutes />
          </ReportsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
