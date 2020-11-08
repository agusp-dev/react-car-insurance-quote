import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const HeaderContent = styled.header`
	background-color: #26C6DA;
	padding: 10px;
	font-weight: bold;
	color: #FFFFFF;
`
const TextHeader = styled.h1`
	font-size: 2rem;
	margin: 0;
	font-family: 'Slabo 27px', serif;
	text-align: center;
`

const Header = ({ title }) => {
	return (
		<HeaderContent>
			<TextHeader>{ title }</TextHeader>
		</HeaderContent>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export { Header }