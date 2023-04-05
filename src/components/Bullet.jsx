import styled from 'styled-components';
const Bullet = () => {
  return (
    <BulletD>Bullet</BulletD>
  )
}

export default Bullet


export const BulletD = styled.div`
  position: relative;
  top: 0;
  right: 0;
  background-color: red;
`;
