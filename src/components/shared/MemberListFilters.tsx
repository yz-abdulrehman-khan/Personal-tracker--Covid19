import { FC } from 'react';
import styled from 'styled-components';
import { COLOR, BP } from '../../styles/constants';

interface Props {
  onFilterChange?: any;
  currentCategory?: 'all' | 'past14';
}

const CATEGORIES: Array<{ key: 'all' | 'past14'; label: string }> = [
  {
    label: 'ALL',
    key: 'all',
  },
  {
    label: 'PAST 14 DAYS',
    key: 'past14',
  },
];

const MemberListFilters: FC<Props> = ({
  onFilterChange,
  currentCategory,
}): JSX.Element => {
  return (
    <Container>
      <ul>
        {CATEGORIES.map(({ key, label }) => (
          <CategoryItem
            key={key}
            active={currentCategory === key}
            onClick={() => {
              onFilterChange(key);
            }}
          >
            {label}
          </CategoryItem>
        ))}
      </ul>

      <MobileCategorySelector>
        <p>SHOW:</p>
        <select
          value={currentCategory}
          onChange={({ target }) => {
            onFilterChange(target.value);
          }}
        >
          {CATEGORIES.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </MobileCategorySelector>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  /* Desktop category menu */
  > ul {
    display: flex;
    list-style: none;
    @media (max-width: ${BP.MOBILE}) {
      display: none;
    }
  }
`;
const CategoryItem = styled.li<{ active: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 3rem;
  cursor: pointer;
  color: ${(props) =>
    props.active ? COLOR.GREY_TEXT_DARK : COLOR.GREY_TEXT_LIGHT};
  :last-child {
    margin-right: 0;
  }
`;
const ViewModeItem = styled.img<{ active: boolean }>`
  margin-left: 1.5rem;
  opacity: ${(props) => (props.active ? 1 : 0.2)};
  cursor: pointer;
  :first-child {
    margin-left: 0;
  }
`;
const MobileCategorySelector = styled.div`
  display: none;
  @media (max-width: ${BP.MOBILE}) {
    display: flex;
    align-items: center;
    /* 'SHOW:' label */
    > p {
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 1rem;
    }
  }
`;

export default MemberListFilters;
