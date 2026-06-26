import {
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

function CompliancePage() {
  const complianceData = [
    {
      title: "Violations",
      value: 4,
    },
    {
      title: "Expired Certifications",
      value: 12,
    },
    {
      title: "Missing Documents",
      value: 6,
    },
  ];

  const records = [
    {
      vendor: "TechNova Solutions",
      issue: "Missing Document",
      status: "Open",
    },
    {
      vendor: "CloudAxis Pvt Ltd",
      issue: "Expired Certification",
      status: "Pending",
    },
    {
      vendor: "DataSphere Systems",
      issue: "Compliance Violation",
      status: "Critical",
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Compliance Center
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mb: 4 }}
      >
        {complianceData.map(
          (item) => (
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
              key={item.title}
            >
              <Card>
                <CardContent>
                  <Typography>
                    {item.title}
                  </Typography>

                  <Typography variant="h5">
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      <Paper sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Compliance Monitoring
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Vendor
              </TableCell>

              <TableCell>
                Issue
              </TableCell>

              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {records.map(
              (record, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell>
                    {
                      record.vendor
                    }
                  </TableCell>

                  <TableCell>
                    {
                      record.issue
                    }
                  </TableCell>

                  <TableCell>
                    {
                      record.status
                    }
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

export default CompliancePage;