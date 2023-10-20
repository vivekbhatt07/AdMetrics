import React, { useEffect, useState } from "react";
import { PrimaryContainer } from "../../components/containers";
import { PageContainer } from "../../layout";
import {
  BasicInput,
  SelectInput,
  TextAreaInput,
} from "../../components/inputs";
import { Button } from "@mui/material";
import "./MediaAdForm.css";
import { useNavigate } from "react-router-dom";
import LottieProvider from "../../components/LottieProvider";
import ModalProvider from "../../components/ModalProvider";
import SubmitLottie from "../../assets/Lottie/SubmitLottie/submitLottie.json";

const MediaAdForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const openSubmit = () => setIsSubmit(true);
  const closeSubmit = () => setIsSubmit(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timerId;
    if (isSubmit) {
      timerId = setTimeout(() => {
        setIsSubmit(false);
        navigate("/createAd");
      }, 1000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isSubmit]);

  return (
    <PageContainer>
      <PrimaryContainer
        title="Create Text & Media"
        style={{ height: "100%" }}
        bodyStyle={{
          padding: "0 16px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        headStyle="border-0"
      >
        <form className="mediaAdForm">
          <BasicInput
            labelText="Heading 01"
            placeholderText="Add a heading that would make users interested"
            className="headingOne"
          />
          <BasicInput
            labelText="Heading 02"
            placeholderText="Add a heading that would make users interested"
            className="headingTwo"
          />
          <BasicInput
            labelText="Business Name"
            placeholderText="Add your business name"
            className="busiName"
          />
          <BasicInput
            labelText="Website URL"
            placeholderText="Add the URL of the landing page you want to redirect users to"
            className="webUrl"
          />
          <TextAreaInput
            labelText="Description 01"
            placeholderText="Add primary text to help users understand more about your products, services or offers"
            className="detailOne"
            style={{ height: "100%" }}
          />
          <SelectInput
            labelText="Button Label"
            placeholderText="Select a label that best suits your ad"
            className="btnLabel"
          />
          <BasicInput
            labelText="Landing Marketing Image(1:9:1)"
            placeholderText="Add the URL of the image you want to use for the ad"
            className="lmi"
          />
          <BasicInput
            labelText="Portrait Marketing Image(4:5)"
            placeholderText="Add the URL of the image you want to use for the ad"
            className="pmi"
          />
          <BasicInput
            labelText="Square Marketing Image(4:5)"
            placeholderText="Add the URL of the image you want to use for the ad"
            className="smi"
          />
          <BasicInput
            labelText="Video URL"
            placeholderText="Add the URL of the video you want to use for the ad"
            className="videoUrl"
          />
        </form>
        <div className="flex justify-end">
          <div className="flex gap-3">
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
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
              onClick={() => {
                openSubmit();
              }}
            >
              Submit
            </Button>
            <ModalProvider isOpen={isSubmit} closeModal={closeSubmit}>
              <div className="flex flex-col gap-1 mx-auto my-auto">
                <LottieProvider
                  lottieAsset={SubmitLottie}
                  style={{ width: "70px", height: "70px" }}
                />
                <span>Submitted</span>
              </div>
            </ModalProvider>
          </div>
        </div>
      </PrimaryContainer>
    </PageContainer>
  );
};

export default MediaAdForm;
