import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SubscribeEmail = () => (
  <Html>
    <Head />
    <Preview>Thank you for subscribing</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.png`}
          width="42"
          height="42"
          alt="Humanity 2.0"
          style={logo}
        />
        <Heading style={heading}>
          Thank You for Subscribing to Humanity 2.0.
        </Heading>
        <Text style={paragraph}>
          We will send you a note when we have something new to share. Thank you
          for your patience.
        </Text>
        <Hr style={hr} />
        <Link href={baseUrl} style={reportLink}>
          Humanity 2.0
        </Link>
      </Container>
    </Body>
  </Html>
);

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#000501",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#fff",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#e5e5e5",
};

const reportLink = {
  fontSize: "14px",
  color: "#7f7f7f",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "42px 0 26px",
};
