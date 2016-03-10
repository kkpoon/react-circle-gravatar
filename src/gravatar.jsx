var React = require('react');
var md5 = require('blueimp-md5');

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    rating: React.PropTypes.oneOf(['g', 'pg', 'r', 'x']),
    default: React.PropTypes.oneOf(
      ['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank']
    ),
  },
  render: function() {
    var size = this.props.size || 80;
    var email = this.props.email;
    var rating = this.props.rating || 'g';
    var defaultImg = this.props.default || 'mm';

    var params = [];
    params.push('r=' + rating);
    params.push('d=' + defaultImg);
    params.push('s=' + size);
    var url = "//www.gravatar.com/avatar/" + md5(email) +
      "?" + params.join('&');
    var radius = size / 2;
    var translate = "translate(" + radius + "," + radius + ")";
    return (
      <img src={url} style={{width: size, height: size, borderRadius: "50%"}} />
    );
  }
});

module.exports = Gravatar;
