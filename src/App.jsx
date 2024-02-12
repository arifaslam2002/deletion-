import React, { useState } from 'react';

const FaqAccordion = () => {
  const [faq, setFaq] = useState([
    { title: "Drinks", content: [<ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>]},
    { title: "how is react ", content: "Content 1" },
    { title: "Title 2", content: "Content 2" },
    { title: "Title 2", content: "Content 3" },
    { title: "Title 2", content: "Content 5" },
  ]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faq.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => handleAccordionClick(index)} >
            <span><h1>{item.title} {index === openIndex ? '🔼' : '🔽'}</h1></span>
          </div>
          {index === openIndex && (<div>
             <h3>{item.content}</h3> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
