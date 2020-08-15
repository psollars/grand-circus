import React, { Component } from 'react';

class GridPost extends Component {

	render() {

		const data = this.props.data.data;

		return (
				<a href={data.url} className="GridPost">
						<img src={data.thumbnail} alt={data.title}/>
						<p>{data.title}</p>
				</a>
		);
	}

}

export default GridPost;
