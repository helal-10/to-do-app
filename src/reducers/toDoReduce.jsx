import { v4 as uuidv4 } from "uuid";
export default function toDoReduce(currentState, action) {
  switch (action.type) {
    case "add": {
      const newTodo = {
        title: action.payload.taskValue,
        id: uuidv4(),
        time: action.payload.time,
        date: action.payload.date,
        isCompleted: false,
      };

      const updatedTaskTitles = [...currentState, newTodo];
      localStorage.setItem("t", JSON.stringify(updatedTaskTitles));
      return updatedTaskTitles;
    }
    case "confirmDelete": {
      localStorage.setItem("t", JSON.stringify(action.payload.updatedTasks));
      return action.payload.updatedTasks;
    }
    case "edit": {
      const updatedTasks = currentState.map((t) => {
        if (t.id == action.payload.id) {
          return {
            ...t,
            title: action.payload.editValues.newTitle,
            time: action.payload.editValues.newTime,
            date: action.payload.editValues.newDate,
          };
        }
        return t;
      });

      console.log(updatedTasks);

      localStorage.setItem("t", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "done": {
      const updatedTasks = currentState.map((t) => {
        if (t.id == action.payload.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      });
      localStorage.setItem("t", JSON.stringify(updatedTasks));
      return updatedTasks;
    }

    default: {
      throw Error("Unkown Action");
    }
  }
}
