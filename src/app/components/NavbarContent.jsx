import { Typography, Button, Flex, Divider, Input, Dropdown, Avatar, Badge } from 'antd';
import Link from 'next/link';
const { Text } = Typography;
import Icon, {
  UserOutlined,
  DownOutlined,
  BulbOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from '@ant-design/icons';

export default function NavbarContent() {

  const dropdownItems = [
    {
      key: '1',
      label: <Link href='/category/women'>Womens Clothing</Link>
    },
    {
      key: '2',
      label: <Link href='/category/men'>Men Clothing</Link>
    },
    {
      key: '3',
      label: <Link href='/category/kids'> Kids Clothing </Link>
    }
  ];

  return (
    <Flex justify='space-between' style={{ backgroundColor: "white", width: "100%", height: '100%', marginTop: "35px", marginLeft: "40px" }}>
      <Flex gap={8} style={{ backgroundColor: "pink", height: '100%' }}>
        <Flex >
          <Dropdown
            menu={{
              items: dropdownItems
            }}
          >
            <Button style={{ color: "grey", padding: "8px", fontSize: "12px" }}>Gender</Button>
          </Dropdown>
        </Flex>
        <Flex>
          <Input suffix={<SearchOutlined />} placeholder='Search' style={{ backgroundColor: "lightgrey", width: "700px", height: "30px" }}></Input>
        </Flex>
      </Flex>
      <Flex gap={20}>
        <BulbOutlined style={{ fontSize: "25px", marginBottom: "32px" }} />
        <HeartOutlined style={{ fontSize: "25px", marginBottom: "32px" }} />
        <Badge count={1}>
          <ShoppingCartOutlined style={{ fontSize: "28px", marginBottom: "45px", marginTop: "8px" }} />
        </Badge>

        <Divider type='vertical' style={{ height: "45px", marginLeft: "100px" }} />

      </Flex>
      <Flex gap={30}>
        <Avatar size={45} style={{ backgroundColor: '#87d068', border: "1px solid green", backgroundColor: "lightpink" }} icon={<UserOutlined />} />
        <DownOutlined style={{ margin: "0 70px 25px 0", }} />
      </Flex>
    </Flex>
  )
}