import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SortAction from "../../actions/SortAction";

export default function BasicTable({ bodyData }) {
  let headRow = [];
  const [sortData, setSortData] = useState({
    isSort: false,
    sortType: "",
    sortOrder: "",
    isAsc: false,
  });

  console.log(sortData);

  for (let key in bodyData[0]) {
    if (key !== "id") {
      headRow.push(key);
    }
  }

  const getSum = (title) => {
    return bodyData.reduce((sum, item) => {
      return item[title] + sum;
    }, 0);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "0", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headRow.map((item, index) => {
              return (
                <TableCell
                  key={index}
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "medium",
                    padding: "0",
                  }}
                  align={index === 0 ? "left" : "right"}
                >
                  <div
                    className="flex gap-1 cursor-pointer items-center p-4 justify-between"
                    onClick={() => {
                      setSortData({
                        isSort: true,
                        sortType: item,
                        sortOrder: sortData.isAsc ? "asc" : "dsc",
                        isAsc: !sortData.isAsc,
                      });
                    }}
                  >
                    <div className="select-none flex-1">{item}</div>
                    <SortAction sortData={sortData} actionType={item} />
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyData.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#6c737b" }}>
                {item.campaigns ?? item.group}
              </TableCell>
              <TableCell align="right" sx={{ color: "#6c737b" }}>
                {item.clicks}
              </TableCell>
              <TableCell align="right" sx={{ color: "#6c737b" }}>
                USD {item.cost}
              </TableCell>
              <TableCell align="right" sx={{ color: "#6c737b" }}>
                {item.conversions}
              </TableCell>
              <TableCell align="right" sx={{ color: "#6c737b" }}>
                USD {item.revenue}
              </TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: "#fafafa" }}>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right" sx={{ color: "#6c737b" }}>
              {getSum("clicks")}
            </TableCell>
            <TableCell align="right" sx={{ color: "#6c737b" }}>
              USD {getSum("cost")}
            </TableCell>
            <TableCell align="right" sx={{ color: "#6c737b" }}>
              {getSum("conversions")}
            </TableCell>
            <TableCell align="right" sx={{ color: "#6c737b" }}>
              USD {getSum("revenue")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
