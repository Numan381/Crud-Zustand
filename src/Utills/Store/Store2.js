import { create } from "zustand";


// Default Employee Data
const useEmployeestore = [
  { id: 1, name: "Nauman", expert: "Web", MobileNumber: "83294104302" },
  { id: 2, name: "Rao Rabi", expert: "Web API", MobileNumber: "03398234278" },
  { id: 3, name: "Gohar", expert: "Designer", MobileNumber: "9143012043" },
  { id: 4, name: "Ahmad", expert: "Manager", MobileNumber: "0432431334" },
];

// LocalStorage se data load karne ka function
const loadState = () => {
  const data = localStorage.getItem("EmployeeData");
  return data ? JSON.parse(data) : useEmployeestore; 
};

const useEmployeeStore = create((set) => ({
  EmployeeData: loadState(), 
  name: "",
  expert: "",
  MobileNumber: "",
  isUpdate: false,
  selectId: null,

  updateName: (name) => set({ name }),
  updateExpert: (expert) => set({ expert }),
  updateMobileNumber: (MobileNumber) => set({ MobileNumber }),

  handleSave: () =>
    set((state) => {
      const newEmployee = {
        id: state.EmployeeData.length + 1,
        name: state.name,
        expert: state.expert,
        MobileNumber: state.MobileNumber,
      };
      const updatedData = [...state.EmployeeData, newEmployee];

      localStorage.setItem("EmployeeData", JSON.stringify(updatedData)); 

      return {
        EmployeeData: updatedData,
        name: "",
        expert: "",
        MobileNumber: "",
      };
    }),

  handleEdit: (id) =>
    set((state) => {
      const selected = state.EmployeeData.find((emp) => emp.id === id);
      return {
        name: selected.name,
        expert: selected.expert,
        MobileNumber: selected.MobileNumber,
        isUpdate: true,
        selectId: id,
      };
    }),

  handleUpdate: () =>
    set((state) => {
      const updatedData = state.EmployeeData.map((emp) =>
        emp.id === state.selectId
          ? { ...emp, name: state.name, expert: state.expert, MobileNumber: state.MobileNumber }
          : emp
      );

      localStorage.setItem("EmployeeData", JSON.stringify(updatedData)); 

      return {
        EmployeeData: updatedData,
        name: "",
        expert: "",
        MobileNumber: "",
        isUpdate: false,
        selectId: null,
      };
    }),

  handleDelete: (id) =>
    set((state) => {
      const updatedData = state.EmployeeData.filter((emp) => emp.id !== id);

      localStorage.setItem("EmployeeData", JSON.stringify(updatedData)); 

      return { EmployeeData: updatedData };
    }),

  handleClear: () =>
    set({
      name: "",
      expert: "",
      MobileNumber: "",
      isUpdate: false,
      selectId: null,
    }),
}));

export default useEmployeeStore;
