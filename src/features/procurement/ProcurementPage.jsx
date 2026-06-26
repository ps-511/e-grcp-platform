import {
  useEffect,
  useState,
  useMemo,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  fetchRequests,
} from "../../store/slices/procurementSlice";

import { Link } from "react-router-dom";

import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Button,
} from "@mui/material";

function ProcurementPage() {
  const dispatch = useDispatch();

  const { requests } =
    useSelector(
      (state) =>
        state.procurement
    );

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [sortOrder, setSortOrder] =
    useState("asc");

  const [page, setPage] =
    useState(0);

  const [rowsPerPage] =
    useState(5);

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  const filteredRequests =
    useMemo(() => {
      const filtered =
        requests.filter(
          (request) => {
            const matchesSearch =
              request.title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                );

            const matchesStatus =
              status === "All"
                ? true
                : request.status ===
                  status;

            return (
              matchesSearch &&
              matchesStatus
            );
          }
        );

      filtered.sort((a, b) => {
        if (
          sortOrder === "asc"
        ) {
          return (
            a.amount -
            b.amount
          );
        }

        return (
          b.amount -
          a.amount
        );
      });

      return filtered;
    }, [
      requests,
      search,
      status,
      sortOrder,
    ]);

  const paginatedRequests =
    filteredRequests.slice(
      page * rowsPerPage,
      page * rowsPerPage +
        rowsPerPage
    );

  const exportCSV = () => {
    const csvRows = [
      [
        "ID",
        "Title",
        "Department",
        "Status",
        "Amount",
      ],
    ];

    filteredRequests.forEach(
      (request) => {
        csvRows.push([
          request.id,
          request.title,
          request.department,
          request.status,
          request.amount,
        ]);
      }
    );

    const csvContent =
      csvRows
        .map((row) =>
          row.join(",")
        )
        .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv",
      }
    );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "procurement-report.csv";

    link.click();
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2 }}
      >
        Procurement Workspace
      </Typography>

      <TextField
        label="Search Request"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        sx={{ mr: 2 }}
      />

      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value
          )
        }
        sx={{ mr: 2 }}
      >
        <MenuItem value="All">
          All
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

        <MenuItem value="Approved">
          Approved
        </MenuItem>

        <MenuItem value="Rejected">
          Rejected
        </MenuItem>
      </TextField>

      <TextField
        select
        label="Sort Amount"
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(
            e.target.value
          )
        }
        sx={{ mr: 2 }}
      >
        <MenuItem value="asc">
          Low To High
        </MenuItem>

        <MenuItem value="desc">
          High To Low
        </MenuItem>
      </TextField>

      <Button
        variant="contained"
        onClick={exportCSV}
      >
        Export CSV
      </Button>

      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell>
              Request
            </TableCell>
            <TableCell>
              Department
            </TableCell>
            <TableCell>
              Status
            </TableCell>
            <TableCell>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedRequests.map(
            (request) => (
              <TableRow
                key={request.id}
              >
                <TableCell>
                  {request.id}
                </TableCell>

                <TableCell>
                  <Link
                    to={`/procurement/${request.id}`}
                  >
                    {
                      request.title
                    }
                  </Link>
                </TableCell>

                <TableCell>
                  {
                    request.department
                  }
                </TableCell>

                <TableCell>
                  {
                    request.status
                  }
                </TableCell>

                <TableCell>
                  ₹
                  {
                    request.amount
                  }
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={
          filteredRequests.length
        }
        page={page}
        rowsPerPage={
          rowsPerPage
        }
        onPageChange={(
          event,
          newPage
        ) =>
          setPage(newPage)
        }
      />
    </Paper>
  );
}

export default ProcurementPage;