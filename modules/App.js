/**
 * Created by proto on 2017/2/26.
 */
import React from 'react';
import Home from './Home';
import NavLink from './NavLink';
// import { IndexLink } from 'react-router';
export default React.createClass({
    render() {
        return (
            <div>
                <h1>React router</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/repos">repos</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        );
    }
})