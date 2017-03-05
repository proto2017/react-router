/**
 * Created by Administrator on 2017/3/3.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
    
})
