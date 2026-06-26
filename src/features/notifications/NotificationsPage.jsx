import {
  useState,
  useEffect,
} from "react";

import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import notificationsData from "../../mocks/notifications.json";

function NotificationsPage() {
  const [notifications, setNotifications] =
    useState(notificationsData);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setNotifications(
          (prev) => [
            {
              id: Date.now(),
              message:
                "New Procurement Request Submitted",
              priority:
                "High",
              read: false,
            },
            ...prev,
          ]
        );
      }, 15000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  const markAsRead = (
    id
  ) => {
    setNotifications(
      (prev) =>
        prev.map(
          (
            notification
          ) =>
            notification.id ===
            id
              ? {
                  ...notification,
                  read: true,
                }
              : notification
        )
    );
  };

  const unreadCount =
    notifications.filter(
      (n) => !n.read
    ).length;

  const highPriorityCount =
    notifications.filter(
      (n) =>
        n.priority ===
          "High" ||
        n.priority ===
          "Critical"
    ).length;

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Notification Center
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Card>
            <CardContent>
              <Typography>
                Total Notifications
              </Typography>

              <Typography variant="h5">
                {
                  notifications.length
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Card>
            <CardContent>
              <Typography>
                Unread
                Notifications
              </Typography>

              <Typography variant="h5">
                {
                  unreadCount
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Card>
            <CardContent>
              <Typography>
                High Priority
                Alerts
              </Typography>

              <Typography variant="h5">
                {
                  highPriorityCount
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>

              <TableCell>
                Notification
              </TableCell>

              <TableCell>
                Priority
              </TableCell>

              <TableCell>
                Status
              </TableCell>

              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {notifications.map(
              (
                notification
              ) => (
                <TableRow
                  key={
                    notification.id
                  }
                >
                  <TableCell>
                    {
                      notification.id
                    }
                  </TableCell>

                  <TableCell>
                    {
                      notification.message
                    }
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={
                        notification.priority
                      }
                    />
                  </TableCell>

                  <TableCell>
                    {notification.read
                      ? "Read"
                      : "Unread"}
                  </TableCell>

                  <TableCell>
                    {!notification.read && (
                      <Button
                        onClick={() =>
                          markAsRead(
                            notification.id
                          )
                        }
                      >
                        Mark Read
                      </Button>
                    )}
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

export default NotificationsPage;