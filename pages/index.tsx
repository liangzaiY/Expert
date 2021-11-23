import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ImageLine } from "@/components";
import Link from "@/src/Link";

const Index = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Link href="/about" color="secondary">
          {/* <ImageItem /> */}
        </Link>
        <ImageLine />
      </Box>
    </Container>
  );
};
export default Index;
