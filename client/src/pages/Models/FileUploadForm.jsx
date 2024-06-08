import Button from '@/_components/Button';
import { Input } from '@/components/ui/input';
import { useCreatePostMutation, useUploadFileMutation } from '@/slices/api/api.post';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const FileUploadForm = () => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const currentUser = useSelector((state) => state.auth.userInfo || []);
  const [createPost, { data: createdPost }] = useCreatePostMutation();
  const [uploadFile] = useUploadFileMutation();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (data) => {
    console.log("submitted : ", { file: file.name, ...data })
    console.log("file: ", file)

    if (!file) {
      console.error('No file selected.');
      return;
    }
    const fileData = new FormData();
    fileData.append('file', file);

    try {
      const fileResponse = uploadFile(fileData).unwrap();
      console.log("fileresponse", fileResponse);
      
      if (!fileResponse) {
        return console.log("error uploading file");
      }
      const res = await createPost({ file: file.name, ...data }).unwrap();
      console.log("created post", res);

    } catch (error) {
      console.log("couldnot create", error);
    }
  }

  // const{handleSubmifalse,bmit)}= async (event) => {
  //   event.preventDefault();

  //   if (!file) {
  //     console.error('No file selected');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await fetch('http://localhost:5000/upload', {
  //       method: 'POST',
  //       body: formData
  //     });

  //     if (response.ok) {
  //       console.log('File uploaded successfully');
  //     } else {
  //       console.error('Failed to upload file:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* NAME */}
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input
          type="name"
          id="name"
          {...register('name')}
          className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      {/* CONTENT */}
      <div className="relative mb-4">
        <label htmlFor="content" className="leading-7 text-sm text-gray-600">Content</label>
        <textarea
          id="content"
          {...register('content')}
          className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      {/* Category */}
      <div className="relative mb-4">
        <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
        <Input
          id="category"
          {...register('category')}
          className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></Input>
      </div>

      {/* FILE INPUT */}
      <div>
        <label htmlFor="fileInput">Choose a GLB file:</label>
        <input type="file" id="fileInput" accept=".glb" onChange={handleFileChange} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FileUploadForm;
