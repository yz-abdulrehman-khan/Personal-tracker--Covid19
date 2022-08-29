import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/shared/Header.tsx';
import { COLOR, HEADER_HEIGHT, BP } from '../styles/constants';
import MemberListFilters from '../components/shared/MemberListFilters';
import MembersItemRow from '../components/shared/MemberItemRow';
import CircleButton from '../components/shared/CircleButton';
import { Link } from 'react-router-dom';
import Api from '../api';
import { FilterType, MembersRow } from '../api/Members/types';
import {
  filterMembersByCategory,
  filterMembersByName,
} from '../utils/date-helpers';
import PageLoader from '../components/shared/FullPageLoader';
import Input from '../components/shared/Input';

const Members = () => {
  const [members, setMembers] = useState<MembersRow[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<MembersRow[]>([]);
  const [filteredMembersByCategory, setFilteredMembersByCategory] = useState<
    MembersRow[]
  >([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [loading, setLoading] = useState(false);
  const [currentCategory, setCategory] = useState<FilterType>('all');

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const members = await Api.members.getAll();
        setMembers(members.results);
        setFilteredMembers(members.results);
        setFilteredMembersByCategory(members.results);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const onFilterChange = (category: FilterType) => {
    const filteredByDateEvents = filterMembersByCategory(members, category);
    setCategory(category);
    setFilteredMembersByCategory(filteredByDateEvents);
    setFilteredMembers(filteredByDateEvents);
    setSearchQuery('');
  };

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredMembersByName = filterMembersByName(
      filteredMembersByCategory,
      e.target.value
    );
    setFilteredMembers(filteredMembersByName);
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Header
            backgroundColor={COLOR.GREY_PAGE_BACKGROUND}
            rightSection={'signOut'}
          />
          <Container>
            <ContentWrapper>
              <MemberListFilters
                onFilterChange={onFilterChange}
                currentCategory={currentCategory}
              />
              <Input
                name="search"
                placeholder="&#128269;   Search by member's name"
                style={{ padding: '20px', fontSize:'26px' }}
                onChange={handleSearchQuery}
                value={searchQuery}
              />
              {filteredMembers.map((member) => {
                return <MembersItemRow member={member} key={member.id} />;
              })}
            </ContentWrapper>

            <Link to="/add/member">
              <CreateMemberButton
                iconSrc="/icons/plus.svg"
                backgroundColor={COLOR.GREY_TEXT_DARK}
              />
            </Link>
          </Container>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  padding: calc(${HEADER_HEIGHT} + 5rem) 6rem 4rem;
  @media (max-width: ${BP.TABLET}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (max-width: ${BP.MOBILE}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const ContentWrapper = styled.div`
  max-width: 139rem;
  margin: 0 auto;
`;
const CreateMemberButton = styled(CircleButton)`
  position: fixed;
  bottom: 6rem;
  right: 6rem;
  @media (max-width: ${BP.MOBILE}) {
    bottom: 3rem;
    right: 3rem;
  }
`;

export default (): JSX.Element => <Members />;
