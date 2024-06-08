import React, { useEffect, useState } from 'react';
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { java } from '@codemirror/lang-java';
// import { python } from '@codemirror/lang-python';
import Button from '@/_components/Button';
// import ARView from '@/_components/ARView';
// import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
// import { AppScene } from '@/pages/Playground/AppScene';
// import FileUploadForm from './FileUploadForm';
import CreatePostDialog from './CreatePostDialog';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllPostsQuery } from '@/slices/api/api.post';
import { setPostData } from "@/slices/postSlice"
import { Link } from 'react-router-dom';

const Models = () => {
  const currentUser = useSelector((state) => state.auth.userInfo || []);
  const { data: fetchedPosts } = useGetAllPostsQuery();
  const { data: posts } = useSelector(state => state.post || [])
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetchedPosts", fetchedPosts)
    if (fetchedPosts) {
      console.log("feteched", fetchedPosts);
      dispatch(setPostData(fetchedPosts))
    }
    console.log("posts", posts)
  }, [dispatch, fetchedPosts, setPostData])


  return (
    <main className="flex flex-col items-center justify-center">
      {currentUser.role === "admin" && (

        <CreatePostDialog className="w-full" trigger={
          <Button className='ml-auto rounded-full uppercase'>
            Create Post
          </Button>
        } />
      )}
      <div className="flex flex-col lg:flex-row" >
        <model-viewer src="http://localhost:5000/file/bookcase.glb" camera-controls disable-pan shadow-intensity="1" auto-rotate ar ar-modes="scene-viewer webxr quick-look" tone-mapping="neutral" poster="poster.png" disable-zoom></model-viewer>
        <model-viewer src="http://localhost:5000/file/laptop.glb" camera-controls disable-pan shadow-intensity="1" auto-rotate ar ar-modes="scene-viewer webxr quick-look" tone-mapping="neutral" poster="poster.png" ></model-viewer>
        <model-viewer src="http://localhost:5000/file/mcintosh.glb" camera-controls disable-pan shadow-intensity="1" auto-rotate ar ar-modes="scene-viewer webxr quick-look" tone-mapping="neutral" poster="poster.png"  ></model-viewer>
        <model-viewer src="http://localhost:5000/file/stylized_magic_books.glb" camera-controls disable-pan shadow-intensity="1" auto-rotate ar ar-modes="scene-viewer webxr quick-look" tone-mapping="neutral" poster="poster.png" ></model-viewer>
        {/* <model-viewer src="https://drive.google.com/uc?export=download&id=16AXv5T0FEIazG_pJWCC3603-s9l-HM8E
" camera-controls disable-pan shadow-intensity="1" auto-rotate disable-tap
        poster="shark.jpg" /> */}
      </div>

      {/* posts */}
      <div className="mx-20 grid lg:grid-cols-3 gap-5" >
        {posts?.map((post) => {
          console.log("post", post)
          return (
            <Link to={`/models/post/${post.slug}`} key={post._id}>
              <div className="p-4 bg-white border rounded-xl shadow-md">
                <h3 className="text-2xl font-bold">{post.name}</h3>
                <p>{post.content}</p>
                <p>{post.category}</p>
                <div>
                  <model-viewer src={`http://localhost:5000/file/${post.file}`} camera-controls disable-pan shadow-intensity="1" auto-rotate ar ar-modes="scene-viewer webxr quick-look" tone-mapping="neutral" poster="poster.png"></model-viewer>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      {/* <div className='w-[50%] relative z-[-1]'> */}
      {/* <AppScene /> */}
      {/* </div> */}
    </main>
  )
}



export default Models;
