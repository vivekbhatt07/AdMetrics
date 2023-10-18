import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ bodyData }) {
  const headRow = [];

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headRow.map((item, index) => {
              return (
                <TableCell
                  key={index}
                  sx={{ textTransform: "capitalize" }}
                  align={index === 0 ? "left" : "right"}
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.campaigns ?? item.group}
              </TableCell>
              <TableCell align="right">{item.clicks}</TableCell>
              <TableCell align="right">{item.cost}</TableCell>
              <TableCell align="right">{item.conversions}</TableCell>
              <TableCell align="right">{item.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right">{getSum("clicks")}</TableCell>
            <TableCell align="right">{getSum("cost")}</TableCell>
            <TableCell align="right">{getSum("conversions")}</TableCell>
            <TableCell align="right">{getSum("revenue")}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
