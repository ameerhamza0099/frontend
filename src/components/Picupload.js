import React from 'react';
import { useState } from 'react';

const Picupload = () => {
  var picture;
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
    picture = selectedFile;
  

    // You can perform additional actions here, such as file validation
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file);

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('file', file);

      // Make a POST request to the specified URL
      fetch('http://www.xyz.com', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle response data here if needed
        console.log('Upload successful:', data);
      })
      .catch(error => {
        console.error('Error during upload:', error);
      });
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div>
      <div class="card">
  <div class="content">
    <h2>Upload image</h2>
    <input
        type="file"
        accept="image/*" // Accepts all image file types
        onChange={handleFileChange}
        
      />
    
    <button  onClick={handleUpload}>Upload</button>
  </div>
</div>

    </div>
  );
}

export default Picupload;
