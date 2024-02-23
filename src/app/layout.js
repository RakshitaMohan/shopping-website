'use client';

import { Layout, Flex, Button } from "antd";
const { Sider, Header, Content } = Layout;
import SideContent from "./components/SideContent.jsx"
import NavbarContent from "./components/NavbarContent.jsx";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout
          style={{
            height: '100vh',
          }}
        >
          <Sider>
            <SideContent />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, backgroundColor: "white" }}>
              <NavbarContent />
            </Header>
            <Content style={{ backgroundColor: "white" }}>
              { children }
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
