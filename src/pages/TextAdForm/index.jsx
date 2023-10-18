import React from "react";
import { PrimaryContainer } from "../../components/containers";
import { PageContainer } from "../../layout";
import { BasicInput, TextAreaInput } from "../../components/inputs";
import { Button } from "@mui/material";

const TextAdForm = () => {
  return (
    <PageContainer>
      <PrimaryContainer
        title="Create Text & Media"
        style={{ height: "100%" }}
        bodyStyle={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <form className="flex-1">
          <BasicInput
            labelText="Heading 01"
            placeholderText="Add a heading that would make users interested"
          />
          <BasicInput
            labelText="Heading 02"
            placeholderText="Add a heading that would make users interested"
          />
          <BasicInput
            labelText="Business Name"
            placeholderText="Add your business name"
          />
          <BasicInput
            labelText="Website URL"
            placeholderText="Add the URL of the landing page you want to redirect users to"
          />
        </form>
        <div className="flex justify-end">
          <div className="flex gap-3">
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "2px",
                minWidth: "120px",
                backgroundColor: "#dddddd",
                boxShadow: "none",
                color: "#000",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: "#aaaaaa",
                },
              }}
            >
              Back
            </Button>
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
              Submit
            </Button>
          </div>
        </div>
      </PrimaryContainer>
    </PageContainer>
  );
};

export default TextAdForm;