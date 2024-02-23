'use client';
import menData from '../../data/men/data';
import womenData from '../../data/women/data';
import kidsData from '../../data/kids/data';
import { Flex, Typography } from 'antd';
import { HeartOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'next/link';
const { Text } = Typography;

const detailsMap = {
  men: menData,
  kids: kidsData,
  women: womenData
};

export default function Page({ params }) {
  let { gender } = params;

  let data = detailsMap[gender];

  return (
    <Flex style={{
       backgroundColor: "white",
        color: "black", 
        margin: "24px" 
        }}
        >
      <Flex gap={48} style={{ padding: "24px" }}>
        {
          data.map((card, index) => {
            return (
              <Link href={`/details/${gender}/${card.id}`}>
                <Flex
                  key={index} 
                  vertical 
                  style={{ 
                    border: "0.5px solid grey",
                    padding: "16px" 
                    }}
                    >
                  <img style={{
                     width: '220px', 
                     height: '250px' 
                    }} 
                  src={card.pictures} 
                  />
                  <Text> {card.name}</Text>
                  <Text style={{
                     color: "grey" 
                     }}
                     > 
                     {card.description}
                  </Text>
                  <Flex 
                     key={card.colors} 
                     justify='space-between' 
                     style={{ marginTop: "8px" }}>
                    <Flex gap={16}>
                      {
                        card.colors.map((color, index) => {
                          return (
                            <div key={index} style={{ width: '16px', height: '16px', background: color }}></div>
                          )
                        })
                      }
                    </Flex>
                    <Flex>
                      <Text style={{ fontWeight: "bold" }}>{card.price}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
            )
          })
        }
      </Flex>
    </Flex>
  )
}