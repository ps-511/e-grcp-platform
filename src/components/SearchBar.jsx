import { TextField } from "@mui/material";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Search Vendor"
      size="small"
      value={value}
      onChange={onChange}
      sx={{ mb: 2 }}
    />
  );
}

export default SearchBar;