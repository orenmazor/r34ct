/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

var Magic8Ball = React.createClass({
  getInitialState: function() {
                         return {fortune: "Brain the size of a planet"};
                           },

  _onPressButton: function() {
                     var balls = Array("It is certain","It is decidedly so","Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful")
                     var fortune = balls[Math.floor(Math.random()*balls.length)];
                     this.setState({fortune: fortune})
                  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="#F5FCFF">
          <Text style={styles.welcome}>
            {this.state.fortune}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('Magic8Ball', () => Magic8Ball);
