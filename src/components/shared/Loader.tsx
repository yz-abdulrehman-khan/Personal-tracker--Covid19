import styled from 'styled-components';

const Loader = (): JSX.Element => {
  return <Spin src="/icons/spinner-light.svg" alt="Loading ...." />;
};

const Spin = styled.img`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
  animation: spin 2s linear infinite;
  display: inline-block;
  max-height: 65%;
  height: 3rem;
`;
export default Loader;
