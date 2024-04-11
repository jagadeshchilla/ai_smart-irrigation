import React from 'react'
import Card from './card'
import {Col} from 'reactstrap';
import vision from '../assets/images/vision.png'
import mission from '../assets/images/mission1.png'
import strategies from '../assets/images/strategies.png'

const servicesData =[
    {
        imgUrl:mission,
        title:'mission',
        desc:'Our mission is to empower farmers with a smart irrigation system that not only conserves water but also ensures that crops receive precisely what they need for optimal growth. We are committed to reducing waste and enhancing crop health through innovation, thus supporting sustainable agricultural practices that can thrive in the face of climate change and resource limitations.',
    },
    {
        imgUrl: vision,
        title:'vision',
        desc:'Our vision is to lead the transformation in agricultural practices worldwide through AI-driven technologies. We envision a future where our irrigation system becomes an indispensable tool for farmers, enabling them to achieve higher yields, utilize resources more efficiently, and contribute to a healthier planet by saving water and promoting sustainable farming methods.',
    },
    {
        imgUrl: strategies,
        title:'strategies',
        desc:'To achieve our vision and mission, our strategy encompasses developing and refining AI models for precision irrigation tailored to diverse crops , leveraging drone technology for precise, real-time crop health and growth insights, and providing a unified remote management system for easier farm oversight and engage with agricultural communities for customized solutions  ',
    },
    
];
const list = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' md='6' sm='12'className='mb-4' key={index}>
                   <Card item={item}/>
                </Col>
            ))}
        </>
      );
}

export default list