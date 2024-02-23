'use client';
import { Layout, Flex, Button } from "antd";
const { Sider, Header, Content } = Layout;
import SideContent from "./components/SideContent.jsx"
import NavbarContent from "./components/NavbarContent.jsx";
import MainContent from "./components/MainContent";


export default function Page() {
  return (
    <>
    <MainContent />
    </>
  )
}