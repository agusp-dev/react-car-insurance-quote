import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const CostText = styled.p`
	color: #00838F;
	padding: 1rem;
	margin: 1rem;
	text-align: center;
	font-weight: bold;
`

const TotalCost = ({ totalCost }) => {
	return (
		<CostText>Total Cost: ${ totalCost }</CostText>
	)
}

TotalCost.propTypes = {
	totalCost: PropTypes.number.isRequired
}

export { TotalCost }