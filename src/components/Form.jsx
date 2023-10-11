import react from "react";
import { useState } from "react";

const Form = ({ setTasklist }) => {
  const [taskInfo, setTaskInfo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      description: taskInfo,
    };
    setTasklist((prevTaskList) => {
      return [...prevTaskList, newTask];
    });
  };

  return (
    <div className="container w-1/2 p-10 mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
      >
        <div className="">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            type="text"
          >
            Agregar una tarea
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            value={taskInfo}
            onChange={(e) => setTaskInfo(e.target.value)}
          />
          <button
            className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
            type="submit"
          >
            {" "}
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
