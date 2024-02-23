import { Typography, Button, Flex, Divider } from 'antd';
import Link from 'next/link';
const { Text } = Typography;
import {
  AppstoreAddOutlined,
  TagsOutlined,
  HomeOutlined,
  TruckOutlined,
  ReadOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';

export default function SideContent() {
  return (
    <Flex style={{ backgroundColor: "white", height: '100%' }}>
      <Flex vertical >
        <Flex vertical>
          <Text style={{ color: "purple", fontSize: "40px", margin: "35px 0 0 15px" }}>Shoppers</Text>
        </Flex>
        <Flex vertical align='flex-start'>
          <h1 style={{ fontWeight: "bold", fontSize: "35px", color: "black", margin: "20px 0 20px 15px" }}>Explore</h1>
          <Link href='/Categories'><Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<AppstoreAddOutlined />}> Categories</Button></Link>
          <Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<TagsOutlined />}>Best offers</Button>
          <Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<HomeOutlined />}>Sell with us</Button>
          <Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<TruckOutlined />}>Track orders</Button>
          <Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<ReadOutlined />}>Blogs</Button>
        </Flex>

        <Flex vertical align='flex-start' style={{ position: "absolute", bottom: "50px" }}>
          <Divider style={{ width: "30px" }} />
          <Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<UserOutlined />}> Account</Button>
          <Button style={{ border: "none", color: "grey", fontSize: "15px" }} icon={<SettingOutlined />}> Settings</Button>
        </Flex>
      </Flex>
    </Flex>

  );
}