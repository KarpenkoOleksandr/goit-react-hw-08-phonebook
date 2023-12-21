import styled from 'styled-components';
import { Links } from 'components/AuthNav/AuthNav.styled';

// export const containerHeroStyle = (photo) => ({
//   position: 'relative',
//   backgroundColor: 'grey.300',
//   color: '#0c0808',
//   mb: 4,
//   mt: 10,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'top',
//   backgroundImage: `url(${photo})`,
// });

export const HeroWrapper = styled.div`
height: auto;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;


export const BlurWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: rgba(217, 205, 173, 0.5);
height: auto;
min-width: 500px;
padding: 8px 8px 0 8px;
margin-bottom: 16px;
border-radius: 16px;
`;

export const HomeLogin = styled(Links)`
color: #000;
border: 1px solid #000;
  &:hover {
    background: #3d405b;
    color: #f4f1de;
  }
`
