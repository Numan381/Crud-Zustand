import { create } from "zustand";

const useEmployeeStore = create((set) => ({
  EmployeeData: [
    { id: 1, name: "Nauman", expert: "Web", MobileNumber: "83294104302" },
    { id: 2, name: "Rao Rabi", expert: "Web API", MobileNumber: "03398234278" },
    { id: 3, name: "Gohar", expert: "Designer", MobileNumber: "9143012043" },
    { id: 4, name: "Ahmad", expert: "Manager", MobileNumber: "0432431334" },
  ],
  name: "",
  expert: "",
  MobileNumber: "",
  isUpdate: false,
  selectId: null,

  updateName: (name) => set({ name }),
  updateExpert: (expert) => set({ expert }),
  updateMobileNumber: (MobileNumber) => set({ MobileNumber }),

  handleSave: () => set((state) => ({
      EmployeeData: [
        ...state.EmployeeData,
        {
          id: state.EmployeeData.length + 1,
          name: state.name,
          expert: state.expert,
          MobileNumber: state.MobileNumber,
        },
      ],
      name: "",
      expert: "",
      MobileNumber: "",
    })),

  handleEdit: (id) => set((state) => {
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
    set((state) => ({
      EmployeeData: state.EmployeeData.map((emp) =>
        emp.id === state.selectId
          ? { ...emp, name: state.name, expert: state.expert, MobileNumber: state.MobileNumber }
          : emp
      ),
      name: "",
      expert: "",
      MobileNumber: "",
      isUpdate: false,
      selectId: null,
    })),

  handleDelete: (id) =>
    set((state) => ({
      EmployeeData: state.EmployeeData.filter((emp) => emp.id !== id),
    })),

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
