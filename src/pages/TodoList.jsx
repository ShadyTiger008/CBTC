import React, { useEffect, useState } from "react";
import { AddButton, DarkMode, LightMode, SearchIcon, SunIcon, DeleteButton, EditButton } from "../Icons";


const getLocalData = () => {
  const lists = localStorage.getItem("task_data");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const getThemeData = () => {
  const applicableTheme = localStorage.getItem("PageTheme");
  if (applicableTheme) {
    return applicableTheme;
  } else {
    return "light";
  }
};

function App() {
  const [inputData, setInputData] = useState("");
  const [listItems, setListItems] = useState(getLocalData());
  const [formattedDate, setFormattedDate] = useState("");
  const [isEdited, setIsEdited] = useState(null);
  const [toggleButton, setToggleButton] = useState(false);
  const [theme, setTheme] = useState(getThemeData());
  const [searchInput, setSearchInput] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("PageTheme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      var today = new Date();
      const day = today.toLocaleString("en-US", { weekday: "long" });
      const month = today.toLocaleString("en-US", { month: "long" });
      const date = today.getDate();

      const formattedDateString = `${day}, ${month} ${date}`;
      setFormattedDate(formattedDateString);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem("task_data", JSON.stringify(listItems));
  }, [listItems]);

  const addItem = () => {
    if (!inputData) {
      alert("Please enter a task");
    } else if (inputData && toggleButton) {
      setListItems((prevItems) =>
        prevItems.map((curElem) =>
          curElem.id === isEdited ? { ...curElem, title: inputData } : curElem
        )
      );
      setInputData("");
      setIsEdited(null);
      setToggleButton(false);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        title: inputData,
      };
      setListItems((prevItems) => [...prevItems, newData]);
      setInputData("");
      setToggleButton(false);
    }
  };

  const deleteItem = (index) => {
    setListItems((prevItems) =>
      prevItems.filter((curElem) => curElem.id !== index)
    );
  };

  const editItem = (index) => {
    const editableItem = listItems.find((curElem) => curElem.id === index);
    setIsEdited(index);
    setInputData(editableItem.title);
    setToggleButton(true);
  };

  const removeAll = () => {
    setListItems([]);
  };

  const searchByname = () => {
    if (!searchInput) {
      setSearchItems([]); // Reset searchItems when the search input is empty
    } else {
      const filteredData = listItems.filter((curElem) => {
        return curElem.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchItems(filteredData);
    }
  };

  return (
    <>
      <main
        className={`px-5 ${
          theme === "dark" ? "dark" : ""
        } min-h-screen h-full ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
<nav className="flex flex-col sm:flex-row py-5 items-center justify-center">
      <h1
        className={`grow font-Borel font-bold text-3xl py-2 sm:py-0 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        To Do List
      </h1>
      <div className="flex flex-row">
        <div
          className={`flex flex-row border-2 items-center px-3 py-2 rounded-md ${
            theme === "dark"
              ? "border-white bg-slate-600 text-white"
              : "border-black bg-gray-100 text-black"
          }`}
        >
          <input
            type="text"
            placeholder="Search ....."
            className={`outline-none flex-grow px-3 ${
              theme === "dark"
                ? "border-white bg-slate-600 text-white"
                : "border-black bg-gray-100 text-black"
            }`}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button onClick={searchByname}>
            <SearchIcon fill={theme === "dark" ? "white" : "black"} />
          </button>
        </div>

        <button
          onClick={handleThemeSwitch}
          className={`text-white mx-5 sm:mx-2 hover:scale-90 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          } px-4 py-2 rounded-md`}
        >
          {theme === "dark" ? <LightMode /> : <DarkMode />}
        </button>
      </div>
    </nav>
        {/* Date and Time  */}
        <section
      className={`flex flex-col ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-row">
        {theme === "dark" ? <SunIcon fill="white" /> : <SunIcon fill="black" />}
        <h1 className="px-3 flex items-center font-semibold text-xl">My Day</h1>
      </div>
      <div className="flex flex-row">
        <div className="grow font-semibold text-lg text-gray-600">
          {formattedDate}
        </div>
        <div>
          <button
            onClick={removeAll}
            className="bg-red-600 text-white px-4 py-2 rounded-md mb-3 hover:scale-90"
          >
            Remove All
          </button>
        </div>
      </div>
    </section>
        {/* <TodoList/> */}
        {/* input section  */}
        <section
      className={`flex flex-row border-2 rounded-xl dark:bg-slate-600 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <button
        onClick={addItem}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-95`}
      >
        <AddButton fill={theme === "dark" ? "white" : "black"} />
      </button>
      <input
        type="text"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        placeholder="Add a Task"
        className={`outline-none w-full px-3 rounded-xl ${
          theme === "dark" ? "bg-slate-600" : "bg-gray-100"
        } ${theme === "dark" ? "text-white" : "text-black"} `}
      />
    </section>
        {/* Todo display section  */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5 pb-20">
      {searchInput ? (
        // Render the searched items when searchInput is not empty
        searchItems.length > 0 ? (
          searchItems.map((curElem) => {
            const { id, title } = curElem;
            return (
              <div
                key={id}
                className={`border-2 p-5 w-full sm:w-96 rounded-xl shadow-xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <div className="flex flex-row">
                  <h1 className="grow">{title}</h1>
                  <div className="flex flex-col space-y-5">
                    <button
                      onClick={() => {
                        deleteItem(id);
                      }}
                      className="bg-red-600 text-white px-2 py-1 rounded-md hover:scale-90"
                    >
                      <DeleteButton
                        fill={theme === "dark" ? "white" : "black"}
                      />
                    </button>
                    <button
                      onClick={() => {
                        editItem(id);
                      }}
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:scale-90"
                    >
                      <EditButton fill={theme === "dark" ? "white" : "black"} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center col-span-6 font-semibold text-xl items-center">
            There are no items with this name found!
          </div>
        )
      ) : (
        // Render all data from local storage when searchInput is empty
        listItems.map((curElem) => {
          const { id, title } = curElem;
          return (
            <div
              key={id}
              className={`border-2 p-5 w-full sm:w-96 rounded-xl shadow-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <div className="flex flex-row">
                <h1 className="grow">{title}</h1>
                <div className="flex flex-col space-y-5">
                  <button
                    onClick={() => {
                      deleteItem(id);
                    }}
                    className="bg-red-600 text-white px-2 py-1 rounded-md hover:scale-90"
                  >
                    <DeleteButton fill={theme === "dark" ? "white" : "black"} />
                  </button>
                  <button
                    onClick={() => {
                      editItem(id);
                    }}
                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:scale-90"
                  >
                    <EditButton fill={theme === "dark" ? "white" : "black"} />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </section>
    {/* Footer Component */}
    <footer className="fixed bottom-0 left-0 w-full dark:bg-gray-800 dark:text-white text-center">
      <p className="bg-white py-2 dark:bg-gray-800 dark:text-white">
        &copy; {new Date().getFullYear()} Shady Coder. All rights reserved.
      </p>
    </footer>
      </main>
    </>
  );
}

export default App;
