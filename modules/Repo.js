import React from 'react'
export default React.createClass({
    render() {
        const {username, repoName} = this.props.params;
        return (
            <div>
                <h2>{username}/{repoName}/{Math.random()}</h2>
            </div>
        )
    }
})
