import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let actions = this.props.actions.map(action => {
      return <Text style={{
        backgroundColor: 'red'}}>{action}</Text>;
    });
    return <View>{actions}</View>;
  }
}
