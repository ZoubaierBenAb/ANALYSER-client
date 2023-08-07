import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import { useTheme } from "@emotion/react";

function Transactions() {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log("🚀 ~ file: index.jsx:14 ~ Transactions ~ data,:", data);
  return <div>Transactions</div>;
}

export default Transactions;
