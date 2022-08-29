import {FC, ReactNode} from 'react'
import styled, {css} from 'styled-components'
import {COLOR} from '../../styles/constants'
import Loader from './Loader'

export type ButtonColor = 'green' | 'red' | 'grey'
export type ButtonSize = 'big' | 'small'

interface Props {
  children: ReactNode
  size: ButtonSize
  color: ButtonColor
  onClick?: () => void
  className?: string
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button: FC<Props> = ({
  children,
  className,
  type,
  loading,
  size,
  color,
  onClick,
  disabled,
}) => (
  <Container
    className={className}
    type={type}
    color={color}
    size={size}
    onClick={!disabled ? onClick : undefined}
    disabled={disabled}
  >
    {loading ? <Loader /> : children}
  </Container>
)

interface ContainerProps {
  size: ButtonSize
  color: ButtonColor
  disabled?: boolean
}

const Container = styled.button<ContainerProps>`
  background: ${props => getBackgroundColor(props.color)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0.3rem;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${props => (props.color === 'grey' ? COLOR.GREY_TEXT_DARK : '#fff')};
  height: ${props => (props.size === 'big' ? '5rem' : '3rem')};
  letter-spacing: ${props => (props.size === 'big' ? '0.2rem' : '0.1rem')};
  width: ${props => (props.size === 'big' ? '22rem' : '10rem')};
  /* Spinner */
  > img {
    height: ${props => (props.size === 'big' ? '2.5rem' : '1.8rem')};
  }
  :hover {
    background: ${props => getBackgroundColorHover(props.color)};
    cursor: pointer;
  }
  :focus {
    border: 0.1rem solid ${COLOR.GREY_TEXT_DARK};
  }
  /* Disabled status */
  ${props =>
    props.disabled &&
    css`
      background: ${COLOR.GREY_BUTTON};
      color: #fff;
      :hover {
        background: ${COLOR.GREY_BUTTON};
      }
    `}
`

const getBackgroundColor = (colorName: ButtonColor) => {
  switch (colorName) {
    case 'red':
      return COLOR.RED
    case 'green':
      return COLOR.GREEN
    case 'grey':
      return COLOR.GREY_BUTTON
  }
}

const getBackgroundColorHover = (colorName: ButtonColor) => {
  switch (colorName) {
    case 'red':
      return COLOR.RED_HOVER
    case 'green':
      return COLOR.GREEN_HOVER
    case 'grey':
      return COLOR.GREY_BUTTON_HOVER
  }
}

export default Button