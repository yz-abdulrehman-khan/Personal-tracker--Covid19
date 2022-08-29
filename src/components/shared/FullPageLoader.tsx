import Loader from './Loader';
import styled from 'styled-components';
import { COLOR } from '../../styles/constants';

const PageLoader = (): JSX.Element => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLOR.GREY_TEXT_DARK};
`;

export default PageLoader;
