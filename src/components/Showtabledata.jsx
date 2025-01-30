// import tableData from "../api/tableData.json";

// const ShowTableData = () => {
//   return (
//     <div className="tabel-daat">
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Physics</th>
//             <th>Math</th>
//             <th>English</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((show) => (  
//             <tr key={show.name} onClick={() => alert(`
//               Name: ${show.name}
//               Gender: ${show.gender}
//               Physics: ${show.physics}
//               Math: ${show.maths}
//               English: ${show.english}
//             `)}>
//               <td>{show.name}</td>
//               <td>{show.gender}</td>
//               <td>{show.physics}</td>
//               <td>{show.maths}</td>
//               <td>{show.english}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ShowTableData;


import { useState } from "react";
import tableData from "../api/tableData.json";

const ShowTableData = () => {
  // State to hold the selected row data
  const [selectedData, setSelectedData] = useState(null);

  const handleRowClick = (show) => {
    // When a row is clicked, store its data in the state
    setSelectedData(show);
    // alert(show.name +" "+ show.gender);
    
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Physics</th>
              <th>Math</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((show) => (
              <tr key={show.name} onClick={() => handleRowClick(show)}>
                <td>{show.name}</td>
                <td>{show.gender}</td>
                <td>{show.physics}</td>
                <td>{show.maths}</td>
                <td>{show.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show the selected data in a card if there's any */}
      {selectedData && (
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <h3>{selectedData.name}</h3>
            </div>
            <div className="card-body">
              <p><strong>Gender:</strong> {selectedData.gender}</p>
              <p><strong>Physics:</strong> {selectedData.physics}</p>
              <p><strong>Math:</strong> {selectedData.maths}</p>
              <p><strong>English:</strong> {selectedData.english}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowTableData;

