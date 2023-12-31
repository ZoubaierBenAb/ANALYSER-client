import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
function Customers() {
  const { data, isLoading } = useGetCustomersQuery();
  console.log("🚀 ~ file: index.js:7 ~ Customers ~ data:", data);
  const theme = useTheme();
  
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 0.4,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];
  return (
    <Box
      m="1.5rem 2.5rem"
      
    >
      <Header title="CUSTOMERS" subTitle="List of Customers" />
      <Box mt="1.5rem" height="75vh" sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
            
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}>
     
        <DataGrid
          loading={isLoading || !data}
          rows={data || []}
          columns={columns}
          getRowId={(row) => row._id}
         
        />
      </Box>
    </Box>
  );
}

export default Customers;
