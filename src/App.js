import { Header, Form } from './components'
import styled from '@emotion/styled'

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const FormContainer = styled.div`
	background-color: #FFF;
	padding: 3rem;
`

function App() {
  return (
		<Container>
			<Header title='Car Insurance Quote' />
			<FormContainer>
				<Form />
			</FormContainer>
		</Container>
  )
}

export default App;
