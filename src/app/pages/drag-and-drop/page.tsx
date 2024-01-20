'use client';
import React, { useState } from 'react';
import Header from '@/components/Header/page';

const DragAndDrop = () => {
  const [file, setFile] = useState<File | undefined>();

  const handleFileUploadSubmit = async(e: React.SyntheticEvent) => {
    e.preventDefault();

    if (typeof file === 'undefined') return;

    const formData = new FormData();

    formData.append('file', file);
    
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList
    };
    const file = new FileReader;

    file.onload = function () {
      // if (typeof file.result !== 'string') return;

      // setFile(target.files[0]);

      console.log('file', file.result);
    };
    
    file.readAsDataURL(target.files[0])
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleFileUploadSubmit} className='flex justify-center flex-col w-full items-center'>
        <div>
          <input
            name='image'
            accept='image/png, image/jpg'
            type='file'
            onChange={handleOnChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DragAndDrop;