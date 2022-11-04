import { Component, ErrorInfo, ReactNode } from 'react';

import { Row } from '@/components/shared/Row';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Row header='Error boundary catches this error'>
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        </Row>
      );
    }

    return this.props.children;
  }
}
