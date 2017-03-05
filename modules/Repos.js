/**
 * Created by Administrator on 2017/3/3.
 */
import React from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router'
export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSubmit: function(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        browserHistory.push(path);
    },
    render() {
        return (
            <div>
                <h1>repos</h1>
                <ul>
                    <li><NavLink to="/repos/react/react-router">react-router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">reacxcc</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
})