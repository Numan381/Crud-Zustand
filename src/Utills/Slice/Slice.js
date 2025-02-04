import { createSlice } from "@reduxjs/toolkit";
import { EmployeeData } from "../EmployeeData/Employee";

const Slice = createSlice({
  name: "Data",
  initialState: {
    EmployeeData: EmployeeData,
    isUpdate: false,
    selectId: 0,
    name: "",
    expert: "",
    MobileNumber: "",
  },
  reducers: {
    setEmployeeData: (state, action) => {
      state.EmployeeData = action.payload;
    },
    handleEdit: (state, action) => {
      const { id } = action.payload;
      const c = state.EmployeeData.find((item) => item.id === id);
      if (c) {
        state.selectId = id;
        state.name = c.name;
        state.expert = c.expert;
        state.MobileNumber = c.MobileNumber;
        state.isUpdate = true;
      }
    },
    handleClear: (state) => {
      state.isUpdate = false;
      state.selectId = 0;
      state.name = " ";
      state.expert = " ";
      state.MobileNumber = " ";
    },
    handleSave: (state, action) => {
      const { name, expert, MobileNumber } = action.payload;
      const newobj = {
        id: state.EmployeeData.length + 1,
        name,
        expert,
        MobileNumber,
      };
      state.EmployeeData.push(newobj);
    },
    handleUpdate: (state, action) => {
      const {id, name, expert, MobileNumber } = action.payload;
      const index = state.EmployeeData.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.EmployeeData[index] = { id, name, expert, MobileNumber };
      }
      state.isUpdate = false;
      state.selectId = 0;
      state.name = " ";
      state.expert = "";
      state.MobileNumber = "";
      console.log("updating...")
    },
    handleDelete: (state, action) => {
      const { id } = action.payload;
      state.EmployeeData = state.EmployeeData.filter(
        (item) => item.id !== id
      );
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateExpert: (state, action) => {
      state.expert = action.payload;
    },
    updateMobileNumber: (state, action) => {
      state.MobileNumber = action.payload;
    },
  },
});
export const {
  setEmployeeData,
  handleClear,
  handleDelete,
  handleEdit,
  handleSave,
  handleUpdate,
  updateExpert,
  updateMobileNumber,
  updateName,
} = Slice.actions;

export default Slice.reducer;
