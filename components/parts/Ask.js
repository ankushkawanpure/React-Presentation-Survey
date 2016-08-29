var React = require('react');
var Display = require('./Display');

var Ask = React.createClass({

    getInitialState() {
        return {
            choices: [],
            answer : undefined
        }
    },

    componentWillMount() {
        this.setUpChoices();
    },

    componentWillReceiveProps() {
        this.setUpChoices();
    },

    setUpChoices() {
        var choices = Object.keys(this.props.question);
        {/*THis create array of question with question and bulletpoints we dont need the question so shift */}
        choices.shift();
        this.setState({
            choices : choices,
            answer: sessionStorage.answer
        });
    },

    select(choice) {
        this.setState({answer: choice});
        sessionStorage.answer = choice;
        this.props.emit('answer', {
            question : this.props.question,
            choice : choice
        });
    },

    addChoiceButton(choice, i ) {
        return (
            <button key={i}
                    className="col-xs-12 col-sm-12 btn btn-primary"
                    onClick = {this.select.bind(null, choice)}>
                {choice} : {this.props.question[choice]}

            </button>
        );
    },

    render() {
        return (
            <div>
                <div id = "clientquestion">
                    <div id = "clientquestionheader">
                        <h3> {this.props.question.q} </h3>
                    </div>

                    <div className="line"></div>
                    <div id = "choices">
                        {this.state.choices.map(this.addChoiceButton)}
                    </div>

                </div>
                <Display if={this.state.answer}>
                    <div id="answer">
                        <h3> You answered : {this.state.answer} </h3>
                        <p> {this.props.question[this.state.answer]}</p>
                    </div>
                </Display>
            </div>
        );
    }
});

module.exports = Ask;