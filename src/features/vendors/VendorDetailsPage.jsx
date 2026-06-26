import { useParams } from "react-router-dom";

import vendors from "../../mocks/vendors.json";

import {
  Paper,
  Typography,
  Divider,
} from "@mui/material";

function VendorDetailsPage() {
  const { id } = useParams();

  const vendor = vendors.find(
    (item) =>
      item.id === Number(id)
  );

  if (!vendor) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5">
          Vendor Not Found
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2 }}
      >
        Vendor Profile
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography
        variant="h6"
        sx={{ mb: 1 }}
      >
        Basic Details
      </Typography>

      <Typography>
        Vendor ID:
        {" "}
        {vendor.id}
      </Typography>

      <Typography>
        Vendor Name:
        {" "}
        {vendor.name}
      </Typography>

      <Typography>
        Status:
        {" "}
        {vendor.status}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h6"
        sx={{ mb: 1 }}
      >
        Contacts
      </Typography>

      <Typography>
        Contact:
        {" "}
        {vendor.contact}
      </Typography>

      <Typography>
        Email:
        {" "}
        {vendor.email}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h6"
        sx={{ mb: 1 }}
      >
        Documents
      </Typography>

      <Typography>
        {vendor.document}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h6"
        sx={{ mb: 1 }}
      >
        Risk Information
      </Typography>

      <Typography>
        Risk Level:
        {" "}
        {vendor.risk}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h6"
        sx={{ mb: 1 }}
      >
        History
      </Typography>

      <Typography>
        {vendor.history}
      </Typography>
    </Paper>
  );
}

export default VendorDetailsPage;