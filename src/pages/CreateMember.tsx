import styled from 'styled-components';
import Header from '../components/shared/Header.tsx';
import { COLOR, BP, HEADER_HEIGHT } from '../styles/constants';
import CreateEventForm from '../components/forms/CreateMemberForm';

const CreateMembersPage = () => (
  <>
    <Header
      backgroundColor={COLOR.WHITE_PAGE_BACKGROUND}
      rightSection="close"
    />

    <Container>
      <CreateEventForm />
    </Container>
  </>
);

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.WHITE_PAGE_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(${HEADER_HEIGHT} + 5rem) 2rem 2rem;
  @media (max-width: ${BP.MOBILE}) {
    display: block;
    padding-top: calc(${HEADER_HEIGHT} + 5rem);
  }
`;

export default (): JSX.Element => <CreateMembersPage />;
