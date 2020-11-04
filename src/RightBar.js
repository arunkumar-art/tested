import React, { useState } from 'react';

function RightBar(props) {
  const [Variant, setVariant] = useState();
  const { activeColor } = props;
 

  const renderColor = (data) => {
    return <div style={{ padding: '10px', border: '1px solid #000', marginTop: '10px', height: '185px' }}>
      <div style={{ background: `${(Variant && Variant.color) || data.color}`, width: "150px", height: "150px", float: "left" }}>

      </div>
      <span style={{ marginLeft: '25px', float: "left" }}>
        <p>Product Name: {data.name}</p>
        <p>By: {data.name}</p>
        <p>Price: {(Variant && Variant.cost) || 'Cost'}</p>
        {data.Variant && data.Variant.length ? data.Variant.map(value => {
          return <div onClick={() => updateVariant(value)} style={{ background: `${value.color}`, borderRadius: "20px", width: "20px", margin: "10px", height: "20px" }}>
            <span style={{ marginLeft: '25px' }} >{value.color}</span>
          </div>;
        }) : ""}

      </span>
    </div>;
  }

  const updateVariant = (data) => {
    setVariant(data);
  }

  return (
    <div>
      <div style={{ padding: '10px', border: '1px solid #000' }}>
        {activeColor && activeColor.length > 0 ? activeColor.map(data => renderColor(data)) : props.color.data.map(data => renderColor(data))}
      </div>
    </div>
  );
}

export default RightBar;
