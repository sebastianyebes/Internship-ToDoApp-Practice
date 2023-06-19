import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../apis/task";

const initialState = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  try {
    const response = await getTasks();
    return response;
  } catch (error) {
    throw error;
  }
});

export const fetchTask = createAsyncThunk("tasks/fetchTask", async (id) => {
  try {
    const response = await getTask(id);
    return response;
  } catch (error) {
    throw error;
  }
});

export const AddTask = createAsyncThunk("tasks/createTask", async (data) => {
  try {
    const response = await createTask(data);
    return response;
  } catch (error) {
    throw error;
  }
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload;
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(AddTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      });
  },
});

export default taskSlice.reducer;
