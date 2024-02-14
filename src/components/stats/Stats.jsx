import React from 'react';
import './stats.css';
import {Col} from 'reactstrap';
const Stats = () => {
  const data = [
    { title: 'Estimated CAGR of the ML in agriculture market from 2022 to 2030', value: '27%' ,Problem:'Emergen Research'},
    { title: 'Market value of the IoT-enabled agricultural (IoTAg) monitoring by 2025', value: '$4.5 million' ,Problem:'PwC' },
    { title: 'Annual cost of plant diseases to the global economy', value: '$220 billion',Problem:'FAO' },

  ];

  return (
    <div className="market-status-container">
      {data.map((item, index) => (
        <div key={index} className="market-status-item ">
          <Col className='stats1'><b className='b'><p className="market-status-value ">{item.value}</p></b></Col>
          <Col>
          <p className="market-status-title">{item.title}</p>
          <p className='mst'> {item.Problem}</p>
          </Col>
        </div>
      ))}
    </div>
  );
};

export default Stats;