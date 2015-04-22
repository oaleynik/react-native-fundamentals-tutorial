var React = require("react-native");

var {
  View,
  WebView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F6F6EF"
  }
});

class Web extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    )
  }
};

Web.propTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = Web;