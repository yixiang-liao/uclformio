import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 以触发降级 UI，而不是抛出错误
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志记录到服务端，也可以选择不做处理
    console.error("Error caught: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 渲染友好的降级 UI，不显示任何错误信息
      return <div>Something went wrong, but we are working on it.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
