import React from 'react';
// import 'aframe';
// import 'ar.js';

const ARView = () => {
  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity
          gltf-model="url(path/to/your/model.glb)"
          scale="0.1 0.1 0.1"
          position="0 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARView;
