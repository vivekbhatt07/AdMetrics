import React, { useEffect, useState } from "react";
import { PageContainer } from "../../layout";
import { PrimaryContainer } from "../../components/containers";
import { DoughnutProvider, Table } from "../../components/metrics";
import { usersAdInsightData, productsAdInsightData } from "../../data";
import { Tooltip, IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
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
  const [toggle, setToggle] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: "780px" });
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

  useEffect(() => {
    if (isDesktop) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [isDesktop]);

  return (
    <PageContainer>
      <div className="flex flex-col xl:flex-row gap-8">
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
              <div className="flex flex-row gap-3 items-center">
                {currentMetric === 0 && (
                  <FormControl fullWidth>
                    <select
                      value={doughnutCategory}
                      label="Age"
                      onChange={handleChange}
                      className="border-2 border-[#ddd] py-[0] px-2 focus:outline-0 focus:border-[#0096ff] transition-all rounded-md text-[#3f4851] capitalize"
                    >
                      {category.map((item) => (
                        <option
                          value={item}
                          key={item}
                          className="text-[#000] capitalize"
                        >
                          {item}
                        </option>
                      ))}
                    </select>
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
                style={{
                  width: toggle ? "420px" : "300px",
                  height: toggle ? "420px" : "300px",
                  margin: "0 auto",
                }}
                doughnutLabel={doughnutUserLabel}
                doughnutData={doughnutUserData}
                doughnutTitle={doughnutCategory}
              />
            )}
            {currentMetric === 1 && <Table bodyData={usersAdInsightData} />}
            <div
              className={`bg-[#eee] flex rounded-full absolute ${
                currentMetric === 0 && "bottom-[16px] right-[16px] flex-col"
              } ${
                currentMetric === 1 && "top-[8px] left-[50%] flex-row"
              } xl:top-auto xl:left-auto xl:flex-row xl:bottom-[16px] xl:right-[16px]`}
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
