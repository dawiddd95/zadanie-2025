import React from 'react'

export function withTitle<P>(WrappedComponent: React.ComponentType<P>, title: string) {
  return class WithTitle extends React.Component<P> {
    render() {
      return (
        <div>
          <h2>{title}</h2>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
