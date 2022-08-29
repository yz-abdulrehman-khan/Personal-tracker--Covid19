import { FC } from 'react';
import styled from 'styled-components';

import { MembersRow } from '../../api/Members/types';
import { COLOR, CARD_SHADOW, BP } from '../../styles/constants';
import { formatDate } from '../../utils/date-helpers';

interface Props {
  member: MembersRow;
}

const MembersItemRow: FC<Props> = ({ member }) => (
  <Container>
    <TooltipCard>
      <TooltipText>
        <Title>{member.title}</Title>
      </TooltipText>
      <TooltipBox>
        <span>{member.title}</span>
      </TooltipBox>
    </TooltipCard>

    <Description>{member.location}</Description>

    <TooltipCard>
      <TooltipText>
        <Owner data-tip data-for="name">
          {member.name}
        </Owner>
      </TooltipText>
      <TooltipBox>
        <span>{member.name}</span>
      </TooltipBox>
    </TooltipCard>

    <MeetingDate>{formatDate(member.date)}</MeetingDate>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 1.5rem;
  box-shadow: ${CARD_SHADOW};
  padding: 2rem 3rem;
  border-radius: 0.2rem;
  @media (max-width: ${BP.TABLET}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${BP.MOBILE}) {
    display: grid;
    grid-template-columns: 1fr 12rem;
  }
  /* Every text column */
  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 3rem;
    margin-left: auto;
    :first-child {
      margin-left: 0;
    }
    @media (max-width: ${BP.TABLET}) {
      padding-right: 1.5rem;
    }
    @media (max-width: ${BP.MOBILE}) {
      padding-right: 0;
      margin-left: 0;
    }
  }
  /* Event action button */
  > button {
    margin-left: auto;
    @media (max-width: ${BP.MOBILE}) {
      grid-column: 2;
    }
  }
`;
const Title = styled.p`
  width: 26rem;
  font-size: 1.8rem;
  font-weight: 500;
  @media (max-width: ${BP.TABLET}) {
    width: 16rem;
  }
  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1 / span 2;
  }
`;
const Description = styled.p`
  width: 30rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
  @media (max-width: ${BP.TABLET}) {
    width: 12rem;
  }
  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1 / span 2;
  }
`;
const Owner = styled.p`
  width: 15rem;
  color: ${COLOR.GREY_TEXT_DARK};
  opacity: 0.9;
  font-size: 1.5rem;
  @media (max-width: ${BP.MOBILE}) {
    display: none;
  }
`;
const MeetingDate = styled.p`
  width: 25rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
  opacity: 0.6;
  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1;
    margin-top: 1.5rem;
  }
`;

const TooltipText = styled.section`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;
const TooltipBox = styled.section`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 15rem;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: '';
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
const TooltipCard = styled.section`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 23rem;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

export default MembersItemRow;
