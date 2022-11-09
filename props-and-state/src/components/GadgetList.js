import React from 'react';

const GadgetList = (props) => {
  
  const itemPriceStyle = {
    borderBottom: "solid grey 1px",
    color: "red"
  }

  return (
    <main>
      <h3>Headphones</h3>
      {props.items.map((item) => (<div key={item.title}>
        <img src={item.src} alt={item.title} />
        <h4>{item.title}</h4>
        <h4 style={itemPriceStyle}>£{item.price}</h4>
        </div>))}
      
    </main>
  );
}

export default GadgetList;
