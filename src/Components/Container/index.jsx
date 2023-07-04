import React, { PureComponent } from 'react'
import './style.css'

class Container extends PureComponent {
    render() {
        return (
            <div className='main_contaier'>{this.props.children}</div>
    )
  }
}

export default Container;