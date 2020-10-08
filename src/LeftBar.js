import React, {useState} from 'react';
import RightBar from './RightBar';

function LeftBar() {

  return (
    <div>
        <div style={{width: '50%', float: 'left'}}>
            <h3>Portugal</h3>
            <input type="checkbox" label="Hello" /> 
            <label>Hello</label>
            <h3>Nicaragua</h3>
            <input type="checkbox" label="Hello" /> 
            <label>Hello</label>
            <h3>Marshel Island</h3>
            <input type="checkbox" label="Hello" /> 
            <label>Hello 3</label>
        </div>
        <div style={{width: '50%', float: 'right'}}>
            <RightBar />
       </div>
      
    </div>
  );
}

export default LeftBar;
