'use client';

import { Typography, Flex, } from 'antd';
const { Text } = Typography;

export default function helpCenter () {
    return(
        <Flex>
            <Flex vertical>
               <Text>Help Center</Text>
               <Text>Please get in touch and we will be happy to hel you</Text>
            </Flex>
            <Text>NEED HELP WITH RECENT PURCHASESE?</Text>
            
        </Flex>
    )
}