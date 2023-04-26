import { BASE_URL } from "@/lib/constants";
import { formatKey } from "@/lib/helpers";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const AdminEmail = ({
  title,
  data,
}: {
  title: string;
  data: Record<string, string>;
}) => (
  <Html>
    <Head />
    <Preview>{title}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${BASE_URL.toString()}/email-logo.png`}
          width="42"
          height="42"
          alt="Humanity 2.0"
          style={logo}
        />
        <Heading style={heading}>{title}</Heading>
        <Text style={paragraph}>You have a new form submission:</Text>
        <Text style={paragraph}>
          <table>
            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td style={tdStyle}>
                    <strong style={{ color: "#fff" }}>{formatKey(key)}</strong>
                  </td>
                  <td style={tdStyle}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Text>
        <Hr style={hr} />
        <Link href={BASE_URL.toString()} style={reportLink}>
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
  padding: "20px 16px 48px",
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
  borderColor: "#5f5f5f",
  margin: "42px 0 26px",
};

const tdStyle = {
  padding: "6px 6px 6px 6px",
  color: "#e5e5e5",
};
