import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 576px);
  gap: 32px;
`;