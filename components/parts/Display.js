/**
 * Created by Ankush on 7/30/16.
 */

var React = require('react');


var Display = React.createClass({

    render() {
        return (this.props.if) ? <div> {this.props.children}</div>: null;
    }
});

module.exports = Display;
