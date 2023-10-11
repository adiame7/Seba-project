import React from "react";
import Form from "react";
import { useState } from "react";

const Tasklist = ({ tasks }) => {
  return (
    <div className="w-1/2 h-screen lg:w-3/5">
      <h3 className="mx-3 mt-5 text-3xl font-black text-center"> Tareas</h3>
    </div>
  );
};

const List = ({ tasks }) => {
  return (
    <div flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md></div>
  );
};

export default List;
