import { Component } from "react";

export class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { error: false };
	}
	static getDerivedStateFromError(d) {
		return { error: true };
	}
	render() {
		const style = {
			display: "grid",
			height: "100vh",
			placeItems: "center",
		};
		if (this.state.error) return <h2 style={style}>Something went wrong !</h2>;
		return this.props.children;
	}
}

export default ErrorBoundary;
