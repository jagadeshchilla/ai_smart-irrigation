import React from 'react'
import TechCard from './TechCard';
import {Col} from 'reactstrap';
import iot from '../assets/images/iot.png'
import drone from '../assets/images/drones.png'
import chatbot from '../assets/images/cb.png'


const servicesData =[
    {
        imgUrl:iot,
        title:'Internet of Things',
        desc:'IoT plays a critical role in machine learning for agriculture, as it allows us to measure important factors, including soil moisture, air temperature, and crop health. This data can help farmers identify patterns and make predictions to optimize operations.',
    },
    {
        imgUrl:drone,
        title:'Drones',
        desc:'By using drones, farmers can quickly gather data about their crops, including information on plant health, water levels, and nutrient levels. Additionally, drones can help apply pesticides and herbicides, saving time and money compared to traditional methods.',
    },
    {
        imgUrl:chatbot,
        title:'Chatbots',
        desc:'Chatbots are commonly used to automate customer service or sales tasks. However, chatbots can be a convenient interface for accessing information about crop or livestock conditions. Chatbots can also advise farmers on irrigation and fertilization and assist in financial planning and management',
    },
    
];
const TechList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' md='6' sm='12'className='mb-4' key={index}>
                   <TechCard item={item} />
                </Col>
            ))}
        </>
      );
}

export default TechList