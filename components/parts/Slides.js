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
            <div id = "slides" className="row">
                <h2>Slides</h2>
                {this.props.slides.map(this.addSlide)}

            </div>
        )
    }
});

module.exports = Slides;
