var React = require('react');
var d3 = require('d3');
var md5 = require('blueimp-md5');

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    size: React.PropTypes.number
  },
  componentDidMount: function() {
    var el = this.getDOMNode();
    var size = this.props.size || 80;
    var email = this.props.email;
    var radius = size / 2;
    var url = "//www.gravatar.com/avatar/" + md5(email) + "?d=mm&s=" + size;

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
    return (<div/>);
  }
});

module.exports = Gravatar;