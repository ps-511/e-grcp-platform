import {
  useState,
  useMemo,
} from "react";

import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import reportsData from "../../mocks/reports.json";

function ReportsPage() {
  const [filter, setFilter] =
    useState("All");

  const filteredReports =
    useMemo(() => {
      if (
        filter === "All"
      ) {
        return reportsData;
      }

      return reportsData.filter(
        (report) =>
          report.type ===
          filter
      );
    }, [filter]);

  const exportCSV = () => {
    const header =
      "ID,Report,Type,Saved\n";

    const rows =
      filteredReports
        .map(
          (report) =>
            `${report.id},${report.name},${report.type},${report.saved}`
        )
        .join("\n");

    const blob =
      new Blob(
        [header + rows],
        {
          type: "text/csv",
        }
      );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download =
      "reports.csv";

    link.click();
  };

  const exportExcel = () => {
    const header =
      "ID\tReport\tType\tSaved\n";

    const rows =
      filteredReports
        .map(
          (report) =>
            `${report.id}\t${report.name}\t${report.type}\t${report.saved}`
        )
        .join("\n");

    const blob =
      new Blob(
        [header + rows],
        {
          type:
            "application/vnd.ms-excel",
        }
      );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download =
      "reports.xls";

    link.click();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Reporting Center
      </Typography>

      <TextField
        select
        label="Report Type"
        value={filter}
        onChange={(e) =>
          setFilter(
            e.target.value
          )
        }
        sx={{ mb: 2 }}
      >
        <MenuItem value="All">
          All
        </MenuItem>

        <MenuItem value="Procurement">
          Procurement
        </MenuItem>

        <MenuItem value="Vendor">
          Vendor
        </MenuItem>

        <MenuItem value="Risk">
          Risk
        </MenuItem>

        <MenuItem value="Compliance">
          Compliance
        </MenuItem>
      </TextField>

      <Button
        variant="contained"
        onClick={exportCSV}
        sx={{ ml: 2 }}
      >
        Export CSV
      </Button>

      <Button
        variant="contained"
        onClick={exportExcel}
        sx={{ ml: 2 }}
      >
        Export Excel
      </Button>

      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              ID
            </TableCell>

            <TableCell>
              Report
            </TableCell>

            <TableCell>
              Type
            </TableCell>

            <TableCell>
              Saved
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredReports.map(
            (report) => (
              <TableRow
                key={report.id}
              >
                <TableCell>
                  {report.id}
                </TableCell>

                <TableCell>
                  {report.name}
                </TableCell>

                <TableCell>
                  {report.type}
                </TableCell>

                <TableCell>
                  {report.saved
                    ? "Yes"
                    : "No"}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ReportsPage;