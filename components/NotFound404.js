var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var NotFound404 = React.createClass({

    render() {
        return(
            <div id = "not-found">
                <h1> Page Not Found </h1>

                <Link to="/">Join to Audience </Link>
                <Link to="/speaker">Start the presentation </Link>
                <Link to="/board">View the board </Link>

            </div>
        );
    }
});

module.exports = NotFound404;