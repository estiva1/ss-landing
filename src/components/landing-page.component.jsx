import React, { useState } from "react";
import { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Box, Grid, Grow, Stack } from "@mui/material";

import {
  BenefitBoldText,
  BenefitContainer,
  BenefitThinText,
  BlueTile,
  DescriptionExtraSmall,
  DescriptionLarge,
  DescriptionMedium,
  DescriptionSmall,
  DescriptionStandart,
  HeroSpanText,
  HeroText,
  ImageRoundContainer,
  MutableContentBox,
  ProfitValue,
  ReasonContainer,
  SectionHeaderText,
  SectionHeaderTextHighlighted,
  SectionWrapper,
  ShapeOne,
  ShapeThree,
  ShapeTwo,
  StyledBlueButton,
  StyledTab,
  StyledTextField,
  SubtitleText,
  SubtitleTextMedium,
  SubtitleTextSmall,
  ThinTextBox,
} from "./landing-page.style";

import EastRoundedIcon from "@mui/icons-material/EastRounded";

import companyLogo from "../assets/logo.png";
import companyLogoWhite from "../assets/logo-white.png";
import flyingPeople from "../assets/section-one-image.png";
import lock from "../assets/lock.png";
import scalesIcon from "../assets/scales-icon.png";
import marginIcon from "../assets/margin-icon.png";
import buyBoxIcon from "../assets/buy-box-icon.png";
import manMovingForward from "../assets/man-moving-forward.png";
import increasing from "../assets/increasing.png";
import timer from "../assets/timer.png";
import dataReport from "../assets/data-report.png";
import diamond from "../assets/diamond.png";
import decal from "../assets/decal.svg";
import decalWhite from "../assets/decal-white.svg";
import managingOne from "../assets/managing-1.png";
import managingTwo from "../assets/managing-2.png";
import managingThree from "../assets/managing-3.png";
import managingFour from "../assets/managing-4.png";
import managingFive from "../assets/managing-5.png";
import adjustingOne from "../assets/adjusting-1.png";
import adjustingTwo from "../assets/adjusting-2.png";
import adjustingThree from "../assets/adjusting-3.png";
import adjustingFour from "../assets/adjusting-4.png";
import adjustingFive from "../assets/adjusting-5.png";
import automationOne from "../assets/automation-1.png";
import automationTwo from "../assets/automation-2.png";
import automationThree from "../assets/automation-3.png";
import automationFour from "../assets/automation-4.png";
import repricerFrameOne from "../assets/repricer-frame-1.png";
import repricerFrameTwo from "../assets/repricer-frame-2.png";
import repricerFrameThree from "../assets/repricer-frame-3.png";
import benefitOne from "../assets/benefit-1.png";
import benefitTwo from "../assets/benefit-2.png";
import benefitThree from "../assets/benefit-3.png";
import benefitFour from "../assets/benefit-4.png";
import benefitSix from "../assets/benefit-6.png";
import greenArrow from "../assets/green-arrow.png";
import cup from "../assets/cup.png";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      console.log("Email is invalid");
    }
  };

  const [tab, setTab] = useState(1);
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const repricerImages = [
    {
      image: repricerFrameOne,
    },
    {
      image: repricerFrameTwo,
    },
    {
      image: repricerFrameThree,
    },
  ];

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src={repricerFrameOne} style={{ width: "100%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={repricerFrameTwo} style={{ width: "100%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={repricerFrameThree} style={{ width: "100%" }} onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <Fragment>
      <SectionWrapper sx={{ padding: "32px 130px" }}>
        <Box
          sx={{
            minHeight: "32px",
            height: "32px",
          }}
          component="img"
          src={companyLogo}
          alt="Company Logo"
        />
        <StyledBlueButton variant="contained">Start free trial</StyledBlueButton>
      </SectionWrapper>

      <SectionWrapper sx={{ padding: "40px 130px" }}>
        <Box
          sx={{
            maxWidth: "680px",
            width: "680px",
            paddingTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <HeroText>{`With our Ai Repricing, it's\nPrime day…`}</HeroText>
            <HeroText highlighted="true">Every day!</HeroText>
            <HeroSpanText>
              The only Ai Repricer that will automatically boost your Amazon sales by 30%, or we'll pay you $100 for
              wasting your time
            </HeroSpanText>
          </Box>

          <Box>
            <DescriptionStandart style={{ color: "#000", fontWeight: "600", margin: "14px 0px" }}>
              Sign up for free today!
            </DescriptionStandart>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
              <StyledTextField id="message" name="message" placeholder="Email" value={email} onChange={handleChange} />
              <StyledBlueButton type="submit" variant="contained" endIcon={<EastRoundedIcon />}>
                Start free trial
              </StyledBlueButton>
            </form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Box
                sx={{
                  maxWidth: "10px",
                  width: "10px",
                }}
                component="img"
                src={lock}
                alt="Lock Icon"
              />
              <DescriptionExtraSmall>No credit card required</DescriptionExtraSmall>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: "400px",
            width: "400px",
          }}
          component="img"
          src={flyingPeople}
          alt="Company Logo"
        />
      </SectionWrapper>

      <SectionWrapper sx={{ padding: "90px 130px", background: "#1565D8", justifyContent: "space-evenly" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ProfitValue>+64%</ProfitValue>
          <DescriptionMedium style={{ color: "#fff" }}>Boost in Buy Box</DescriptionMedium>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ProfitValue>+30%</ProfitValue>
          <DescriptionMedium style={{ color: "#fff" }}>Increase in sales</DescriptionMedium>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ProfitValue>+25%</ProfitValue>
          <DescriptionMedium style={{ color: "#fff" }}>Increase in profit margin</DescriptionMedium>
        </Box>
      </SectionWrapper>

      <SectionWrapper
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 130px",
          gap: "50px",
          background: "#F1FBFE",
        }}
      >
        <SectionHeaderText>Unveil the extraordinary features that set us apart!</SectionHeaderText>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <Stack direction="column" spacing="30px" marginTop="60px">
            <Box sx={{ width: "370px" }}>
              <BenefitContainer>
                <Box
                  sx={{
                    maxHeight: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={benefitOne}
                  alt="Benefit"
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                  }}
                >
                  <BenefitBoldText>DYNAMIC</BenefitBoldText>
                  <ThinTextBox>
                    <BenefitThinText>PRICING</BenefitThinText>
                  </ThinTextBox>
                </Box>
              </BenefitContainer>
              <DescriptionLarge>
                Adjust to competitor price changes rapidly to keep your products competitive
              </DescriptionLarge>
            </Box>

            <Box sx={{ width: "370px" }}>
              <BenefitContainer>
                <Box
                  sx={{
                    maxHeight: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={benefitTwo}
                  alt="Benefit"
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                  }}
                >
                  <BenefitBoldText>SET STRATEGY</BenefitBoldText>
                  <ThinTextBox>
                    <BenefitThinText>RULES</BenefitThinText>
                  </ThinTextBox>
                </Box>
              </BenefitContainer>
              <DescriptionLarge>Set default rules and competitor's rule</DescriptionLarge>
            </Box>
          </Stack>

          <Stack direction="column" spacing="30px">
            <Box sx={{ width: "370px" }}>
              <BenefitContainer>
                <Box
                  sx={{
                    maxHeight: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={benefitThree}
                  alt="Benefit"
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                  }}
                >
                  <BenefitBoldText>INVENTORY</BenefitBoldText>
                  <ThinTextBox>
                    <BenefitThinText>DASHBOARD</BenefitThinText>
                  </ThinTextBox>
                </Box>
              </BenefitContainer>
              <DescriptionLarge>Overview inventory control dashboard</DescriptionLarge>
            </Box>

            <Box sx={{ width: "370px" }}>
              <BenefitContainer>
                <Box
                  sx={{
                    maxHeight: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={benefitFour}
                  alt="Benefit"
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                  }}
                >
                  <BenefitBoldText>DATA-DRIVEN</BenefitBoldText>
                  <ThinTextBox>
                    <BenefitThinText>FORECASTING</BenefitThinText>
                  </ThinTextBox>
                </Box>
              </BenefitContainer>
              <DescriptionLarge>Predict best outcome based on historical data</DescriptionLarge>
            </Box>
          </Stack>

          <Stack direction="column" spacing="30px" marginTop="60px">
            <Box sx={{ width: "370px" }}>
              <BenefitContainer>
                <Box
                  sx={{
                    maxHeight: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={benefitFour}
                  alt="Benefit"
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                  }}
                >
                  <BenefitBoldText>COMPETITOR</BenefitBoldText>
                  <ThinTextBox>
                    <BenefitThinText>INSIGHTS</BenefitThinText>
                  </ThinTextBox>
                </Box>
              </BenefitContainer>
              <DescriptionLarge>Get actual insights into competitors' behavior</DescriptionLarge>
            </Box>

            <Box sx={{ width: "370px" }}>
              <BenefitContainer>
                <Box
                  sx={{
                    maxHeight: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={benefitSix}
                  alt="Benefit"
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                  }}
                >
                  <BenefitBoldText>AUTO-PRICING</BenefitBoldText>
                  <ThinTextBox>
                    <BenefitThinText>CONTROL</BenefitThinText>
                  </ThinTextBox>
                </Box>
              </BenefitContainer>
              <DescriptionLarge>Automatically set the minimum and maximum prices</DescriptionLarge>
            </Box>
          </Stack>
        </Box>
        <StyledBlueButton type="submit" variant="contained" endIcon={<EastRoundedIcon />}>
          Start free trial
        </StyledBlueButton>
      </SectionWrapper>

      <SectionWrapper
        sx={{
          padding: "90px 130px",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <ShapeOne />
        <ShapeTwo />
        <ShapeThree />

        <SectionHeaderText>
          Optimizing <SectionHeaderTextHighlighted>the metrics that matter</SectionHeaderTextHighlighted> THE MOST
        </SectionHeaderText>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "50px 0px",
          }}
        >
          <Box sx={{ width: "480px", maxWidth: "480px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <Box sx={{ maxWidth: "40px", width: "40px" }} component="img" src={scalesIcon} alt="Scales Icon" />
              <SubtitleText>Sales</SubtitleText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                alignSelf: "stretch",
              }}
            >
              <SubtitleTextSmall>
                Set prices too low, you're losing money, if it's too high, you're chasing customers away.
              </SubtitleTextSmall>
              <DescriptionStandart>
                Our AI repricer supercharges your sales and automatically optimizes your pricing to beat competitors.
                Quickly reprice your listings to stay above competitors and increase sales even in slow months.
              </DescriptionStandart>
            </Box>
          </Box>

          <Box sx={{ width: "480px", maxWidth: "480px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <Box sx={{ maxWidth: "40px", width: "40px" }} component="img" src={marginIcon} alt="Scales Icon" />
              <SubtitleText>Margin</SubtitleText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                alignSelf: "stretch",
              }}
            >
              <SubtitleTextSmall>Your prices determine your Margin.</SubtitleTextSmall>
              <DescriptionStandart>
                With better profit management, you can boost your margin in no time. No wonder sellers that use our
                repricer maximize their profit even when sleeping. You can use our repricer to increase your margin and
                earn an EXTRA 30% profit on every sale.
              </DescriptionStandart>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "480px", maxWidth: "480px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <Box sx={{ maxWidth: "40px", width: "40px" }} component="img" src={buyBoxIcon} alt="Scales Icon" />
            <SubtitleText>Buy Box</SubtitleText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              alignSelf: "stretch",
            }}
          >
            <SubtitleTextSmall>Buy Box supercharges your sales.</SubtitleTextSmall>
            <DescriptionStandart>
              By optimizing your pricing, you can dominate and conquer the Buy Box by at least 63% and boost your sales.
              It's no secret that Sales.Support clients' always own the Buy Box.
            </DescriptionStandart>
          </Box>
        </Box>
      </SectionWrapper>

      <SectionWrapper
        sx={{ position: "relative", padding: "30px 130px", background: "#1565D8", justifyContent: "space-evenly" }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Box
            sx={{ maxWidth: "340px", width: "340px" }}
            component="img"
            src={manMovingForward}
            alt="Man Moving Forward"
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <Box>
            <SectionHeaderText style={{ color: "#fff", marginBottom: "24px" }}>
              Sign up for free today!
            </SectionHeaderText>
            <DescriptionSmall style={{ color: "#fff" }}>*No credit card required</DescriptionSmall>
          </Box>

          <StyledBlueButton
            textColor="#1565D8"
            backgroundColor="#fff"
            variant="contained"
            endIcon={<EastRoundedIcon />}
          >
            Start free trial
          </StyledBlueButton>

          <Box
            sx={{ position: "absolute", right: "130px", bottom: "20px", maxWidth: "350px", width: "350px" }}
            component="img"
            src={decalWhite}
            alt="Decal"
          />
        </Box>
      </SectionWrapper>

      <SectionWrapper
        sx={{
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 130px",
          gap: "50px",
        }}
      >
        <ShapeOne />
        <ShapeTwo />
        <ShapeThree />

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SectionHeaderText sx={{ marginBottom: "8px" }}>
            Set up your <SectionHeaderTextHighlighted>Repricer in less then 5 minutes</SectionHeaderTextHighlighted> or
            else
          </SectionHeaderText>
          <SectionHeaderText>we give you 3 months free!</SectionHeaderText>
          <DescriptionSmall>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</DescriptionSmall>
        </Box>

        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
        />

        <StyledBlueButton variant="contained">Turn On the Repricer NOW</StyledBlueButton>
      </SectionWrapper>

      <SectionWrapper
        sx={{
          position: "relative",
          padding: "90px 130px",
          alignItems: "center",
          flexDirection: "column",
          background: "#0B2447",
        }}
      >
        <SectionHeaderText style={{ marginBottom: "50px", color: "#fff" }}>
          Try our <SectionHeaderTextHighlighted style={{ color: "#fff" }}>unmatchable</SectionHeaderTextHighlighted>{" "}
          benefits
        </SectionHeaderText>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grow in={true}>
              <BlueTile>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                    gap: "20px",
                  }}
                >
                  <Box sx={{ maxWidth: "80px", width: "80px" }} component="img" src={increasing} alt="Increasing" />
                  <SubtitleTextMedium style={{ color: "#fff" }}>Boost sales and attract customers</SubtitleTextMedium>
                </Box>
                <DescriptionSmall style={{ color: "#fff", margin: "0px 0px 24px 10px" }}>
                  Take the hassle out of your repricing, improve your results with data-intensive pricing strategies,
                  optimize sales, enhance customer experience and achieve better results with less work.
                </DescriptionSmall>
              </BlueTile>
            </Grow>
          </Grid>

          <Grid item xs={6}>
            <Grow in={true}>
              <BlueTile>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                    gap: "20px",
                  }}
                >
                  <Box sx={{ maxWidth: "80px", width: "80px" }} component="img" src={timer} alt="Timer" />
                  <SubtitleTextMedium style={{ color: "#fff" }}>
                    Expiration dates… a thing of the past
                  </SubtitleTextMedium>
                </Box>
                <DescriptionSmall style={{ color: "#fff", margin: "0px 0px 0px 10px" }}>
                  Your inventory expiration dates will automatically be recorded against shipment if you utilize just
                  one out of our vast network of warehouses nationwide. In fact, Sales.Support will automatically
                  reprice your products before they expire.
                </DescriptionSmall>
              </BlueTile>
            </Grow>
          </Grid>

          <Grid item xs={6}>
            <Grow in={true}>
              <BlueTile>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                    gap: "20px",
                  }}
                >
                  <Box sx={{ maxWidth: "80px", width: "80px" }} component="img" src={dataReport} alt="Data Report" />
                  <SubtitleTextMedium style={{ color: "#fff" }}>All your cost… in one place</SubtitleTextMedium>
                </Box>
                <DescriptionSmall style={{ color: "#fff", margin: "0px 0px 0px 10px" }}>
                  You can now include your actual prep fees for each SKU. No more dealing with multiple 3PL parties and
                  calculating costs per SKU to add to your P&L, which is always overwhelming. All your 3PL costs are
                  automatically added to each SKU using Sales.Support Warehouses.
                </DescriptionSmall>
              </BlueTile>
            </Grow>
          </Grid>

          <Grid item xs={6}>
            <Grow in={true}>
              <BlueTile>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                    gap: "20px",
                  }}
                >
                  <Box sx={{ maxWidth: "80px", width: "80px" }} component="img" src={diamond} alt="Diamond" />
                  <SubtitleTextMedium style={{ color: "#fff" }}>Ignite your product sales velocity</SubtitleTextMedium>
                </Box>
                <DescriptionSmall style={{ color: "#fff", margin: "0px 0px 0px 10px" }}>
                  Slow-moving inventory costs you money. But do you know it can be avoided and even each sale can be the
                  best one?. Sales.Support ensures your pricing fits the marketplace condition in real-time and earns
                  you extra profit you never knew existed.
                </DescriptionSmall>
              </BlueTile>
            </Grow>
          </Grid>
        </Grid>
        <Box
          sx={{ position: "absolute", left: "130px", bottom: "20px", maxWidth: "350px", width: "350px" }}
          component="img"
          src={decal}
          alt="Decal"
        />
      </SectionWrapper>

      <SectionWrapper
        sx={{
          padding: "90px 130px",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          background: "#F1FBFE",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SectionHeaderText style={{ marginBottom: "8px" }}>
            Top reasons to start using Repricer Support
          </SectionHeaderText>
          <DescriptionSmall>Your all-in-one repricing software now you can...</DescriptionSmall>
        </Box>

        <Box sx={{ padding: "4px", borderRadius: "30px", border: "1px solid #E6E6E6" }}>
          <StyledTab
            label="Managing"
            variant="outlined"
            onClick={() => handleTabChange(1)}
            color={tab === 1 ? "primary" : "default"}
            isActive={tab === 1}
          />
          <StyledTab
            label="Adjusting"
            variant="outlined"
            onClick={() => handleTabChange(2)}
            color={tab === 2 ? "primary" : "default"}
            isActive={tab === 2}
          />
          <StyledTab
            label="Automation"
            variant="outlined"
            onClick={() => handleTabChange(3)}
            color={tab === 3 ? "primary" : "default"}
            isActive={tab === 3}
          />
        </Box>

        <Box>
          <MutableContentBox index={0} isActive={tab === 1}>
            <Stack spacing="40px">
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={managingOne}
                      alt="Store Inventory Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Monitor store inventory and\nreturn rate`}
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={managingTwo}
                      alt="Inventory Control Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Overview inventory control\ndashboard`}
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={managingThree}
                      alt="Inventory Control Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    View SKU-level insight
                  </DescriptionSmall>
                </ReasonContainer>
              </Box>

              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={managingFour}
                      alt="Manage SKUs Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Manage thousands of SKUs\nwithin minutes`}
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={managingFive}
                      alt="Predict Best Outcome Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Predict best outcome based\non historical data`}
                  </DescriptionSmall>
                </ReasonContainer>
              </Box>
            </Stack>
          </MutableContentBox>

          <MutableContentBox index={1} isActive={tab === 2}>
            <Stack spacing="40px">
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={adjustingOne}
                      alt="Store Inventory Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    Access market conditions
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={adjustingTwo}
                      alt="Inventory Control Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Adjust to competitor price\nchanges rapidly`}
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={adjustingThree}
                      alt="Inventory Control Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Alternate pricing strategies\nbased on objective`}
                  </DescriptionSmall>
                </ReasonContainer>
              </Box>

              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={adjustingFour}
                      alt="Manage SKUs Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    Forecast velocity based on sales
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={adjustingFive}
                      alt="Predict Best Outcome Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    Make changes to price in real time
                  </DescriptionSmall>
                </ReasonContainer>
              </Box>
            </Stack>
          </MutableContentBox>

          <MutableContentBox index={2} isActive={tab === 3}>
            <Stack spacing="40px">
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={automationOne}
                      alt="Store Inventory Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    Get Insight into competitors’ behavior
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={automationTwo}
                      alt="Inventory Control Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    {`Automatically set the minimum and\nmaximum prices`}
                  </DescriptionSmall>
                </ReasonContainer>

                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={automationThree}
                      alt="Inventory Control Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    Liquidate slow-moving inventory
                  </DescriptionSmall>
                </ReasonContainer>
              </Box>

              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <ReasonContainer>
                  <ImageRoundContainer>
                    <Box
                      sx={{ maxWidth: "44px", width: "44px" }}
                      component="img"
                      src={automationFour}
                      alt="Manage SKUs Icon"
                    />
                  </ImageRoundContainer>
                  <DescriptionSmall style={{ fontWeight: "600", textAlign: "center" }}>
                    Set default rules and competitor's rule
                  </DescriptionSmall>
                </ReasonContainer>
              </Box>
            </Stack>
          </MutableContentBox>
        </Box>

        <StyledBlueButton type="submit" variant="contained" endIcon={<EastRoundedIcon />}>
          Start free trial
        </StyledBlueButton>
      </SectionWrapper>

      <SectionWrapper
        sx={{
          position: "relative",
          padding: "90px 130px",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          background: "#0B2447",
        }}
      >
        <SectionHeaderTextHighlighted style={{ color: "#fff", fontSize: "3.75rem", lineHeight: "5rem" }}>
          It's time to:
        </SectionHeaderTextHighlighted>

        <Stack direction="row" spacing="20px" alignItems="flex-end">
          <Box>
            <SectionHeaderText style={{ color: "#fff", fontSize: "3rem", lineHeight: "3.8675rem" }}>
              Triple
            </SectionHeaderText>
            <SectionHeaderText style={{ color: "#fff", fontWeight: "400", marginBottom: "12px" }}>
              your Amazon Sales
            </SectionHeaderText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "370px",
                height: "230px",
                borderRadius: "20px",
                background: "#F0E996",
              }}
            >
              <Box sx={{ maxHeight: "60px", height: "60px" }} component="img" src={greenArrow} alt="Logo" />
            </Box>
          </Box>

          <Box>
            <SectionHeaderText style={{ color: "#fff", fontSize: "3rem", lineHeight: "3.8675rem" }}>
              Maximize
            </SectionHeaderText>
            <SectionHeaderText style={{ color: "#fff", fontWeight: "400", marginBottom: "12px" }}>
              your Profit
            </SectionHeaderText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "370px",
                height: "310px",
                borderRadius: "20px",
                background: "#6FD5F6",
              }}
            >
              <StyledBlueButton variant="contained" endIcon={<EastRoundedIcon />}>
                Start free trial
              </StyledBlueButton>
            </Box>
          </Box>

          <Box>
            <SectionHeaderText style={{ color: "#fff", fontSize: "3rem", lineHeight: "3.8675rem" }}>
              Dominate
            </SectionHeaderText>
            <SectionHeaderText style={{ color: "#fff", fontWeight: "400", marginBottom: "12px" }}>
              the Buy Box
            </SectionHeaderText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "370px",
                height: "380px",
                borderRadius: "20px",
                background: "#1565D8",
              }}
            >
              <Box sx={{ maxHeight: "130px", height: "130px" }} component="img" src={cup} alt="Logo" />
            </Box>
          </Box>
        </Stack>
        <SectionHeaderText
          style={{ position: "absolute", color: "#fff", fontWeight: "400", right: "70px", bottom: "20px" }}
        >
          *Guaranteed
        </SectionHeaderText>
      </SectionWrapper>

      <SectionWrapper
        sx={{
          padding: "32px 0px",
          alignItems: "center",
          background: "#00A3FF",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box sx={{ maxHeight: "32px", height: "32px" }} component="img" src={companyLogoWhite} alt="Logo" />
        </Box>
      </SectionWrapper>
    </Fragment>
  );
};

export default LandingPage;
