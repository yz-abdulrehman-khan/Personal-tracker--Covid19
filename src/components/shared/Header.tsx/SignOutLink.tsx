import styled from 'styled-components';

/* Constants */
import { COLOR } from '../../../styles/constants';

const SignOutLink = () => {
  return <LinkButton>Log out</LinkButton>;
};

const LinkButton = styled.div`
  background-color: unset;
  letter-spacing: 1px;
  display: inline;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: ${COLOR.GREY_TEXT_DARK};
  }
  &:focus {
    outline: 0;
  }
`;

export default SignOutLink;
