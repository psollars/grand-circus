import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import GridToggle from './GridToggle';

class App extends Component {

	render() {
		return (
			<div className="App">
				<GridToggle isGrid={this.props.isGrid}/>
				<PostList posts={this.props.posts} isLoading={this.props.isLoading} isGrid={this.props.isGrid}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		isLoading: state.isLoading,
		isGrid: state.isGrid
	};
}

export default connect(mapStateToProps, null)(App);
