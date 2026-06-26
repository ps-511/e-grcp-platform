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
  fetchVendors,
} from "../../store/slices/vendorSlice";

import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";

import SearchBar from "../../components/SearchBar";
import Loader from "../../components/Loader";
import DataTable from "../../components/DataTable";
import MemoKpiCard from "../../components/MemoKpiCard";

function VendorsPage() {
  const dispatch = useDispatch();

  const [search, setSearch] =
    useState("");

  const [riskFilter, setRiskFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const { vendors, loading } =
    useSelector(
      (state) => state.vendors
    );

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  const filteredVendors =
    useMemo(() => {
      return vendors.filter(
        (vendor) => {
          const matchesSearch =
            vendor.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesRisk =
            riskFilter === "All"
              ? true
              : vendor.risk ===
                riskFilter;

          const matchesStatus =
            statusFilter === "All"
              ? true
              : vendor.status ===
                statusFilter;

          return (
            matchesSearch &&
            matchesRisk &&
            matchesStatus
          );
        }
      );
    }, [
      vendors,
      search,
      riskFilter,
      statusFilter,
    ]);

  if (loading) {
    return <Loader />;
  }

  const activeVendors =
    vendors.filter(
      (vendor) =>
        vendor.status ===
        "Active"
    ).length;

  const highRiskVendors =
    vendors.filter(
      (vendor) =>
        vendor.risk === "High"
    ).length;

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 2 }}
      >
        Vendor Governance
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Grid
          size={{ xs: 12, md: 4 }}
        >
          <MemoKpiCard
            title="Total Vendors"
            value={
              vendors.length
            }
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
        >
          <MemoKpiCard
            title="Active Vendors"
            value={
              activeVendors
            }
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
        >
          <MemoKpiCard
            title="High Risk Vendors"
            value={
              highRiskVendors
            }
          />
        </Grid>
      </Grid>

      <SearchBar
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <Paper
        sx={{
          p: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <TextField
          select
          label="Risk Level"
          value={riskFilter}
          onChange={(e) =>
            setRiskFilter(
              e.target.value
            )
          }
          sx={{ mr: 2 }}
        >
          <MenuItem value="All">
            All
          </MenuItem>

          <MenuItem value="Low">
            Low
          </MenuItem>

          <MenuItem value="Medium">
            Medium
          </MenuItem>

          <MenuItem value="High">
            High
          </MenuItem>
        </TextField>

        <TextField
          select
          label="Status"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
        >
          <MenuItem value="All">
            All
          </MenuItem>

          <MenuItem value="Active">
            Active
          </MenuItem>

          <MenuItem value="Inactive">
            Inactive
          </MenuItem>
        </TextField>
      </Paper>

      <DataTable
        rows={filteredVendors}
      />
    </>
  );
}

export default VendorsPage;