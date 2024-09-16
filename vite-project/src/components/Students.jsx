
const Students = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
            <tr>
                <th> Name </th>
                
                <td> {props.name}</td>
            </tr>
            <tr>
                <th> Age </th>
                
                <td> {props.age}</td>
            </tr>
            <tr>
                <th> isMarried </th>
                
                <td> {props.isMarried ? "Yes" : "No"} </td>
            </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Students
