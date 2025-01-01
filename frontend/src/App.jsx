import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Todo App
        </h1>

        {/* Input box for adding new tasks */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            placeholder="Add a new task"
          />
        </div>

        {/* Todo List */}
        <ul className="space-y-4">
          {/* Todo item 1 */}
          <li className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
            <span className="text-lg text-gray-800">Finish homework</span>
            <div className="space-x-3">
              <button className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700 transition-colors duration-300">
                Delete
              </button>
            </div>
          </li>

          {/* Todo item 2 */}
          <li className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
            <span className="text-lg text-gray-800">Buy groceries</span>
            <div className="space-x-3">
              <button className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700 transition-colors duration-300">
                Delete
              </button>
            </div>
          </li>

          {/* Todo item 3 */}
          <li className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
            <span className="text-lg text-gray-800">Walk the dog</span>
            <div className="space-x-3">
              <button className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700 transition-colors duration-300">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
