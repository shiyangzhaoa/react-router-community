import 'antd/dist/antd.css'

import React from 'react';
import { Carousel } from 'antd'

function onChange(a, b, c) {
  console.log(a, b, c);
}

class AppComponent extends React.Component {
  render() {
    return (
    	<Carousel afterChange={onChange}>
    	<div><img src="../images/1.jpg" height="400" width="100%" alt="image1" /></div>
    		<div><img src="../images/2.jpg" height="400" width="100%" alt="image2" /></div>
    		<div><img src="../images/3.jpg" height="400" width="100%" alt="image3" /></div>
    		<div><img src="../images/4.jpg" height="400" width="100%" alt="image4" /></div>
    		<div><img src="../images/5.jpg" height="400" width="100%" alt="image5" /></div>
    		<div><img src="../images/6.jpg" height="400" width="100%" alt="image6" /></div>
  		</Carousel>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
