import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const SummaryContainer = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838F;
	color: #FFF;
	margin-top: 1rem;
`

const Summary = ({ brand, year, plan }) => {
	return (
		<SummaryContainer>
			<h2>Cost Summary</h2>
			<ul>
				<li>Brand: { brand }</li>
				<li>Year: { year }</li>
				<li>Plan: { plan }</li>
			</ul>
		</SummaryContainer>
	)
}

Summary.propTypes = {
	brand: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	plan: PropTypes.string.isRequired
}

export { Summary }