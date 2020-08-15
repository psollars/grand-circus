import React, { Component } from 'react';
import Post from './Post';
import GridPost from './GridPost';

class PostList extends Component {

	render() {

		const classExtension = this.props.isGrid ? "Grid" : "List";
		

		return (
			<div className="PostContainer">
				<h1>Rich Man's Reddit
					{this.props.isLoading || 
						<span> /{this.props.posts[0].data.subreddit}</span>
					}
				</h1> 
				<div className={"Post" + classExtension}>
					{this.props.isLoading && 
						<h3>Loading...</h3>
					}

					{this.props.isGrid && 
						this.props.posts.map((post, index) => {
							return <GridPost key={index} data={this.props.posts[index]}/>;
						})
					}

					{this.props.isGrid || 
						this.props.posts.map((post, index) => {
							return <Post key={index} data={this.props.posts[index]}/>;
						})
					}
				</div>
			</div>
		);
	}
}

export default PostList;

//render a new component to show grid view, NOW I REALIZE I DON'T NEED A NEW COMPONENT, COULD'VE SWAPPED STYLES CONDITIONALLY!!!
