import React, { Component } from 'react';

class Navigation extends Component {
    

    state = {  }

    render() { 

        let styles = {
            fontSize: '3rem2',
            fontWeight: 'bold',
            display: 'flex',
            listStyleType: 'none',
            width: '100vw',
            gap: '10rem',
            
            li: {
                cursor: 'pointer'
            }
        }

        return (
        <React.Fragment>
            <ul style={styles}>
                <li style={styles.li}>Home</li>
                <li style={styles.li}>About</li>
                <li style={styles.li}>Contact</li>
            </ul>
        </React.Fragment>
        )
    }
}
 
export default Navigation;