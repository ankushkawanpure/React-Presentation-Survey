var React = require('react');

var Slides = React.createClass( {

    addSlide(slide, index) {

        return (
            <div key={index} className="col-xs-12 col-sm-6 col-lg-3">
                <span onClick={this.display.bind(null, slide)}>{slide.t}</span>
            </div>
        );
    },

    display(slide) {
        this.props.emit('display', slide);
        
    },


    render() {
        return (
            <div id = "slides" className="col-xs-12 col-md-12">
                <h2>Slides</h2>
                <div className="line"></div>
                <div className="row">
                    {this.props.slides.map(this.addSlide)}
                </div>
            </div>
        )
    }
});

module.exports = Slides;
