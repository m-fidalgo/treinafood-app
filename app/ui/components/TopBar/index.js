import React from "react";
import { Appbar } from "react-native-paper";

export default function TopBar(props) {
  return (
    <Appbar.Header>
      {props.back ? <Appbar.BackAction onPress={props.onPress} /> : null}
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
}
