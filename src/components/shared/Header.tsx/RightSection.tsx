import {FC} from 'react'
import styled from 'styled-components'
import CloseLink from './CloseLink'
import SignOutLink from './SignOutLink'

interface Props {
  sectionName?: 'close' | 'signOut'
}

const RightSection: FC<Props> = ({sectionName}) => {
  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'signOut':
        return <SignOutLink />

      case 'close':
        return <CloseLink />

      default:
        return null
    }
  }

  return <Container>{renderSection(sectionName)}</Container>
}

const Container = styled.div`
  text-align: right;
`

export default RightSection