import React, { useState } from "react";
import { PageContainer } from "../../layout";
import { PrimaryContainer } from "../../components/containers";
import { DoughnutProvider, Table } from "../../components/metrics";
import { usersAdInsightData, productsAdInsightData } from "../../data";
import { Tooltip, IconButton } from "@mui/material";
import {
  HelpOutlineSharp,
  DonutLargeSharp,
  TableChartOutlined,
} from "@mui/icons-material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dashboard = () => {
  const [currentMetric, setCurrentMetric] = useState(0);

  const [doughnutCategory, setDoughnutCategory] = React.useState("clicks");
  const category = ["clicks", "cost", "conversions", "revenue"];

  const handleChange = (event) => {
    setDoughnutCategory(event.target.value);
  };

  const userGroupSum = usersAdInsightData.reduce((sum, item) => {
    return sum + item[doughnutCategory];
  }, 0);

  let onceFloor = true;
  const doughnutUserLabel = usersAdInsightData.map((item) => {
    if (onceFloor) {
      onceFloor = false;
      return `${Math.ceil((item[doughnutCategory] * 100) / userGroupSum)}% ${
        item.group
      }`;
    }
    return `${Math.floor((item[doughnutCategory] * 100) / userGroupSum)}% ${
      item.group
    }`;
  });

  const doughnutUserData = usersAdInsightData.map(
    (item) => item[doughnutCategory]
  );

  return (
    <PageContainer>
      <div className="flex flex-row gap-8">
        <div className="basis-1/2">
          <PrimaryContainer
            title="Ad Insights"
            titleProps={
              <Tooltip title="Product Ad Insights" placement="top-end">
                <HelpOutlineSharp sx={{ color: "#eee" }} />
              </Tooltip>
            }
          >
            {<Table bodyData={productsAdInsightData} />}
          </PrimaryContainer>
        </div>
        <div className="basis-1/2 relative">
          <PrimaryContainer
            title="Ad Insights"
            style={{ height: "100%" }}
            bodyStyle={{ height: "100%" }}
            titleProps={
              <div className="flex flex-row gap-3">
                {currentMetric === 0 && (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={doughnutCategory}
                      label="Age"
                      onChange={handleChange}
                    >
                      {category.map((item) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                <Tooltip title="User Ad Insights" placement="top-end">
                  <HelpOutlineSharp sx={{ color: "#eee" }} />
                </Tooltip>
              </div>
            }
          >
            {currentMetric === 0 && (
              <DoughnutProvider
                style={{ width: "300px", height: "300px", margin: "0 auto" }}
                doughnutLabel={doughnutUserLabel}
                doughnutData={doughnutUserData}
                doughnutTitle={doughnutCategory}
              />
            )}
            {currentMetric === 1 && <Table bodyData={usersAdInsightData} />}
            <div
              className="bg-[#eee] inline-block rounded-full absolute bottom-[16px] right-[16px]"
              onClick={() => {
                if (currentMetric) {
                  setCurrentMetric(0);
                } else {
                  setCurrentMetric(1);
                }
              }}
            >
              <IconButton
                sx={{
                  backgroundColor:
                    currentMetric === 0 ? "#0096ff" : "transparent",
                  color: currentMetric === 0 ? "#fff" : "#282828",
                  "&:hover": {
                    backgroundColor:
                      currentMetric === 0 ? "#0096ff" : "transparent",
                  },
                }}
              >
                <DonutLargeSharp />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor:
                    currentMetric === 1 ? "#0096ff" : "transparent",
                  color: currentMetric === 1 ? "#fff" : "#282828",
                  "&:hover": {
                    backgroundColor:
                      currentMetric === 1 ? "#0096ff" : "transparent",
                  },
                }}
              >
                <TableChartOutlined />
              </IconButton>
            </div>
          </PrimaryContainer>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
