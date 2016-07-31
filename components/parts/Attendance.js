/**
 * Created by Ankush on 7/31/16.
 */
var React = require('react');

var Attendance = React.createClass({

    addMemberRow (member ,i) {

        return (
            <tr key ={i}>
                <td>{member.name}</td>
                <td>{member.id}</td>
            </tr>
        );
    },

    render() {
        return (
            <div>
                <h2> Attendance - {this.props.audience.length} Members </h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th> Audience Member </th>
                                <th> Socket ID </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.audience.map(this.addMemberRow)}
                        </tbody>
                    </table>
            </div>

        )
    }

});

module.exports = Attendance;