import React from "react";

// import { useSelector, useDispatch } from "react-redux";
// import {
//   handleEdit,
//   handleClear,
//   handleDelete,
//   handleSave,
//   handleUpdate,
//   updateExpert,
//   updateName,
//   updateMobileNumber,
// } from "../Utills/Slice/Slice";
import useEmployeeStore from "../Utills/Store/Store2";

const HeroSession = () => {
  const {
      EmployeeData,
      name,
      expert,
      MobileNumber,
      isUpdate,
      updateName,
      updateExpert,
      updateMobileNumber,
      handleSave,
      handleUpdate,
      handleDelete,
      handleEdit,
      handleClear,
    } = useEmployeeStore();

    const saveData = () => {
      if (isUpdate) {
        handleUpdate();
        alert("Updated successfully");
      } else {
        handleSave();
        alert("Saved successfully");
      }
    };
  // const dispatch = useDispatch();
  // const { EmployeeData, isUpdate, selectId, name, expert, MobileNumber } =
  //   useSelector((state) => state.Data);
  // const saveData = () => {
  //   const errors = [];
  // if (errors.length > 0) {
  //     errors.forEach((error) => alert.error(error));
  //     return;
  //   }

  //   if (isUpdate) {
  //     dispatch(handleUpdate({id: selectId, name, expert, MobileNumber}));
  //     alert("Updated");
  //   } else {
  //     dispatch(handleSave({ name, expert, MobileNumber }));
  //     alert("Saved successfully");
  //   }
  // };
  return (
    <>
      <div className="h-screen bg-blue-300">
        <div className="flex p-11 gap-x-9">
          <div>
            <label for="name">Name:</label>
            <input
              className="border focus-none"
              value={name}
              // onChange={(n) => dispatch(updateName(n.target.value))}
              onChange={(n) => updateName(n.target.value)}
              placeholder="Enter ur Name"
              type="text"
            />
          </div>
          <div>
            <label for="name">ExpertIn:</label>
            <input
              className="border focus-none"
              value={expert}
              // onChange={(n) => dispatch(updateExpert(n.target.value))}
              onChange={(n) => updateExpert(n.target.value)}
              placeholder="Enter ur Experties"
              type="text"
            />
          </div>
          <div>
            <label for="name">MobileNumber:</label>
            <input
              className="border focus-none"
              value={MobileNumber}
              onChange={(n) => updateMobileNumber(n.target.value)}
              placeholder="Enter ur MobileNumaber"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-center ml-[25rem] gap-x-9 items-center">
          <button
            onClick={saveData}
            className="border focus-none hover:bg-red hover:text-white "
          >
            {isUpdate ? "Update" : "Save"}
          </button>
          <button
            // onClick={() => dispatch(handleClear())}
            onClick={handleClear}
            className="border focus-none hover:bg-red hover:text-white "
          >
            clear
          </button>
        </div>
        <div className="flex list-none gap-x-22 px-11">
          <li>ID</li>
          <li>Name</li>
          <li className="ml-5">Expert In</li>
          <li className="ml-6 ">Mobile Number</li>
          <li>Actions</li>
        </div>
        <div>
          {EmployeeData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center list-none gap-22 px-11"
              >
                <li className="w-4">{item.id}</li>
                <li className="w-16">{item.name}</li>
                <li className="w-22">{item.expert}</li>
                <li className="w-24">{item.MobileNumber}</li>
                <div className="flex gap-x-4">
                  <button
                    className="border focus-none hover:bg-red hover:text-white "
                    // onClick={() => dispatch(handleEdit({ id: item.id }))}
                    onClick={() => handleEdit(item.id )}
                  >
                    Edit
                  </button>
                  <button
                    // onClick={() => dispatch(handleDelete({ id: item.id }))}
                    onClick={() => handleDelete(item.id )}
                    className="border focus-none hover:bg-red hover:text-white "
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSession;
