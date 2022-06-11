import React from 'react';

class ListaProps extends React.Component {
	render() {
		const { text } = this.props;
		return <><h1 style={{ color: "red" }}>{text}</h1>;</> 
	}
}

export default ListaProps;
