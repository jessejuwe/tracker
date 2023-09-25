import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Image, TextInput, View } from "react-native";
import { Modal } from "react-native";

const GoalInput = ({ isOpen, onAddGoal, onCloseModal }) => {
  const [input, setInput] = useState("");

  const goalInputHandler = (enteredText) => setInput(enteredText);

  const addGoalHandler = () => {
    onAddGoal(input);
    setInput("");
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter a goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={input}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Close"
              color="#e92d46"
              accessibilityLabel="Close Modal"
              onPress={onCloseModal}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#c920c9"
              accessibilityLabel="Add Goal"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "30%",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 4,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#360936",
  },
  textInput: {
    width: "100%",
    padding: 15,
    fontSize: 15,
    color: "#222121",
    fontWeight: "normal",
    borderColor: "#dddddd",
    backgroundColor: "#dddddd",
    borderRadius: 8,
  },
});

export default GoalInput;
