import React from 'react'

const withTooltip = Component => {
  class HOC extends React.Component {
    state = {
      showTooltip: false,
      content: ''
    }

    handleOver = e => {
      this.setState({
        showTooltip: true,
        content: e.target.innerText
      })
    }

    handleOut = () => {
      this.setState({
        showTooltip: false,
        content: ''
      })
    }

    render() {
      return (
        <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          <Component action={this.state} {...this.props} />
        </div>
      )
    }

  }

  return HOC
}

export default withTooltip
