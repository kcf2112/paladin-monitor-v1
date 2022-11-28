import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import { retrievePaladins } from './services/DemoDataService';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const App = () => {

  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: 'ipAddress', filter: true },
    { field: 'customer', filter: true },
    { field: 'hostname', filter: true },
    { field: 'location', filter: true }
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  // Similated Paladin data retrieval from some server.
  useEffect(() => {
    const plist = retrievePaladins();
    console.log(`App: paladin data: ${JSON.stringify(plist)}`);
    setRowData(plist);
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback(e => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Deployed Paladins</h2>

      {/* Example using Grid's API */}
      <button onClick={buttonListener}>Show Selected</button>

      {/* On div wrapping Grid: a.) specify theme CSS Class Class and b.) set Grid size */}
      <div className="ag-theme-alpine" style={{ width: 810, height: 500 }}>
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API

          rowData={rowData} // Row Data for Rows

          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties

          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows

          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
};

export default App;
