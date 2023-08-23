import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'
import Row from './ui/Row'






const StyledApp = styled.main`
  padding:20px;
`

function App () {
  return (
    <>
      <GlobalStyles/>
      <StyledApp>
        <Row>
          <Row type='horizontal'>
          <Heading as='h1'>The wild oasis</Heading>
          <div>
            <Heading as='h2'>CheckIn and Out</Heading>
            <Button>Check in</Button>
            <Button variation='danger' size='large'>Check out</Button>
          </div>
        </Row>

        <Row>
          <Heading as='h3'>Form</Heading>
          <form>
            <Input type='number' placeholder='Number of quests' />
            <Input type='number' placeholder='Number of quests' />
          </form>
        </Row>
        </Row>
      </StyledApp>
    </>
    
  )
}

export default App
