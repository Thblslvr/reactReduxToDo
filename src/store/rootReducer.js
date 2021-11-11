import { ADD, DELETE, SAVE, EDIT } from "./actions";

export const initialState = {
  tasks: [
    { task: "React", id: 0, taskInEditing: false },
    { task: "Redux", id: 1, taskInEditing: false }
  ]
};

export function rootReducer(state, action) {
  const [...destructorOfState] = state.tasks;
  let stateCopy = destructorOfState.slice();
  switch (action.type) {
    case ADD:
      stateCopy.push({
        task: action.newTask,
        id: action.id,
        taskInEditing: false
      });
      return { tasks: stateCopy };

    case SAVE:
      stateCopy[stateCopy.findIndex((x) => x.id === action.id)] = {
        task: action.saved,
        id: action.id,
        taskInEditing: action.isEdit
      };
      return { tasks: stateCopy };

    case EDIT:
      stateCopy[stateCopy.findIndex((x) => x.id === action.id)].taskInEditing =
        action.taskInEditing;
      return { tasks: stateCopy };

    case DELETE:
      stateCopy.forEach((element, i) => {
        return (element.id = i);
      });
      if (stateCopy.length > 1)
        stateCopy.splice(
          stateCopy.findIndex((x) => x.id === action.position),
          1
        );
      stateCopy.forEach((el, i) => {
        el.id = i;
      });
      return { tasks: stateCopy };

    default:
      return state;
  }
}
