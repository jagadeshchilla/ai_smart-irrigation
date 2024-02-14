import React from 'react'
import UseCasesCard from './UseCasesCard';
import {Col} from 'reactstrap';

const servicesData =[
  {
      title:'Weed detection',
      desc:'Weeds are a notorious enemy of every farmer. They quickly grow, take over crop territories, cause numerous plant diseases, and lower yield. The most widespread way of dealing with weeds is herbicides. While this method is effective, farmers usually shower entire fields with herbicides, causing significant harm to the environment.Computer vision-powered solutions can identify unwanted plants, allowing farmers to apply herbicides to selected areas rather than the whole field. This can drastically decrease the harmful effects of herbicides.',
  },
  {
      title:'Disease detection',
      desc:'Crop diseases are one of the main threats in agriculture that drastically decreases yield quality and quantity. Traditionally, agronomists manually inspect fields and look for signs of crop diseases like curled leaves or wilting, which is time-consuming and error-prone. ML-based image software analysis tools can assess the health of the soil and individual crops, limiting the application of pesticides only to sick plants instead of the whole field.',
  },
  {
      title:'Yield prediction',
      desc:'Yield prediction is critical to the economy both in a global and regional sense. Knowledge of when it is best to harvest the crop and what crops to grow to satisfy market demands is crucial for any farm. Many parameters can influence yield quantity, including environmental factors, phenotypic data, and weather information. Modern ML models can analyze all the factors to increase yield prediction accuracy.',
  },
  {
    title:'Selective breeding',
    desc:'Traditional crop breeding embraces the principle of Mendelian inheritance, stating that one gene controls each trait. However, more recent research has shown that most traits are controlled by multiple genes, which interact with each other and the environment in complex ways. This means that traditional crop breeding methods are often inefficient and can take many generations to produce the desired results.Artificial intelligence, on the other hand, can identify patterns in data that may not be apparent to humans. Therefore, it can more quickly and effectively identify desired traits for breeding.',
},
  
];
const UseCases = () => {
  return (
    <>
        {servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12'className='mb-4' key={index}>
               <UseCasesCard item={item} />
            </Col>
        ))}
    </>
  );
}

export default UseCases