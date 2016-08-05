/**
 * Created by Ankush on 7/31/16.
 */
var React = require('react');

var Questions = React.createClass({

    addquestion(question, index) {

        return (
            <div key={index} className="col-xs-12 col-sm-6 col-lg-3">
                <span onClick={this.ask.bind(null, question)}>{question.q}</span>
            </div>
        );
    },

    ask(question) {
        this.props.emit('ask', question);
    },

    render() {
        return (
            <div id = "questions" className="row">
                <h2>Question</h2>
                {this.props.questions.map(this.addquestion)}

            </div>
        );
    }

});

module.exports = Questions;