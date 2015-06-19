var React = require('react');
var d3 = require('d3');
var md5 = require('blueimp-md5');

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    rating: React.PropTypes.oneOf(['g', 'pg', 'r', 'x']),
    default: React.PropTypes.oneOf(['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank']),
  },
  componentDidMount: function() {
    var el = this.getDOMNode();
    var size = this.props.size || 80;
    var email = this.props.email;
    var rating = this.props.rating || 'g';
    var defaultImg = this.props.default || 'mm';
    
    var params = [];
    params.push('r=' + rating);
    params.push('d=' + defaultImg);
    params.push('s=' + size);
    
    var url = "//www.gravatar.com/avatar/" + md5(email) + "?" + params.join('&');

    var radius = size / 2;
    
    var vis = d3.select(el)
      .append("svg")
        .attr("width", size)
        .attr("height", size)
        .append("g");

    vis.append("defs")
      .append("clipPath")
        .attr("id", "g-mug-clip")
        .append("circle")
          .attr("r", radius);

    var head = vis.append("g")
      .attr('class', 'head')
      .append("image")
        .attr("xlink:href", url)
        .attr("x", -1 * radius)
        .attr("y", -1 * radius)
        .attr("width", size)
        .attr("height", size)
        .attr("clip-path", "url(#g-mug-clip)")
        .attr("transform", "translate(" + radius + "," + radius + ")");
  },
  render: function() {
    return (<span/>);
  }
});

module.exports = Gravatar;