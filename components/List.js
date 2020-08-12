import React from "react";
import {
  StyleSheet,
  Button,
  Dimensions,
  FlatList,
  Text,
  View,
} from "react-native";

export default ({ points, closeModal }) => {
  console.log(points.length);
  return (
    <>
      <View style={styles.list}>
        {points.length < 1 ? (
          <Text>No hay puntos marcados...</Text>
        ) : (
          <FlatList
            data={points.map((point) => point.name)}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          ></FlatList>
        )}
      </View>

      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal}></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15,
  },
  button: {
    paddingBottom: 15,
    paddingLeft: 55,
    paddingRight: 55,
  },
});
