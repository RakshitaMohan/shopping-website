'use client';

import { Typography, Button, Flex, Divider, Input, Dropdown, Avatar, Carousel } from 'antd';
const { Text } = Typography;

export default function Categories() {
  return (
    <Flex justify='space-between'>
      <Flex gap={40} vertical>
        <Text style={{ fontWeight: "bold", marginTop: "30px", fontSize: "20px" }}> Shop </Text>
        <Flex vertical gap={24}>
          <Flex align='center' justify='space-between' style={{ backgroundColor: "pink", borderRadius: "20px", height: "50px", width: "500px", }}>
            <Text style={{ marginLeft: "8px", fontSize: "16px" }}> Brands </Text>
            <Flex>
              <img style={{ borderRadius: "10px", height: "50px", width: "50px" }} src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2019/04/10.png" />
            </Flex>
          </Flex>
          <Flex style={{ backgroundColor: "pink", borderRadius: "20px" }}>
            <Text>Luxe</Text>
          </Flex>
          <Flex style={{ backgroundColor: "pink", borderRadius: "20px" }}>
            <Text>Bestsellers</Text>
          </Flex>
          <Flex style={{ backgroundColor: "pink", borderRadius: "20px" }}>
            <Text>Makeup</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex style={{ background: "red", width: "400px", height: "100px" }}></Flex>
    </Flex>
  );
}