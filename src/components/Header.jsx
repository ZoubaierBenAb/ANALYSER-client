import { Typography, Box, useTheme } from "@mui/material";
function Header({ title, subTitle }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        color={theme.palette.secondary[100]}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>

{subTitle}

      </Typography>
    </Box>
  );
}

export default Header;
