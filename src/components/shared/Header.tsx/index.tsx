import styled from 'styled-components';
/* Constants */
import { HEADER_HEIGHT, BP } from '../../../styles/constants';
import RightSection from './RightSection';

const Header = ({
  backgroundColor,
  rightSection,
}: {
  backgroundColor: string;
  rightSection: 'signOut' | 'close';
}) => (
  <Container background={backgroundColor}>
    <h5>COVID Meeting Tracker</h5>

    {/* <RightSection sectionName={rightSection} /> */}
  </Container>
);

const Container = styled.div`
  background: ${({ background }: { background: string }) => background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 6rem;
  position: fixed;
  width: 100vw;
  height: ${HEADER_HEIGHT};
  z-index: 1;

  @media (max-width: ${BP.TABLET}) {
    padding: 0 3rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    padding: 0 2rem;
  }

  /* Logo section */
  > figure {
    text-align: left;
    margin-bottom: 0;
    /* Logo image */
    > img {
      height: 3rem;
    }
  }
`;

export default Header;
