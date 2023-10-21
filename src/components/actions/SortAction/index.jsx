import React from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

function SortAction(props) {
  const { sortData, actionType } = props;
  const { isSort, sortType, sortOrder } = sortData;
  return (
    <div className="flex flex-col">
      <KeyboardArrowUp
        sx={{
          color:
            isSort && sortOrder === "asc" && sortType === actionType
              ? "#282828"
              : "#ddd",
          width: "16px",
          height: "16px",
          transition: "all 0.5s",
        }}
      />
      <KeyboardArrowDown
        sx={{
          color:
            isSort && sortOrder === "dsc" && sortType === actionType
              ? "#282828"
              : "#ddd",
          width: "16px",
          height: "16px",
          transition: "all 0.5s",
        }}
      />
    </div>
  );
}

export default SortAction;
