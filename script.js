// Include FilePond Library (assuming downloaded files)
const filePondScript = document.createElement('script');
filePondScript.src = './filepond/filepond.js';
document.head.appendChild(filePondScript);

const filePondStyle = document.createElement('link');
filePondStyle.href = './filepond/filepond.css';
filePondStyle.rel = 'stylesheet';
document.head.appendChild(filePondStyle);

// Create FilePond Element (replace 'filepond-element' with your actual ID)
window.onload = function() {
  const pond = FilePond.create(document.getElementById('filepond-element'));

  // Optional event listeners for upload process (logging to console)
  pond.on('addfile', (file) => {
    console.log('File added:', file);
  });

  pond.on('processfile', (file) => {
    console.log('File processing:', file);
  });

  pond.on('finishfile', (file) => {
    console.log('File upload complete:', file);
  });
};
