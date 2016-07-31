var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var IndexRoute =ReactRouter.IndexRoute;

var APP = require('./components/APP');

var Audience  = require("./components/Audience");
var Speaker  = require("./components/Speaker");
var Board  = require("./components/Board");
var NotFound404 = require('./components/NotFound404');


ReactDOM.render((
    <Router>
        <Route path="/" component={APP}>
            <IndexRoute component={Audience} />
            <Route path="speaker" component={Speaker}/>
            <Route path="board" component={Board}/>
            <Route path="*" component={NotFound404}/>
            
        </Route>
    </Router>
), document.getElementById('react-container'));

