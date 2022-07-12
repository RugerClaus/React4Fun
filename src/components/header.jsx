import React, { Component } from 'react';

class Header extends Component {
    state = { 
        header: 'Shopping Cart'
     } 
    render() { 
        return (
            <React.Fragment>
                <h1 className="banner">{this.state.header}</h1>
            </React.Fragment>
        );
    }
}
 
export default Header;