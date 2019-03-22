import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let actions = this.props.actions.map(action => {
      return <Text style={styles.item}>{action}</Text>;
    });
    return <View>{actions}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
    borderColor: "gray",
    borderWidth: 1
  }
});
