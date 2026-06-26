import { useState } from "react";

import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  MenuItem,
} from "@mui/material";

import approvalData from "../../mocks/approvalData.json";

function ApprovalPage() {
  const [requests, setRequests] =
    useState(approvalData);

  const [filter, setFilter] =
    useState("All");

  const updateStatus = (
    id,
    status
  ) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
            }
          : item
      )
    );
  };

  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter(
          (request) =>
            request.status ===
            filter
        );

  const pendingCount =
    requests.filter(
      (r) =>
        r.status === "Pending"
    ).length;

  const approvedCount =
    requests.filter(
      (r) =>
        r.status === "Approved"
    ).length;

  const rejectedCount =
    requests.filter(
      (r) =>
        r.status === "Rejected"
    ).length;

  const escalatedCount =
    requests.filter(
      (r) =>
        r.status === "Escalated"
    ).length;

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Approval Workbench
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography>
                Pending Queue
              </Typography>

              <Typography variant="h5">
                {pendingCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography>
                Approved Queue
              </Typography>

              <Typography variant="h5">
                {approvedCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography>
                Rejected Queue
              </Typography>

              <Typography variant="h5">
                {rejectedCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography>
                Escalated Queue
              </Typography>

              <Typography variant="h5">
                {escalatedCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TextField
        select
        label="Queue Filter"
        value={filter}
        onChange={(e) =>
          setFilter(
            e.target.value
          )
        }
        sx={{ mb: 3 }}
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

        <MenuItem value="Escalated">
          Escalated
        </MenuItem>
      </TextField>

      <Paper sx={{ p: 2 }}>
        <Table>
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
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRequests.map(
              (request) => (
                <TableRow
                  key={
                    request.id
                  }
                >
                  <TableCell>
                    {request.id}
                  </TableCell>

                  <TableCell>
                    {
                      request.request
                    }
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
                    <Button
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Approved"
                        )
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </Button>

                    <Button
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Pending"
                        )
                      }
                    >
                      Send Back
                    </Button>

                    <Button
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Escalated"
                        )
                      }
                    >
                      Delegate
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default ApprovalPage;