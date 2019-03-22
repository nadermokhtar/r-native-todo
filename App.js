import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";
import Actions from "./Javascript/containers/Actions";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: ["Stealing pegasus shoes", "action2", "action3"],
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
        <ScrollView style={{}}>
          <View style={{ height: 100 }} />
          <Text style={{ flex: 2, backgroundColor: "powderblue" }}>
            Steal Thunder from the Gods
          </Text>
          <Actions
            style={{ flex: 3, backgroundColor: "skyblue" }}
            actions={this.state.actions}
          />
        </ScrollView>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button style={{ flex: 5 }} title="add" onPress={this.addNewAction} />
        <Button style={{ flex: 5 }} title="delete all" onPress={this.delete} />
      </View>
    );
  }
}
