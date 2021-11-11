import { ADD, DELETE, SAVE, EDIT } from "./actions";
const addNewTask = (newTask, id) => {
  //actioncreator (возращает action)
  return {
    type: ADD,
    newTask: newTask,
    id: id
  };
};

export const removeTask = (indexToDelete) => {
  return { type: DELETE, position: indexToDelete };
};

export const saveUpdatedTask = (saved, id, isEdit) => {
  return {
    type: SAVE,
    saved: saved,
    id: id,
    isEdit: isEdit
  };
};

export const toEdit = (id) => {
  return {
    type: EDIT,
    id:id,
    taskInEditing: true
  };
};



export default addNewTask;
