import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View, Text,
  Cylinder, Box } from 'react-vr';


export default class shape_game extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('BRC_scissor_lift.jpg')}></Pano>
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: '#e2fa46',
            transform: [
              {translate: [0, 2, -3]},
              {translateY: 1},
              {translateX: -2.5},
              {rotateY: 45},
              {rotateZ: 45}
            ]
          }}
          />
          <Cylinder
            dimHeight={0.5}
            radiusBottom={0.5}
            radiusTop={0.5}
            segments={15}
            wireframe={true}
            style={{
              color: '#f2d8f0',
              transform: [
                {translate: [0, 1.5, -3]},
                {translateX: -3},
                {rotateY: 45},
                {rotateZ: 45}
              ]
            }}
            />
      </View>
    )
  }
};


AppRegistry.registerComponent('shape_game', () => shape_game);

// Venice photo credit: Sitoo <a href="http://www.flickr.com/photos/7470842@N04/35279275953">360 panorama at Piazza San Marco, Venezia, Italia</a> via <a href="http://photopin.com">photopin</a> <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">(license)</a>