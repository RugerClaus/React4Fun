import React, { Component } from 'react';

const body = document.body;
body.style.backgroundColor = 'white';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    state = { 
        count: 0,
        tags: ["fuck"]
        
    }

    render() { 
        
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm pad2'>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        const zero = <h1>Zero</h1>
        return count === 0 ? zero : count;
    }
}
 
 
export default Counter;