import { useParams } from "react-router-dom";
import { useState } from "react";

import requests from "../../mocks/requests.json";

import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function ProcurementDetailsPage() {
  const { id } = useParams();

  const [tab, setTab] = useState(0);

  const request = requests.find(
    (item) => item.id === Number(id)
  );

  if (!request) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5">
          Request Not Found
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
        {request.title}
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, value) =>
          setTab(value)
        }
      >
        <Tab label="Overview" />
        <Tab label="Attachments" />
        <Tab label="Approval History" />
        <Tab label="Comments" />
        <Tab label="Audit Logs" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tab === 0 && (
          <>
            <Typography variant="h6">
              Request Overview
            </Typography>

            <Typography>
              Department:
              {" "}
              {request.department}
            </Typography>

            <Typography>
              Status:
              {" "}
              {request.status}
            </Typography>

            <Typography>
              Amount:
              {" "}
              ₹{request.amount}
            </Typography>
          </>
        )}

        {tab === 1 && (
          <>
            <Typography variant="h6">
              Attachments
            </Typography>

            <List>
              <ListItem>
                <ListItemText
                  primary={`${request.title} Document.pdf`}
                />
              </ListItem>
            </List>
          </>
        )}

        {tab === 2 && (
          <>
            <Typography variant="h6">
              Approval History
            </Typography>

            <List>
              <ListItem>
                <ListItemText
                  primary={`Request submitted for ${request.department}`}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={`Current Status: ${request.status}`}
                />
              </ListItem>
            </List>
          </>
        )}

        {tab === 3 && (
          <>
            <Typography variant="h6">
              Comments
            </Typography>

            <List>
              <ListItem>
                <ListItemText
                  primary={`Review request for ${request.title}`}
                />
              </ListItem>
            </List>
          </>
        )}

        {tab === 4 && (
          <>
            <Typography variant="h6">
              Audit Logs
            </Typography>

            <List>
              <ListItem>
                <ListItemText
                  primary={`Request #${request.id} created`}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={`Status changed to ${request.status}`}
                />
              </ListItem>
            </List>
          </>
        )}
      </Box>
    </Paper>
  );
}

export default ProcurementDetailsPage;