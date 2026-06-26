import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({
  children,
}) {
  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />

        <Box
          sx={{
            flex: 1,
            p: 3,
            minHeight:
              "100vh",
          }}
        >
          {children}

          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;