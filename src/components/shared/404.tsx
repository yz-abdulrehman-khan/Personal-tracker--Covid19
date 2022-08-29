import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* Constants */
import { BP } from '../../styles/constants';

export default () => (
  <Container>
    <h1>404 Error - page not found</h1>
    <h2>The page you are looking for doesn't exist or has been moved.</h2>

    <Link to="/">
      <img src="/icons/arrow-left.svg" alt="Back" /> Go Back
    </Link>
  </Container>
);

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h2 {
    margin: 4rem 0 2rem 0;
  }

  @media (max-width: ${BP.MOBILE}) {
    text-align: left;
  }
`;
