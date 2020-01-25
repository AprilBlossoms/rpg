import React from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const error = this.state.error as Error;

      return (
        <div className="error">
          <h1>Something went wrong.</h1>
          <h3>{error.name}</h3>
          <p>{error.message}</p>
          <p>{error.stack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
