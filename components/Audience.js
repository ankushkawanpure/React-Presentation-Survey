var React = require('react');

var Display = require('./parts/Display');
var Join = require('./parts/Join');

var Audience = React.createClass({

    render () {
        return(
            <div>
                <Display if={this.props.status === 'connected'}>

                    {/*to see whether we have member connected if connected no need to show th join form.*/}
                    <Display if={this.props.member.name}>
                        <h2>Welcome {this.props.member.name}</h2>

                        {/*Displaying the count of current audience */}
                        <p> {this.props.audience.length} Members connected </p>
                        <p> Question will appere here </p>
                    </Display>

                    <Display if={!this.props.member.name}>
                        <h1> Join the session </h1>
                        <Join emit={this.props.emit} />

                    </Display>


                </Display>

            </div>
        );
    }
});

module.exports = Audience;