import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Card = ({ height, width, children, onPress = () => {}, active}) => {
  const cardStyle = {
    height,
    width,
  };

  return (
    <TouchableOpacity style={[styles.card, cardStyle]} onPress={onPress} disabled={active}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 15,
    padding: 12,
    borderRadius: 5,
    elevation: 5
  },
});

export default Card;