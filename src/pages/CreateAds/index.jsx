import React, { useState } from "react";
import { PageContainer } from "../../layout";
import { PrimaryContainer } from "../../components/containers";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import creaMediaImg from "../../assets/images/createMedia.png";
import createTextImg from "../../assets/images/createText.png";

const CreateAds = () => {
  const [adContext, setAdContext] = useState([]);
  const navigate = useNavigate();

  const handleAdContext = (e) => {
    const { id, value } = e.target;
    setAdContext((prevAdContext) => {
      return prevAdContext.includes(id)
        ? prevAdContext.filter((ad) => id !== ad)
        : [...prevAdContext, id];
    });
  };

  const boxShadowStyle = {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  };

  const currentPageNavigationHandler = () => {
    switch (adContext.join(" ")) {
      case "textAd":
        navigate("/text");
        break;
      case "mediaAd":
        navigate("/media");
        break;
      default:
        navigate("/media");
    }
  };
  return (
    <PageContainer>
      <PrimaryContainer
        title="Create Ads"
        style={{ height: "100%" }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        headStyle="border-0"
        bodyClass="gap-4 p-4 sm:pt-16 sm:pb-4 sm:px-4"
      >
        <div className="flex-1 mx-auto">
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-4 md:gap-6 xl:gap-12">
            <label htmlFor="textAd">
              <div
                className="flex basis-1/2 flex-col rounded-md p-1 relative cursor-pointer"
                style={boxShadowStyle}
              >
                <Checkbox
                  sx={{ position: "absolute" }}
                  id="textAd"
                  onChange={handleAdContext}
                  checked={adContext.includes("textAd")}
                  value="textAd"
                />
                <div className="w-[180px] h-[220px] md:w-[200px] md:h-[250px] bg-[#ddd] mt-6 mr-8 ml-8 md:mt-10 md:mr-12 md:ml-12">
                  <img
                    src={createTextImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center bg-[#fafafa] rounded-bl-md rounded-br-md p-4">
                  <span className="text-[#a6a6a6]">Create</span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#323c46",
                    }}
                  >
                    Text Ad
                  </h3>
                </div>
              </div>
            </label>
            <label htmlFor="mediaAd">
              <div
                className="flex basis-1/2 flex-col rounded-md p-1 relative cursor-pointer"
                style={boxShadowStyle}
              >
                <Checkbox
                  sx={{ position: "absolute" }}
                  id="mediaAd"
                  onChange={handleAdContext}
                  checked={adContext.includes("mediaAd")}
                  value="mediaAd"
                />
                <div className="w-[180px] h-[220px] md:w-[200px] md:h-[250px] bg-[#ddd] mt-6 mr-8 ml-8 md:mt-10 md:mr-12 md:ml-12">
                  <img
                    src={creaMediaImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center bg-[#fafafa] rounded-bl-md rounded-br-md p-4">
                  <span className="text-[#a6a6a6]">Create</span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#323c46",
                    }}
                  >
                    Media Ad
                  </h3>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <Button
            disabled={adContext.length === 0}
            onClick={currentPageNavigationHandler}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "2px",
              minWidth: "120px",
              backgroundColor: "#0096ff",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Next
          </Button>
        </div>
      </PrimaryContainer>
    </PageContainer>
  );
};

export default CreateAds;
