import { Typography, Button, Flex, Divider, Carousel, Input, Dropdown, Avatar, Badge } from 'antd';
const { Text } = Typography;

export default function Card() {
  const cards = [
    {
      name: 'Black dress',
      id: '1',
      colors: ['black'],
      price: '$34',
      pictures: [
        'https://static.zara.net/photos///2024/V/0/1/p/3564/057/800/2/w/412/3564057800_1_1_1.jpg?ts=1707333967458',
        'https://static.zara.net/photos///2023/I/0/1/p/7802/636/800/2/w/1920/7802636800_1_1_1.jpg?ts=1685626667372',
        'https://media.karousell.com/media/photos/products/2023/1/9/zara__contrasting_collar_fitte_1673259450_4face79a_progressive'
      ]
    },
    {
      name: "Forever new maxi dress",
      id: "2",
      colors: ["purple", "pink"],
      price: "$30",
      pictures: [
        'https://www.forevernew.co.in//pub/media/catalog/product/cache/ba238378db42b44974dffcb9b705dc9e/o/l/oldimlall_onbody_28425606_f.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPC022T_V3dU7hcVQR3qZfyRDglHUOXLXniWf016bQ4Sl4xIh7c404peJ4ARb0zf1keys&usqp=CAU',
        'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/707/2518/100/1/134859940_134915380/134859940_134915380_1_720x928.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr4iqLxYVpD7U2QXIURl0IAJdaoMeyzn4wB4M7GTEc0ovBVFlMx_ribhJv07yhB3e_Lo&usqp=CAU'
      ]
    },
    {
      name: "Little box top",
      id: "3",
      colors: ["skyblue"],
      price: "$10",
      pictures: ["https://littleboxindia.com/cdn/shop/products/ccf5db56f64e4ed81fd22bafae41bbe7_900x.jpg?v=1685345737"]
    },
    {
      name: "Peach plain top",
      id: "4",
      colors: ["peach"],
      price: "$11",
      pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBElvpW9PXr2GoLkvGqc-tfbGz5wNavEhFQ&usqp=CAU"]
    },
    {
      name: "Floral top",
      id: "5",
      colors: ["pink"],
      price: "$20",
      pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgV_5FZpCpRk_pnyYeLeP4wb7ckDWBmyCb8AxRQ_Nv6LFph2BW52dFKMhawztriyZcmmc&usqp=CAU"]
    },
    {
      name: "Vero Moda top",
      id: "6",
      colors: ["pink"],
      price: "$25",
      pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfPt5wpd37kD1JMxUGEKM0sqHzAvKfI_wBg&usqp=CAU"]
    }
  ];

  return (
    <Flex style={{ marginLeft: "10px" }}>
      <Flex gap={15} style={{ padding: "24px" }}>
        {
          cards.map((card) => {
            return (
              <Flex key={card.name} vertical style={{ marginLeft: "20px" }} >
                <div style={{ width: '220px', style: '250px', border: "0.5px solid grey" }}>
                  <Carousel>
                    {
                      card.pictures.map((picture) => {
                        return (
                          <div key={picture} style={{ width: '250px', height: '250px' }}>
                            <img style={{ width: '250px', height: '250px' }} src={picture} />
                          </div>
                        )
                      })
                    }
                  </Carousel>
                </div>
                <Text>{card.name}</Text>
                <Flex justify='space-between'>
                  <Flex>
                    {
                      card.colors.map((color) => {
                        return <div key={color} style={{ width: '16px', height: '16px', background: color }} />
                      })
                    }
                  </Flex>
                  <Text>{card.price}</Text>
                </Flex>
              </Flex>
            )
          })
        }
      </Flex>
    </Flex>
  )
};