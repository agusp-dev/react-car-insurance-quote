import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const CostText = styled.p`
	color: #00838F;
	text-align: center;
	font-weight: bold;
`

const CostContainer = styled.div`
	padding: .5rem;
	border: 1px solid #26C6DA;
	margin-top: 1rem;
	position: relative;
	background-color: rgb(127, 224, 237);
`

const TotalCost = ({ totalCost }) => {
	return (
		<CostContainer>
			<CostText>Total Cost: ${ totalCost }</CostText>
		</CostContainer>
	)
}

TotalCost.propTypes = {
	totalCost: PropTypes.number.isRequired
}

export { TotalCost }