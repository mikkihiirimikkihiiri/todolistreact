import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodo from './AddTodo';
import "./App.css";


//import 'ag-grid-community/dist/styles/ag-grid.css';
//import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://bookstore-9cf02-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }

  // Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setTodos(valueKeys);
  }

  const addTodo = (newTodo) => {
     fetch('https://bookstore-9cf02-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
    {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap> 
            TodoList
          </Typography>
        </Toolbar>
      </AppBar> 
      <AddTodo addTodo={addTodo} /> 
      
      <div className="ag-theme-material" style={ { height: 400, width: 700, margin: 'auto',textAlign:'center' } }>
        <AgGridReact 
        rowData={todos}
        columnDefs={[
            { field: "Tittle"
           , sortable:true, filter:true, },
            { field: "Author",  sortable:true,filter:true },
            { field: "Year",  sortable:true, filter:true },
            { field: "Isbn",  sortable:true, filter:true },
            { field: "Price",  sortable:true, filter:true },
          ]}  > 
        
          
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;