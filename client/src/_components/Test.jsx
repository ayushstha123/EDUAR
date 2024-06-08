import {
  Box,
  Text,
  Scene,
  Entity,
  MarkerCamera,
  Camera,
  Cursor,
  Marker
} from "react-aframe-ar";

export default function Test() {
  return (
    <Scene>
      {/* <Entity
        id="box"
        geometry={{ primitive: "box" }}
        // material={{color: this.state.color, opacity: 0.6}}
        position={{ x: 0, y: 1, z: -3 }}
        // events={{click: this.changeColor.bind(this)}}
        animation={{
          property: "rotation",
          from: "0 0 0",
          to: "0 360 0",
          dur: 2000,
          dir: "alternate",
          loop: true
        }}
      /> */}
      <Entity
        geometry={{ primitive: "box" }}
        material={{ opacity: 0.8, color: "black" }}
        position={{ x: 0, y: 0.5, z: -3 }}
        scale={{ x: 1, y: 0.5, z: 1 }}
        rotation={{ x: 0, y: -10, z: 5 }}
        animation={{
          property: "rotation",
          // from: {
          //   x: 0,
          //   y: 0,
          //   z: 0
          // },
          // to: {
          //   x: 0,
          //   y: 360,
          //   z: 0
          // },
          from: "0 0 0",
          to: "0 360 0",
          dur: 2000,
          dir: "alternate",
          loop: true
        }}
      />
      <a-marker-camera preset="hiro">
        <Box
          color="#0000ff"
          material={{ opacity: 0.8 }}
          // position="0 0.5 -3"
          scale="1 0.5 1"
          rotation="10 -10 2"
          animation={{
            property: "rotation",
            from: "0 0 0",
            to: "0 360 0",
            dur: 2000,
            dir: "alternate",
            loop: true
          }}
        />
      </a-marker-camera>
      <Camera>
        <Cursor></Cursor>
      </Camera>
    </Scene>
  );
}
