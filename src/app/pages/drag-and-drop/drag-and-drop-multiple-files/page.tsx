import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from 'react-icons/io5';

const DragAndDropMultipleFiles = () => {
  const [previews, setPreviews] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newPreviews = [];

    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        newPreviews.push(e.target.result as string);
        if (newPreviews.length === acceptedFiles.length) {
          setPreviews(newPreviews);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    multiple: true
  });

  const handleFileUploadSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Handle the form submission here
  };

  return (
    <div>
      {/* Header and form code remains the same */}
      {previews.length > 0 && (
        <div className='flex justify-center mt-10'>
          {previews.map((preview, index) => (
            <img key={index} className='w-44 h-44 object-cover mr-2' src={preview} alt={`uploaded-${index}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDropMultipleFiles;