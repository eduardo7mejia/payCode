import React from 'react'
import DashboardContainer from '../components/DashboardContainer'
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return 'cargando...'
  return (
    <DashboardContainer
      textWelcome={auth?.name}
    >
    </DashboardContainer>
  )
}

export default Dashboard