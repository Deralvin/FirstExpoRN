import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalItem(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
    console.log("delete item");
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalItem}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    flex: 1,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
