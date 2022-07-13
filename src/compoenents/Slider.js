import { View } from 'react-native'
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";


const Slider = () => {

    let images = [
        require("../images/1.jpg"),
        require("../images/2.jpg"),
        require("../images/3.jpg"),
        require("../images/4.jpg"),
    ]

  return (
    <View>
      <SliderBox 
            images={images} 
            ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5}}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
          }}
      />
    </View>
  )
}

export default Slider