import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: "id", headerName: "Id" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width:600},
];
function App() {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((result) => {
        setDataTable(result);
      });
  },[]);
  return(
<div style={{height:700, width:700}}>
  <DataGrid
  rows={dataTable}
  columns={columns}
  pageSize={10}
  checkboxSelection
  />
  </div>
  );
}

export default App;
