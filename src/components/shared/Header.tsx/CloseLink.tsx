import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CloseLink = (): JSX.Element => (
  <Link to="/members">
    <a>
      <Container>
        <img src="/icons/cross.svg" alt="Close" />
        <p>Close</p>
      </Container>
    </a>
  </Link>
)

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  /* Cross image */
  > img {
    position: relative;
    top: -0.1rem;
    margin-right: 0.8rem;
    height: 1.4rem;
  }
  /* Close text */
  > p {
    font-weight: 500;
  }
`

export default CloseLink