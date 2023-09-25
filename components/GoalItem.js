import React from "react";
import { FlatList, Text, View } from "react-native";
import { Pressable, StyleSheet } from "react-native";

const GoalItem = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.goalContainer}>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Pressable
              android_ripple={{ color: "#4d0c4d" }}
              onLongPress={onDeleteGoal.bind(this, item.id)}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Text style={styles.goalItemText}>{item.title}</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    width: "95%",
    flex: 5,
    gap: 6,
    justifyContent: "flex-start",
  },
  goalItem: {
    marginVertical: 8,
    backgroundColor: "#c920c9",
    borderCurve: "circular",
    borderRadius: 6,
  },
  goalItemText: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
  pressed: {
    backgroundColor: "#4d0c4d",
    borderCurve: "circular",
    borderRadius: 6,
    opacity: 0.5,
  },
});

export default GoalItem;
