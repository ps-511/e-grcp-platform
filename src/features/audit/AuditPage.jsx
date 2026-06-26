import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import auditData from "../../mocks/auditData.json";

function AuditPage() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Audit Center
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>
                Audit Reports
              </Typography>

              <Typography variant="h5">
                25
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>
                Completed Audits
              </Typography>

              <Typography variant="h5">
                18
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>
                Pending Audits
              </Typography>

              <Typography variant="h5">
                7
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Audit History / User Activities / System Logs
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>

              <TableCell>
                Activity
              </TableCell>

              <TableCell>
                User
              </TableCell>

              <TableCell>
                Date
              </TableCell>

              <TableCell>
                Type
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {auditData.map(
              (row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell>
                    {row.id}
                  </TableCell>

                  <TableCell>
                    {
                      row.activity
                    }
                  </TableCell>

                  <TableCell>
                    {row.user}
                  </TableCell>

                  <TableCell>
                    {row.date}
                  </TableCell>

                  <TableCell>
                    {row.type}
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

export default AuditPage;