import React, { useState } from 'react';
import './App.css';

function App() {

  const [person, setPerson] = useState({name: "", age: 0});

  function nameHandler(e) {
    let insertedName = e.target.value;
    let newName = insertedName.charAt(0).toUpperCase() + insertedName.slice(1);

    setPerson(() => {
      return {
        name: newName,
        age: person.age
      }
    });
  }

  function ageHandler(e) {
    let newAge = e.target.value;
    setPerson(() => {
      return {
        name: person.name,
        age: newAge
      }
    });
  }

  return (
    <div className="App">
      <form>
        <div>
          <label>Name: </label>
          <input type="text" value={person.name} onChange={nameHandler} />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" min="0" max="125" value={person.age} onChange={ageHandler}/>
        </div>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}

export default App;
