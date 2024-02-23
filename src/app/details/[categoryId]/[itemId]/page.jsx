'use client';
import menData from '../../../data/men/data';
import womenData from '../../../data/women/data';
import kidsData from '../../../data/kids/data';
import { Flex, Typography, Button, Input, Divider } from 'antd';
import {
   HeartOutlined, 
   StarOutlined, 
   EnvironmentOutlined, 
   RightOutlined 
  } from '@ant-design/icons';

const { Text } = Typography;

const detailsMap = {
  men: menData,
  kids: kidsData,
  women: womenData
};

export default function Page({ params }) {
  let { categoryId, itemId } = params;

  let itemDetails = detailsMap[categoryId].find((item) => item.id === itemId);


  return (
    <Flex style={{marginTop:"50px"}} >
      <Flex style={{
        height:"700px", 
        width:"550px", 
        border:"0.5px solid grey", 
        marginLeft:"70px"}}>
          <Flex align='flex-start'>
             <img style={{height:"400px", width:"400px", marginLeft:"52px", marginTop:"16px"}} src={itemDetails.pictures}  />
             <HeartOutlined style={{color:"black", fontSize:"24px", marginTop: '32px', marginLeft:"32px"}} />
          </Flex>
     
      </Flex>
      <Flex 
        style={{
          height:"700px", 
          width:"550px", 
          border:"0.5px solid grey"
        }}
      >
        <Flex style={{
          margin:"8px 0 0 32px"
          }}
        >
        <Flex vertical gap={16} style={{
          padding: '16px'
        }}>
          <Text style={{
            fontSize:"20px"
          }}
          > {itemDetails.name}</Text>
          <Text style={{
            color:"grey",
            fontSize:"16px"
            }}
            > 
          {itemDetails.description}
          </Text>
          <Flex gap={4}>
          {
            itemDetails.rating > 0 ? 
            <Flex>
              {
                Array.apply(null, {length: itemDetails.rating}).map(() => {
                  return <StarOutlined style={{
                    color:"black",
                    marginTop:"12px",
                    fontSize:"24px"
                  }}
                  />
                })
              }
            </Flex> : null
          }
          <Text style={{
            marginTop:"12px",
            fontSize:"16px"
            }}
            > 
            {itemDetails.rating} / 5
          </Text>
          </Flex>
          <Text style={{
            marginTop:"16px",
            fontWeight:"400",
            fontSize:"20px"
            }}
            >
            MRP: {itemDetails.price}
          </Text>
          <Text style={{
            color:"grey"
          }}
          >
          inclusive of all taxes
          </Text>
          <Flex gap={40} style={{marginTop:"16px"}}>
              <Text style={{
                 fontSize:"16px"
              }}
              >
                Select size
              </Text>
              <Flex gap={2}>
              <Flex style={{
                color:"pink", 
                fontWeight:"bold",
                marginTop:"4px"
                }}
                >Size chart
              </Flex>
              <RightOutlined style={{color:"pink"}}/>
              </Flex>  
            </Flex>
          <Flex style={{marginTop:"24px"}}>
            <Flex>
              <Button 
              size='lager' 
              style={{
                backgroundColor:"pink", 
                marginTop:"16px", 
                marginRight:"16px",
                height:"45px",
                width:"200px"
                }} 
              >
                  Add to cart
              </Button>
            </Flex>
            <Divider style={{height:"54px"}} type="vertical" />
            <Flex>
              <Flex vertical gap={4} style={{marginLeft:"16px"}}>
                <Flex gap={4}>
                   <EnvironmentOutlined style={{color:"grey"}} />
                   <Text>Delivery options</Text>
                </Flex>
               
                <Input 
                placeholder='Enter pincode'
                style={{height:"36px", width:"200px"}}
                > 
                </Input>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}


