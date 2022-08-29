import {FC} from 'react'
import styled from 'styled-components'

interface Props {
  iconSrc: string
  backgroundColor: string
  className?: string
}

const CircleButton: FC<Props> = ({className, iconSrc, backgroundColor}) => (
  <Container className={className} background={backgroundColor}>
    <img src={iconSrc} alt="Button icon" />
  </Container>
)

const Container = styled.button<{background: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50%;
  background: ${props => props.background};
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  box-shadow: 0 0.4rem 0.8rem #0004;
  /* Icon */
  > img {
    height: 1.5rem;
  }
`

export default CircleButton