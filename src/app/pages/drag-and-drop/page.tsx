'use client';
import React, { useState, useCallback } from 'react';
import Header from '@/components/Header/page';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from 'react-icons/io5';

const DragAndDrop = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>();

  const onDrop = useCallback((acceptedFiles: FileList) => {
    const file = new FileReader;
    file.onload = function () {
      setPreview(file.result);
    };
    
    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const handleFileUploadSubmit = async(e: React.SyntheticEvent) => {
    e.preventDefault();

    if (typeof acceptedFiles[0] === 'undefined') return;

    const formData = new FormData();

    formData.append('file', acceptedFiles[0]);

  };

  console.log(preview)

    return (
      <div>
        <Header />
        <form onSubmit={handleFileUploadSubmit} className='flex justify-center flex-col w-full items-center mt-20'>
          <div className='border border-dotted border-gray-100 bg-slate-300/20 w-1/3 py-14 cursor-pointer' {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <div className='flex justify-center flex-col items-center'>
                  <IoCloudUploadOutline size={28} />
                  <p>Drag and drop files here</p>
                </div>
            }
          </div>
          {/* <button type='submit'>submit</button> */}
        </form>
        {preview && <div className='flex justify-center mt-10'><img className='w-44 h-44 object-cover' src={`${preview}`} alt='image uploaded' /></div>}
      </div>
    );
  };

  export default DragAndDrop;