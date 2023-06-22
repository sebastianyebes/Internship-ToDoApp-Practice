import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../api/task";

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

export const removeTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  try {
    const response = await deleteTask(id);
    return response;
  } catch (error) {
    throw error;
  }
});

export const putTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, data }) => {
    try {
      const response = await updateTask(id, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

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
        state.loading = false;
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(AddTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.loading = false;
        const deletedTaskId = action.payload.id;
        state.tasks = state.tasks.filter((task) => task.id !== deletedTaskId);
      })
      .addCase(removeTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(putTask.fulfilled, (state, action) => {
        state.loading = false;
        const updatedTask = action.payload;
        const existingTask = state.tasks.find(
          (task) => task.id === updatedTask.id
        );
        if (existingTask) {
          existingTask.todo = updatedTask.todo;
        }
      })
      .addCase(putTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(putTask.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
