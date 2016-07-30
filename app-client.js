var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var IndexRoute =ReactRouter.IndexRoute;



var APP = require('./components/APP');

var Audience  = require("./components/Audience");
var Speaker  = require("./components/Speaker");
var Board  = require("./components/Board");




// Router.run(routes, function (Handler) {
//     ReactDOM.render(<Handler />, document.getElementById('react-container'));
// });

ReactDOM.render((
    <Router>
        <Route path="/" component={APP}>
            <IndexRoute component={Audience} />
            <Route path="speaker" component={Speaker}/>
            <Route path="board" component={Board}/>
        </Route>
    </Router>
), document.getElementById('react-container'));


// ReactDOM.render((
//
// ), document.body);
