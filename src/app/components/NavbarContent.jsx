import { Typography, Button, Flex, Divider, Input, Dropdown, Avatar, Badge } from 'antd';
import Link from 'next/link';
const { Text } = Typography;
import Icon, {
  UserOutlined,
  DownOutlined,
  BulbOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  InboxOutlined,
  TagsOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';

export default function NavbarContent() {

  const dropdownItems = [
    {
      key: '1',
      label: <Link href='/category/women'>Women</Link>
    },
    {
      key: '2',
      label: <Link href='/category/men'>Men</Link>
    },
    {
      key: '3',
      label: <Link href='/category/kids'> Kids</Link>
    }
  ];

  const profileDropdown = [
    {
      key: "a",
      label:(
        <Link href='/orders'> 
          <Flex gap={8}>
          <InboxOutlined />
          <Text>Orders</Text>
          </Flex>
        </Link>
      )
    },
    {
      key: "b",
      label:(
        <Link href='/coupons'> 
          <Flex gap={8}>
          <TagsOutlined />
          <Text>Coupons</Text>
          </Flex>
        </Link>
      )
    },
    {
      key: "c",
      label:(
        <Link href='/helpCenter'> 
          <Flex gap={8}>
          <CustomerServiceOutlined />
          <Text>Help Centre</Text>
          </Flex>
        </Link>
      )
    }
  ];

  return (
    <Flex 
    justify='space-between' 
    style={{ 
      backgroundColor: "white", 
      width: "100%", 
      height: '100%',
      paddingTop: '8px',
      borderBottom: '0.5px solid grey'
      }}
      >
      <Flex 
      gap={24} 
      style={{
        padding: '8px', 
        minWidth: '700px',
        height: '100%' 
        }}>
        <Flex >
          <Dropdown
            menu={{
              items: dropdownItems
            }}
          >
            <Button style={{
               color: "grey", 
               padding: "8px", 
               fontSize: "12px" 
               }}
               >
                Gender
            </Button>
          </Dropdown>
        </Flex>
        <Flex style={{ flex: 1}}>
          <Input 
          suffix={<SearchOutlined />} 
          placeholder='Search' 
          style={{ 
            flex: 1,
            backgroundColor: "lightgrey", 
            height: "30px" 
            }}
            >
          </Input>
        </Flex>
      </Flex>
      <Flex gap={32} align='center' style={{
        marginRight: '32px'
      }} >
      <Flex gap={16} justify='center' align='center'>
        <BulbOutlined style={{ fontSize: "24px" }} />
        <HeartOutlined style={{ fontSize: "24px" }} />
        <Badge count={1}>
        <ShoppingCartOutlined style={{ 
          fontSize: "24px", 
          }} 
        />
        </Badge>
      </Flex>
      <Divider 
        type='vertical' 
        style={{ height: "45px"}} 
      />
      <Flex gap={8} align='center'>
        <Avatar 
          size={45} 
          style={{ 
            backgroundColor: '#87d068', 
            border: "1px solid green", 
            backgroundColor: "lightpink" 
            }}
            icon={<UserOutlined />} 
        />
          <Dropdown menu={{
            items: profileDropdown
          }}>
            <Button
              type='text'
              icon={<DownOutlined />}
            />
          </Dropdown>
      </Flex>
      </Flex>
    </Flex>
  )
}