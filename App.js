import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addGoalHandler = (input) => {
    const data = { id: Math.random().toString() + input, title: input };

    setGoals((prevState) => [...prevState, data]);
    setIsOpen(false);
  };

  const deleteGoalHandler = (id) => {
    const updatedGoals = goals.filter((item) => item.id !== id);

    setGoals(updatedGoals);
  };

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.appContainer}>
        <Image
          source={require("./assets/images/goal.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Progress Tracker</Text>
        <Text style={styles.body}>Keep track of all your progress!</Text>

        <Button
          title="Create Goal"
          color="#c920c9"
          accessibilityLabel="Create a Goal"
          onPress={openModalHandler}
        />

        {/* prettier-ignore */}
        <GoalInput onAddGoal={addGoalHandler} isOpen={isOpen} onCloseModal={closeModalHandler} />

        <GoalItem goals={goals} onDeleteGoal={deleteGoalHandler} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 15,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#360936" || "#7c6d6d",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },
  body: {
    fontSize: 15,
    color: "white",
    fontWeight: "normal",
    padding: 6,
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 4,
    borderColor: "white",
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 4,
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "normal",
    letterSpacing: 2,
    padding: 4,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
