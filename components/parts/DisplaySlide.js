var React = require('react');
var Display = require('./Display');

var DisplaySlide = React.createClass({

    getInitialState() {
        return {
            bulletpoints: [],
        }
    },

    componentWillMount() {
        this.setUpChoices();
    },

    componentWillReceiveProps() {
        this.setUpChoices();
    },

    setUpChoices() {
        var bulletpoints = Object.keys(this.props.slide);
        {/*THis create array of question with title and bulletpoints we dont need the question so shift */}
        bulletpoints.shift();
        this.setState({
            bulletpoints : bulletpoints,
        });
    },


    addChoiceButton(choice, i ) {
        return (
            <li keys={i}
                    className="col-xs-12 col-sm-12">
                        {this.props.slide[choice]}
            </li>
        );
    },

    render() {
        return (

        <div id = "clientslide">
            <div id="clienrslideheader">
                <h3> {this.props.slide.t} </h3>
            </div>
            <div id = "bullets">
                <ul>
                    {this.state.bulletpoints.map(this.addChoiceButton)}
                </ul>
            </div>
        </div>

        );
    }
});

module.exports = DisplaySlide;