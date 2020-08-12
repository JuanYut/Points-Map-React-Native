import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_point"); // new_point, all_points
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = {
      coordinate: pointTemp,
      name: name,
    };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const handleCancel = () => {
    setPointTemp({});
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  console.log(points);

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handleList}
        textLeft="Lista"
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <View style={styles.buttons}>
              <Button title="Aceptar" onPress={handleSubmit} />
              <Button title="Cancelar" onPress={handleCancel} />
            </View>
          </View>
        ) : (
          <List points={points} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    padding: 20,
    height: 150,
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
});
