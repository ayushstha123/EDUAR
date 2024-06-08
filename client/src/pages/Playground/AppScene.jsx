import React from 'react';
import { Entity, Box, Sphere, Cylinder, Plane, Sky, Text, Scene } from 'react-aframe-ar';
import { useSelector } from 'react-redux';

// Helper function to render the geometric shape based on the selected value
const renderShape = (value) => {
  switch (value) {
    case 'cube':
      return <Box position="0 1.5 -5" rotation="0 45 0" color="#4CC3D9" shadow />;
    case 'sphere':
      return <Sphere position="0 2.25 -5" radius="1.25" color="#EF2D5E" shadow />;
    case 'doughnut':
      return (
        <>
          <Entity
            geometry={{ primitive: 'torus', radius: 2, tube: 0.2 }} // Adjust radius and tube
            position="0 3 -5"
            color="#4CC3D9"
          />
          <Entity particle-system={{ preset: 'snow' }} />
        </>
      );
    case 'cylinder':
      return (
        <Cylinder
          position="0 2.25 -5"
          radius="1.5"
          height="2.5"
          color="#FFC65D"
          style={{ fontWeight: "800" }}
          shadow
          animation__position="property: position; to: 0 3.5 -5; dur: 4000; easing: easeInOutQuad; loop: true"
        />
      );
    case 'all':
      return (
        <>
          <Text value="CUBE" align="center" position="0 1.5 1" color="black" style={{ fontWeight: "800" }} />
          <Box position="0 1.5 0" color="#4CC3D9" shadow />
          <Text value="SPHERE" align="center" position="3 1.5 -7" color="black" />
          <Sphere position="3 1.5 -10" radius="1.25" color="#EF2D5E" shadow />

          <Text value="GEOMETRY" align="center" position="0 2.3 -1.5" color="black" shadow />
          <Text value="CYLINDER" align="center" position="0 1.7 -16" color="black" shadow />
          <Cylinder
            position="0 2.3 -20"
            radius="1.5"
            height="2.5"
            color="#FFC65D"
            shadow
          // animation__position="property: position; to: 0 3.5 -5; dur: 4000; easing: easeInOutQuad; loop: true"
          />
          <Text value="TORUS" align="center" position="0.5 2.3 -31" color="black" shadow />
          <Entity
            geometry={{ primitive: 'torus', radius: 2, tube: 0.2 }} // Adjust radius and tube
            position="0 3.5 -35"
            color="#4CC3D9"
            shadow
          />
          <Entity
            geometry={{ primitive: 'box', width: 2 }}
            material={{ color: "#B2B2B2", roughness: 0.5 }}
            scale={{ x: 2, y: 2, z: 2 }}
            position={{ x: -20, y: 0, z: -50 }} />
          <Entity
            geometry={{ primitive: 'box', width: 6 }}
            material={{ color: "#B2B2B2", roughness: 0.5 }}
            scale={{ x: 2, y: 4, z: 2 }}
            position={{ x: -6, y: 0, z: -50 }} />
          <Entity mixin="boldFont" text-geometry="value: What's up" position={{ x: -6, y: 0, z: -50 }} />
          <Entity text-geometry="value: Dog?; font: #optimerBoldFont" position={{ x: -6, y: 0, z: -50 }} />
          <Plane src="https://as2.ftcdn.net/v2/jpg/03/63/69/27/1000_F_363692799_3doLOkDBrNjOVOKlXQvCPgdmZtbBPgCI.jpg" position="0 0 -4" rotation="-90 0 0" width="100" height="100" color="#b2b2b2" opacity="0.2" shadow />
        </>
      )
    default:
      return null;
  }
};

// Helper function to render the sky based on the selected value
const renderSky = (value) => {
  if (value === 'backroom') {
    return <Sky src="https://weloobe.github.io/vr360expo/static_assets/chess-world.jpg" />;
  }
  if (value === 'scene1') {
    return <Sky src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg" />;
  }
  // if (value === 'scene2') {
  //   return <Sky src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cadab4b-b258-42f8-94c7-7fa15e6d2bbf/dcdt9pg-1c376f48-392b-4bf9-a9e0-8055d026952e.jpg/v1/fill/w_1024,h_512,q_75,strp/exoplanet_panorama_by_my_rho_dcdt9pg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvM2NhZGFiNGItYjI1OC00MmY4LTk0YzctN2ZhMTVlNmQyYmJmXC9kY2R0OXBnLTFjMzc2ZjQ4LTM5MmItNGJmOS1hOWUwLTgwNTVkMDI2OTUyZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uLT3Xc9g_SFMPlwJ6b6zi4U8wZDo5rCwJg76AZVfouw" />;
  // }
  // if (value === 'scene3') {
  //   return <Sky src="https://www.jamesfmackenzie.com/img/posts/equirectangular-pano.png" />;
  // }
  if (value === 'scene4') {
    return <Sky src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f110c028-627b-4e5a-a0fc-54fd9ed17ca4/da6uf3d-a64d7599-febc-4b02-87af-85fa85b82a26.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMTBjMDI4LTYyN2ItNGU1YS1hMGZjLTU0ZmQ5ZWQxN2NhNFwvZGE2dWYzZC1hNjRkNzU5OS1mZWJjLTRiMDItODdhZi04NWZhODViODJhMjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sTDCB7qGnGxKw-ZO7uPPbppzUB92eGPCD5tSqnebRug" />;
  }
  // if (value === 'scene5') {
  //   return <Sky src="https://live.staticflickr.com/878/41015130582_aa32145134_h.jpg" />;
  // }
  return <Sky src="" color="#8cdeff" />;
};

// Helper function to render the plane and texts if the value is not "backroom"
const renderEnvironment = (value) => {
  const isNotScene = value !== 'backroom' && value !== 'scene1' && value !== 'scene2' && value !== 'scene3' && value !== 'scene4' && value !== 'scene5'
  if (isNotScene) {
    return (
      <>
        <Plane position="0 0 -4" rotation="-90 0 0" width="100" height="100" color="#70b3b3" shadow />
        {value !== 'all' &&
          <Text value="GEOMETRY" align="center" position="0 2.3 -1.5" color="black" />
        }
        {/* <Text value="LEARN ABOUT SHAPES" align="center" position="1 2.3 -10.5" color="black" /> */}
      </>
    );
  }
  return null;
};

export const AppScene = () => {
  const value = useSelector(state => state.scene.data || "sphere");

  return (
    <div style={{ width: '50%', height: '50vh', zIndex: "-1" }}> {/* Set width to 50% */}
      <Scene className="w-full h-full"> {/* Set Scene to fill the container */}
        {renderShape(value)}
        {renderSky(value)}
        {renderEnvironment(value)}

        {/* Additional shapes (commented out) */}
        {/* <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Sphere position="2 0.5 4" radius="0.25" height="0.25" color="#ffffff" shadow />
        <Cylinder position="3 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Cylinder position="4 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Cylinder position="5 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Cylinder position="7 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Entity geometry={{ primitive: 'box', width: 5, height: 3 }} position="0 0 -5" color="#ffffff" />
        <Entity
          geometry={{ primitive: 'torus', radius: 2, tube: 0.5 }}
          position="0 1.5 -5"
          color="#4CC3D9"
        /> */}
        {/* <Entity
          geometry={{ primitive: 'sphere', radius: 2 }}
          position="0 1.5 -5"
          material={{ src: 'url(../assets/36.png)' }}
        /> */}
      </Scene>
    </div>
  );
};
