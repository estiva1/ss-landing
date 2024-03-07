import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import {
  ColumnContainer,
  Columns,
  Heading,
  Headline,
  Icon1,
  Icon10,
  Icon11,
  Icon12,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  IconRoundBox,
  MobileButtonBox,
  Paragraph,
  ReasonBox,
  ReasonText,
  ReasonsContainer,
  SelectWrapper,
  TabsWrapper,
  Wrapper,
} from "./reasons.styles";
import Dropdown from "../UI/dropdown/dropdown.component";
import { Link } from "react-router-dom";
import CustomButton from "../UI/button/button.component";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    //padding: 0,
    height: "100%",
    justifyContent: "center",
    border: "1px solid #1565D8",
    backgroundColor: "#E8F0FC",
    borderRadius: "40px",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "Titillium Web",
  fontSize: "1.125rem",
  fontWeight: "600",
  lineHeight: "1.25rem",
  color: "#4E5969",
  padding: "13px 50px",
  transition: "color 0.6s ease",
  zIndex: 1,

  ":hover": {
    color: "#1565D8",
    transition: "color 0.6s ease",
  },
  "&.Mui-selected": {
    color: "#1565D8",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

const MotionWrapper = ({ key, children }) => {
  return (
    <motion.div
      key={key}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <MotionWrapper
      role="top-reasons-to-start-using-Repricer-Support-tabpanel"
      //hidden={value !== index}
      id={`top-reasons-to-start-using-Repricer-Support-tabpanel-${index}`}
      aria-labelledby={`top-reasons-to-start-using-Repricer-Support-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </MotionWrapper>
  );
};

const TabProps = (index) => {
  return {
    id: `top-reasons-to-start-using-Repricer-Support-tab-${index}`,
    "aria-controls": `top-reasons-to-start-using-Repricer-Support-tabpanel-${index}`,
  };
};

const Reasons = () => {
  const reasons = [
    {
      icon: <Icon1 />,
      text: "Monitor store inventory and return rate",
    },
    {
      icon: <Icon2 />,
      text: "Overview inventory control dashboard",
    },
    {
      icon: <Icon3 />,
      text: "View SKU-level insight",
    },
    {
      icon: <Icon4 />,
      text: "Predict best outcome based on historical data",
    },
    {
      icon: <Icon5 />,
      text: "Access market conditions",
    },
    {
      icon: <Icon6 />,
      text: "Adjust to competitor price changes rapidly",
    },
    {
      icon: <Icon7 />,
      text: "Alternate pricing strategies based on objective",
    },
    {
      icon: <Icon8 />,
      text: "Forecast velocity based on sales",
    },
    {
      icon: <Icon9 />,
      text: "User access",
    },
    {
      icon: <Icon10 />,
      text: "Invoice adjustments",
    },
    {
      icon: <Icon11 />,
      text: "Client Invoices",
    },
    {
      icon: <Icon12 />,
      text: "Set default rules and competitor's rule",
    },
  ];

  const [tab, setTab] = useState(0);
  const dropdownOptions = ["If you're FBA Seller...", "If you're 3PL Seller...", "If you're Agency..."];

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };
  const handleDropdownChange = (selectedValue) => {
    setTab(selectedValue);
  };

  return (
    <Wrapper>
      <ReasonsContainer>
        <Headline>
          <Heading>Top reasons to start using Repricer Support</Heading>
          <Paragraph>Your all-in-one repricing software now you can...</Paragraph>
        </Headline>
        <Box display="flex" flexDirection="column" width="100%">
          <TabsWrapper>
            <StyledTabs
              value={tab}
              onChange={handleTabChange}
              aria-label="top reasons to start using Repricer Support tabs"
            >
              <StyledTab label="If you're FBA Seller..." {...TabProps(0)} />
              <StyledTab label="If you're 3PL Seller..." {...TabProps(1)} />
              <StyledTab label="If you're Agency..." {...TabProps(2)} />
            </StyledTabs>
          </TabsWrapper>

          <SelectWrapper>
            <Dropdown data={dropdownOptions} setSelectedValue={handleDropdownChange} />
          </SelectWrapper>

          <AnimatePresence mode="wait">
            {tab === 0 && (
              <CustomTabPanel key={0} index={0} value={tab}>
                <Columns>
                  {reasons.slice(0, 4).map((reason, index) => (
                    <ColumnContainer key={index}>
                      <ReasonBox>
                        <IconRoundBox>{reason.icon}</IconRoundBox>
                        <ReasonText>{reason.text}</ReasonText>
                      </ReasonBox>
                    </ColumnContainer>
                  ))}
                </Columns>
              </CustomTabPanel>
            )}
            {tab === 1 && (
              <CustomTabPanel key={1} index={1} value={tab}>
                <Columns>
                  {reasons.slice(4, 8).map((reason, index) => (
                    <ColumnContainer key={index}>
                      <ReasonBox>
                        <IconRoundBox>{reason.icon}</IconRoundBox>
                        <ReasonText>{reason.text}</ReasonText>
                      </ReasonBox>
                    </ColumnContainer>
                  ))}
                </Columns>
              </CustomTabPanel>
            )}
            {tab === 2 && (
              <CustomTabPanel key={2} index={2} value={tab}>
                <Columns>
                  {reasons.slice(8).map((reason, index) => (
                    <ColumnContainer key={index}>
                      <ReasonBox>
                        <IconRoundBox>{reason.icon}</IconRoundBox>
                        <ReasonText>{reason.text}</ReasonText>
                      </ReasonBox>
                    </ColumnContainer>
                  ))}
                </Columns>
              </CustomTabPanel>
            )}
          </AnimatePresence>
        </Box>

        <MobileButtonBox>
          <Link to="/registration">
            <CustomButton variant="contained" endIcon={<EastRoundedIcon />}>
              Start free trial
            </CustomButton>
          </Link>
        </MobileButtonBox>
      </ReasonsContainer>
    </Wrapper>
  );
};

export default Reasons;
