import React, { useState } from 'react';
import RightBar from './RightBar';

function LeftBar() {
  const [color, setColor] = useState({

    data: [{
    
    id: 'PRODUCT_ID_1', name: 'Product1', brand: 'Brand1',color: "red", Variant: [{
    type: 'default',
    
    variationId: 'PRODUCT_ID_1_VAR_ID_0',    
    cost: 123, color: 'red',
    months: ['November', 'December', 'January']
    
    }, {
    
    type: 'variation',
    
    variationId: 'PRODUCT_ID_1_VAR_ID_1', cost: 106,
    color: 'orange',
    
    months: ['November', 'December', 'January']
    
    }]
    
    }, {
    
    id: 'PRODUCT_ID_2',
    
    name: 'Product2', 
    color: "green",
    
    brand: 'Brand2', Variant: [{
    type: 'default',
    
    variationId: 'PRODUCT_ID_2_VAR_ID_0',
    
    cost: 225, color: 'green',
    months: ['January', 'Feburary']
    
    }, {
    
    type: 'variation',
    
    variationId: 'PRODUCT_ID_2_VAR_ID_1', cost: 350,
    color: 'purple',
    
    months: [ 'January', 'February', 'March']    
    }]    
    }]    
    });
    const [activeColor, setActiveColor] = useState();
    const updateColor = (data) => {
      setActiveColor([data]);
    }
    
  return (
    <div>
      <div style={{ width: '30%', padding: '5px', float: 'left', border: '1px solid #000' }}>
        <h3>Filters</h3>

        <div style={{ padding: '10px', border: '1px solid #000' }}>
          <h3>Color</h3>
          <div>
          <div style={{ padding: '10px', border: '1px solid #000' }}>
            {color && color.data && color.data.length>0 ? color.data.map(data=>{
              return <div onClick={()=>updateColor(data)} style={{background:`${data.color}`, borderRadius: "20px", width: "20px", margin:"10px", height: "20px"}}>
              <span style={{marginLeft:'25px'}} >{data.color}</span>
            </div>;
            }):''}
          
          </div>
        </div>
        </div>
      </div>
      <div style={{ width: '69%', float: 'right' }}>
        <RightBar activeColor={activeColor} color={color}/>
      </div>

    </div>
  );
}

export default LeftBar;
