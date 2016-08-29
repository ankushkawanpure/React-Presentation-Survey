var React = require('react');

var Display =require('./parts/Display');
var JoinSpeaker = require('./parts/JoinSpeaker');
var Attendance = require('./parts/Attendance');
var Questions =require('./parts/Questions');
var Slides = require('./parts/Slides');


var Speaker = React.createClass({

    render () {
        return(
           <div className="row" id ="speakerpanal">

               <Display if={this.props.status === 'connected'}>

                    <Display if={this.props.member.name && this.props.member.type === 'speaker'}>

                        <Questions questions={this.props.questions} emit={this.props.emit}/>
                        <Slides slides = {this.props.slides} emit={this.props.emit}/>
                        <Attendance audience = {this.props.audience} />

                    </Display>

                    <Display if={!this.props.member.name}>

                        <div className="col-md-12 audiance">
                            <h2> Start the presentation</h2>
                            <div className="line"></div>
                            <JoinSpeaker emit={this.props.emit} />
                        </div>
                    </Display>
                </Display>
           </div>

        );
    }
});

module.exports = Speaker;