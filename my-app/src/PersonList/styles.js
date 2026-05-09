import styled from 'styled-components';

export const Title = styled.h1`
  color: green;
`;
// export const Button = styled.button`
//   border-radius: 10px;
//   color: ${props => props.primary || '#BF4F74'};
//   background-color: ${props => (props.state ? '#fff' : 'blue')};
// `;
export const Button = styled.button`
  border-radius: 10px;
  color: ${props => (props.state ? 'black' : 'white')};
  background-color: ${props => (props.state ? '#fff' : 'blue')};
`;
