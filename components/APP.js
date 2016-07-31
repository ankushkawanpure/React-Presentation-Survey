var React = require('react');
var Router = require('react-router');


var io = require('socket.io-client');

var Header = require('./parts/Header');

var APP = React.createClass({

    getInitialState() {

        return {
            status : 'disconnected',
            title : '',
            
        }
    },

    componentWillMount() {

        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);

        this.socket.on('disconnect', this.disconnect);

        this.socket.on('welcome', this.welcome);
    },

    connect() {
        this.setState({status : 'connected'});
    },

    disconnect() {
        this.setState({status : 'disconnected'});
    },

    welcome(serverState) {
        this.setState({title: serverState.title});
    },

    render() {

        //var childrenWithProps = React.cloneElement(this.props.children, {title: this.state.title, status: this.state.status});
        var childrenWithProps = React.cloneElement(this.props.children, {...this.state});

        return (

            <div>
                <Header title={this.state.title} status = {this.state.status} />
                {childrenWithProps}

            </div>

        );
    }
});

module.exports = APP;