import React from "react";

// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true, errorState: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorState: error };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log(this.state.errorState.message, this.state.errorState.name);
      return (
        <>
          <p>{`${this.state.errorState.name}: ${this.state.errorState.message}`}</p>
        </>
      );
    }

    return this.props.children;
  }
}
