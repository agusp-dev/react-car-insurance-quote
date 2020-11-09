import React, { useState } from 'react'
import { Header, Form, Summary, TotalCost } from './components'
import { Spinner } from './components/spinner/Spinner'
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

	const [summary, setSummary] = useState({})
	const [loading, setLoading] = useState(false)

	const { brand, year, plan, totalCost } = summary

  return (
		<Container>
			<Header title='Car Insurance Quote' />
			<FormContainer>
				<Form 
					setSummary={ setSummary }
					setLoading={ setLoading }/>
				{loading && (
					<Spinner />
				)}
				{brand && year && plan && totalCost && (
					<div>
<						Summary 
							brand={ brand }
							year={ year }
							plan={ plan }/>
						<TotalCost 
							totalCost={ totalCost }/>
					</div>
				)}
			</FormContainer>
		</Container>
  )
}

export default App;
