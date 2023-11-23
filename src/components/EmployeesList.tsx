import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { employeeArray } from '../store/EmployeeArray.ts';
import { Grid } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'; 

export const EmployeeList=({ onEmployeeDeleted }: { onEmployeeDeleted: () => void }) => {

  const deleteEmployee=async(index:number)=>{
    await employeeArray.splice(index,1);
    onEmployeeDeleted();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="employee table">
        <TableHead>
          <TableRow>          
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Department</b></TableCell>
            <TableCell align="center"><b>Salary</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          {employeeArray.map((element,index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="element" align="center">{element.name}</TableCell>
              <TableCell align="center">{element.department}</TableCell>
              <TableCell align="center">{element.salary}</TableCell>
              <TableCell align="center"><Grid item xs={8}>
              <DeleteForeverTwoToneIcon onClick={()=>deleteEmployee(index)}/>
              </Grid></TableCell>
            </TableRow>      
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
