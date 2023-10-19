import React from "react";
import { PageContainer } from "../../layout";
import { PrimaryContainer } from "../../components/containers";
import { Button, Checkbox } from "@mui/material";

const CreateAds = () => {
  return (
    <PageContainer>
      <PrimaryContainer
        title="Create Ads"
        style={{ height: "100%" }}
        bodyStyle={{
          padding: "64px 16px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div className="flex-1 mx-auto">
          <div className="flex gap-12">
            <label htmlFor="text">
              <div className="flex basis-1/2 flex-col outline rounded-md p-1 relative cursor-pointer">
                <Checkbox sx={{ position: "absolute" }} id="text" />
                <div className="w-[200px] h-[250px] bg-[#ddd] mt-10 mr-12 ml-12"></div>
                <div className="flex flex-col items-center bg-[#aaa] rounded-bl-md rounded-br-md p-4">
                  <span>Create</span>
                  <h3 style={{ fontSize: "20px", fontWeight: 600 }}>Text Ad</h3>
                </div>
              </div>
            </label>
            <label htmlFor="media">
              <div className="flex basis-1/2 flex-col outline rounded-md p-1 relative cursor-pointer">
                <Checkbox sx={{ position: "absolute" }} id="media" />
                <div className="w-[200px] h-[250px] bg-[#ddd] mt-10 mr-12 ml-12"></div>
                <div className="flex flex-col items-center bg-[#aaa] rounded-bl-md rounded-br-md p-4">
                  <span>Create</span>
                  <h3 style={{ fontSize: "20px", fontWeight: 600 }}>
                    Media Ad
                  </h3>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
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

// 800 - 48 = 752
// bg-[#fafafa]
