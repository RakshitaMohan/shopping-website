import { Typography, Button, Flex, Divider, Input, Dropdown, Avatar, Carousel } from 'antd';
import ShoesCards from './Card.jsx';
const { Text } = Typography;

export default function MainContent() {
  return (
    <Flex vertical justify='space-between' style={{ marginTop: "30px" }}>
      <Flex style={{ margin: "30px 0 0 150px" }}>
        <img src='https://www.gyftr.com/blog/wp-content/uploads/2019/12/Bannernew_myntra-3-1.jpg' style={{ height: "250px", width: "1200px" }} />
      </Flex>
      <Flex>
        <Flex style={{ marginTop: "30px" }}>
          <Flex gap={10} style={{ marginLeft: "50px" }}>
            <Text style={{ fontSize: "30px", fontWeight: "lighter" }}>Top</Text>
            <Text style={{ fontSize: "30px" }}> Products</Text>
          </Flex>
          <Button type='default' style={{ border: "none", color: "grey", marginTop: "9px" }}>View all</Button>
        </Flex>
      </Flex>
      <Flex>
        <ShoesCards />
      </Flex>
    </Flex>
  )
}