import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import Actions from "./Javascript/containers/Actions";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        "Stealing pegasus shoes",
        "Stealing prometheus fire",
        "Stealing pandoras box"
      ],
      text: "Plan the Future"
    };
    this.addNewAction = this.addNewAction.bind(this);
    this.delete = this.delete.bind(this);
  }

  addNewAction(event) {
    event.preventDefault();
    this.setState({
      actions: this.state.actions.concat(this.state.text),
      text: "Now add another one"
    });
  }
  delete(event) {
    event.preventDefault();
    this.setState({
      actions: []
    });
  }

  render() {
    return (
      <View style={{ height: 400 }}>
        <ScrollView style={styles.container}>
          <View style={{ height: 30 }} />
          <Text style={styles.sectionHeader}>
            <Image
              style={{ height: 30, width: 30, border: 10 }}
              source={require("./assets/lightning_PNG35.png")}
            />
            Steal Thunder from the Gods
          </Text>
          <Actions
            actions={this.state.actions}
          />
        </ScrollView>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button style={{ flex: 1 }} title="another plan" onPress={this.addNewAction} />
        <Button style={{ flex: 1 }} title="remove the evidence" onPress={this.delete} />
      </View>
    );
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
    height: 44
  }
});
