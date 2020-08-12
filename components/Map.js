import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress, points, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {pointsFilter &&
        points.map((point) => (
          <Marker
            key={point.name}
            coordinate={point.coordinate}
            title={point.name}
          />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});
