import React from "react";
import { StyleSheet, Dimensions, Button, View, Text } from "react-native";

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Text style={styles.title}>
        Manten presionado un punto en el mapa para crear un marcador
      </Text>
      <View style={styles.buttons}>
        <Button title={textLeft} onPress={onPressLeft} />
        <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#eee",
  },
  buttons: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
});
