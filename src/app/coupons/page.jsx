'use client';

import { Typography, Flex, } from 'antd';
const { Text } = Typography;

import Icon, {
    CopyOutlined
  } from '@ant-design/icons';


export default function coupons () {
    return(
        <Flex>
            <Flex justify='space-between'>
                <Flex>
                    <img src="" />
                </Flex>
                <Flex vertical>
                    <Text>10% off</Text>
                    <Text>Upto $10 on minimum purchase of $500</Text>
                    <Flex>
                       <Text>Code: INSMA10</Text>
                        <CopyOutlined />
                    </Flex>
                   
                    <Text>Expiry: 1st April 2024</Text>
                </Flex>
            </Flex>
            <Flex></Flex>
            <Flex></Flex>
        </Flex>
    )
}