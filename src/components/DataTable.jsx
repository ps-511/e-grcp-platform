import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
function DataTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Vendor Name</TableCell>
            <TableCell>Risk Level</TableCell>
          </TableRow>
        </TableHead>

       <TableBody>
  {rows.map((row) => (
    <TableRow key={row.id}>
      <TableCell>{row.id}</TableCell>

      <TableCell>
        <Link to={`/vendors/${row.id}`}>
          {row.name}
        </Link>
      </TableCell>

      <TableCell>{row.risk}</TableCell>
    </TableRow>
  ))}
</TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;