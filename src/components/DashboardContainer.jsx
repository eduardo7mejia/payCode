import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import ButtonLogout from './ButtonLogout'
import useReport from '../hooks/useReport'
import { Line } from 'react-chartjs-2';
import useAuth from '../hooks/useAuth'
import { Chart } from './Chart'


const DashboardContainer = ({ children, textWelcome }) => {
  const { cerrarSesion } = useAuth();
  const reports = useReport();
  const [state, setState] = useState()
  const [estado, setestado] = useState(true)
  useEffect(() => {
    setState(reports?.reports)
  }, [state])
  return (
    <Container>
      <div className='header'>
        <div className='container-text'>
          <h1>Bienvenido {textWelcome}</h1>
        </div>
        <div className='container-button'>
          <ButtonLogout onClick={() => cerrarSesion()}>
          </ButtonLogout>
        </div>
      </div>
      <div>
        <h1 className='report-text'>Reporte de <span className='report-span'>Hoy</span></h1>
        <div className="angry-grid">
          <div id="item-0">
            <Card
              titlecard='Ingresos'
              textMoney='$442,000'
              estado={true}
            >
              <div>
                <Chart />
              </div>
            </Card>
          </div>
          <div id="item-1">
            <Card
              titlecard='Ticket Promedio'
              textMoney={`$ ${state?.averageTicket}`}
              backgroundColor='#e964789d'
              color='#EB455F'
              textSub='10.8%'
              angle='-30'
              estado={true}
            >
            </Card>
          </div>
          <div id="item-2">
            <Card
              titlecard='Ticket tope'
              textMoney={`$ ${state?.topTicket}`}
              backgroundColor='#C2F2D7'
              color='#77D9A1'
              textSub='12.6%'
              angle='220'
              estado={true}
            >
            </Card>
          </div>
          <div id="item-3">
            <Card
              titlecard='Método de pago mas usado'
              textMoney='Tarjeta de credito/debito'
            ></Card>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  )
}

export default DashboardContainer

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr; 
    grid-template-rows:  0.3fr 1.9fr 0.8fr; 
    overflow: hidden;
    .container-text,
    .container-text{
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
    h1{
      font-size: 2rem;
    }
    .header{
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      height: 70px;
      width: 100%;
    }
    .angry-grid{
      display: grid; 
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      height: 100%;
      width: 100%
    }
    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;
      grid-row-end: 2;
      grid-column-end: 2;
    }
    #item-1 {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-row-end: 3;
      grid-column-end: 2;
    }
    #item-2 {
      grid-row-start: 3;
      grid-column-start: 1;
      grid-row-end: 4;
      grid-column-end: 2;
    }
    #item-3 {
      grid-row-start: 4;
      grid-column-start: 1;
      grid-row-end: 5;
      grid-column-end: 2;
    }
    @media screen and (min-width: 1020px) {
      height: 100vh;
      padding-inline: 2rem;
      h1{
        font-size: 3rem;
      } 
      .angry-grid{
      display: grid; 
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      height: 100%;
      width: 100%
    }
      #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;
      grid-row-end: 4;
      grid-column-end: 2;

    }
    #item-1 {
      grid-row-start: 1;
      grid-column-start: 2;

      grid-row-end: 2;
      grid-column-end: 3;

    }
    #item-2 {
      grid-row-start: 2;
      grid-column-start: 2;

      grid-row-end: 3;
      grid-column-end: 3;

    }
    #item-3 {
      grid-row-start: 3;
      grid-column-start: 2;

      grid-row-end: 4;
      grid-column-end: 3;

    }
    .report-text{
      color: #6b6969;
    }
    .report-span{
        color: black;
    }
    .container-text,
    .container-text{
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: start;
      justify-content: start;

    }
  }
`;
