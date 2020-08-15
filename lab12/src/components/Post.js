import React, { Component } from 'react';

class Post extends Component {

	render() {

		const data = this.props.data.data;

		return (
				<a href={data.url} className="Post">
						<img src={data.thumbnail} alt={data.title}/>
						<p>{data.title}</p>
				</a>
		);
	}

}

export default Post;
