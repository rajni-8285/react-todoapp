import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function HomeScreen() {


  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<string[]>([]);

  const [isEditing, setIsEditing] = useState(false);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  
  const addTask = () => {

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);

    setTask("");
  };

  // DELETE TASK
  const deleteTask = (indexToDelete: number) => {

    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  // UPDATE TASK
  const updateTask = () => {

    if (task.trim() === "") {
      return;
    }

    const updatedTasks = [...tasks];

    updatedTasks[editIndex!] = task;

    setTasks(updatedTasks);

    setTask("");

    setEditIndex(null);

    setIsEditing(false);
  };

  return (

    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>
        Todo CRUD App
      </Text>

      {/* INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />

      {/* ADD / UPDATE BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={isEditing ? updateTask : addTask}
      >

        <Text style={styles.buttonText}>
          {isEditing ? "Update Task" : "Add Task"}
        </Text>

      </TouchableOpacity>

      {/* TASK LIST */}
      <FlatList
        data={tasks}

        keyExtractor={(_, index) => index.toString()}

        renderItem={({ item, index }) => (

          <View style={styles.taskContainer}>

            {/* TASK TEXT */}
            <Text style={styles.taskText}>
              {item}
            </Text>

            <View style={styles.actionButtons}>

              {/* EDIT BUTTON */}
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {

                  setTask(item);

                  setEditIndex(index);

                  setIsEditing(true);
                }}
              >

                <Text style={styles.actionText}>
                  Edit
                </Text>

              </TouchableOpacity>

              {/* DELETE BUTTON */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(index)}
              >

                <Text style={styles.actionText}>
                  Delete
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "black",
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 15,
    color: "black",
  },

  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  taskContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  taskText: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },

  actionButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  editButton: {
    backgroundColor: "blue",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  actionText: {
    color: "white",
    fontWeight: "bold",
  },

});

