/**
 * Created by Ankush on 7/31/16.
 */

var React = require('react');

var JoinSpeaker = React.createClass({

    start() {
        var speakerName = this.refs.name.value;
        var title = this.refs.title.value;

        this.props.emit('start', {name: speakerName, title: title});
    },

    
    render () {
        return (
            <form action="javascript:void(0)" onSubmit = {this.start}>
                <label>Name </label>
                <input ref = "name" className="form-control" placeholder="Enter your name..." required />


                <label> Presentation Title </label>
                <input ref = "title" className="form-control" placeholder="Enter Title..." required />
                <button className="btn btn-primary"> Join </button>

            </form>
        );
    }
});

module.exports = JoinSpeaker;