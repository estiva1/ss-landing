import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/button/button.component";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import ScrollReveal from "../../utils/framer-animations/scroll-reveal/simple-scroll-reveal/scroll-reveal.component";

import product1 from "../../assets/products/product-1.png";
import product2 from "../../assets/products/product-2.png";
import product3 from "../../assets/products/product-3.png";
import product4 from "../../assets/products/product-4.png";
import product5 from "../../assets/products/product-5.png";
import product6 from "../../assets/products/product-6.png";
import product7 from "../../assets/products/product-7.png";
import product8 from "../../assets/products/product-8.png";

import {
  About,
  Caption,
  Description,
  Heading,
  MobileButtonBox,
  ProductContainer,
  ProductImage,
  ProductsContainer,
  ProductsList,
} from "./products.styles";

const Products = () => {
  const products = [
    {
      image: product1,
      caption: "Catalog Analyzer",
      description:
        "Gain a competitive edge by accessing detailed market insights. The Catalog Analyzer provides a comprehensive overview of your product catalog, allowing you to identify trends, monitor competitor pricing strategies, and spot lucrative opportunities in real-time.",
    },
    {
      image: product2,
      caption: "All-in-one Vendors CRM",
      description:
        "Elevate your negotiation game with data-driven insights. The Vendor CRM empowers you to analyze vendor performance, track historical interactions, and negotiate pricing terms that align with your business objectives. Achieve win-win agreements and establish mutually beneficial partnerships.",
    },
    {
      image: product3,
      caption: "Team Task Manager",
      description:
        "Keep a close eye on your orders and optimize fulfillment processes effortlessly. Built-in Catalog Task Manager provides real-time tracking, order status updates, and insights into fulfillment performance. Streamline operations, reduce delays, and enhance customer satisfaction through efficient order management.",
    },
    {
      image: product4,
      caption: "Detailed PO View Analytics",
      description:
        "Achieve a transparent view of costs associated with each purchase order. Detailed PO View Analytics breaks down costs at a granular level, including product costs, shipping expenses, and any additional.",
    },
    {
      image: product5,
      caption: "Nationwide 3PL Integration",
      description:
        "Streamline your order fulfillment process with our 3PL integration. Easily connect with your preferred third-party logistics providers to ensure orders are processed swiftly and accurately. Experience the efficiency of automated order routing, reducing delays and enhancing overall fulfillment speed.",
    },
    {
      image: product6,
      caption: "Integrated PO Builder",
      description:
        "Simplify the purchase order creation process with our intuitive PO Builder. Easily generate comprehensive purchase orders tailored to your specific needs, eliminating manual errors and ensuring a smooth procurement workflow.",
    },
    {
      image: product7,
      caption: "2D FBA Inbound Flow",
      description:
        "Gain comprehensive visibility into your FBA inbound inventory. The integration seamlessly syncs with your inventory management system, providing real-time updates on stock levels, expected delivery dates, and fulfillment center locations. Effortlessly manage your inventory and avoid stockouts with enhanced visibility.",
    },
    {
      image: product8,
      caption: "Agency View",
      description:
        "Scale your agency seamlessly by efficiently managing and expanding your client portfolio. The Agency View is designed for scalability, allowing you to onboard new clients effortlessly and manage diverse accounts with ease. Focus on strategic growth without compromising on operational efficiency.",
    },
  ];

  return (
    <ProductsContainer>
      <ScrollReveal index={1}>
        <Heading>
          Not just Repricing, unleash&nbsp;
          <span>
            <Heading highlighted>the full suite of products&nbsp;</Heading>
          </span>
        </Heading>
      </ScrollReveal>

      <ProductsList>
        {products.map((product, index) => (
          <ProductContainer key={index}>
            <ScrollReveal index={index % 2 === 0 ? 1 : 2}>
              <About>
                <Caption>{product.caption}</Caption>
                <Description>{product.description}</Description>
              </About>
            </ScrollReveal>

            <ScrollReveal index={index % 2 === 0 ? 2 : 1}>
              <ProductImage src={product.image} />
            </ScrollReveal>
          </ProductContainer>
        ))}
      </ProductsList>

      <MobileButtonBox>
        <Link to="/registration">
          <CustomButton variant="contained" endIcon={<EastRoundedIcon />}>
            Start free trial
          </CustomButton>
        </Link>
      </MobileButtonBox>
    </ProductsContainer>
  );
};

export default Products;
