var Gravatar = React.createClass({
  componentDidMount: function() {
    var el = this.getDOMNode();
    var radius = this.props.radius;
    var email = this.props.email;
    var url = "//www.gravatar.com/avatar/" + md5(email);

    var vis = d3.select(el)
      .append("svg")
        .attr("width", radius * 2)
        .attr("height", radius * 2)
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
        .attr("width", radius * 2)
        .attr("height", radius * 2)
        .attr("clip-path", "url(#g-mug-clip)")
        .attr("transform", "translate(" + radius + "," + radius + ")");
  },
  render: function() {
    return (
      <div class="Gravatar"></div>
    );
  }
});
