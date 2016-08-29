var React = require('react');

var Display = require('./parts/Display');
var DisplaySlide =require('./parts/DisplaySlide');

var Join = require('./parts/Join');
var Ask =  require('./parts/Ask');

var Audience = React.createClass({

    render () {
        return(
            <div>

                <Display if={this.props.status === 'connected'}>


                    {/*to see whether we have member connected if connected no need to show th join form.*/}
                    <Display if={this.props.member.name}>

                        <div className="col-md-12 audiance">


                                <div className="row">
                                    <h2 className ="col-xs-12 col-md-12"> Welcome {this.props.member.name}</h2>
                                    <p className ="col-xs-12 col-md-12"> Members connected : {this.props.audience.length} </p>
                                </div>
                                <div className="line"></div>
                                <div className = "row">
                                    <div className="col-xs-12 col-md-6">

                                        <Display if={this.props.currentSlide}>
                                            <DisplaySlide slide={this.props.currentSlide} emit={this.props.emit} />
                                        </Display>


                                        <Display if={!this.props.currentSlide}>
                                            <div id = "clientslide">
                                                <div id="clienrslideheader">
                                                    <h3> Title </h3>
                                                </div>
                                                <div className="line"></div>
                                                <div id = "bullets">

                                                </div>
                                            </div>
                                        </Display>

                                    </div>

                                    <div className="col-xs-12 col-md-offset-1 col-md-5">

                                        <Display if={this.props.currentQuestion}>
                                            <Ask question={this.props.currentQuestion} emit={this.props.emit}/>
                                        </Display>

                                        <Display if={!this.props.currentQuestion}>

                                            <div id = "clientquestion">
                                                <div id = "clientquestionheader">
                                                    <h3> Questions </h3>
                                                </div>
                                                <div className="line"></div>
                                                <div id = "choices">

                                                </div>
                                            </div>
                                        </Display>
                                    </div>
                                </div>


                        </div>

                    </Display>

                    <Display if={!this.props.member.name}>

                        <div className="col-md-12 audiance">
                            <h2> Join the Presentation </h2>
                            <div className="line"></div>
                            <Join emit={this.props.emit} />
                        </div>
                    </Display>


                </Display>

            </div>
        );
    }
});

module.exports = Audience;