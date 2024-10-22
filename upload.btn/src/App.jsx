import React, { useState } from 'react';
import './App.css';

function App() {
  const [uploads, setUploads] = useState([]);

  const startUpload = () => {
    const newUpload = {
      id: Date.now(),
      progress: 0,
      intervalId: null,
      isCancelled: false,
    };

    newUpload.intervalId = setInterval(() => {
      setUploads((prevUploads) =>
        prevUploads.map((upload) => {
          if (upload.id === newUpload.id) {
            if (upload.progress < 100 && !upload.isCancelled) {
              return { ...upload, progress: upload.progress + 10 };
            }
            clearInterval(upload.intervalId);
            return upload;
          }
          return upload;
        })
      );
    }, 1000);

    setUploads((prevUploads) => [...prevUploads, newUpload]);
  };

  const cancelUpload = (id) => {
    setUploads((prevUploads) =>
      prevUploads.map((upload) => {
        if (upload.id === id) {
          clearInterval(upload.intervalId);
          return { ...upload, isCancelled: true };
        }
        return upload;
      })
    );
  };

  const removeUpload = (id) => {
    setUploads((prevUploads) => prevUploads.filter((upload) => upload.id !== id));
  };

  // Fonction pour obtenir la couleur en fonction du pourcentage
  const getColor = (progress) => {
    if (progress <= 10) return '#ea28f3';
    if (progress <= 20) return '#0ef';
    if (progress <= 30) return '#ea28f3';
    if (progress <= 40) return '#0ef'; // Ajoute d'autres couleurs si nécessaire
    if (progress <= 50) return '#ea28f3';
    if (progress <= 60) return '#0ef';
    if (progress <= 70) return '#ea28f3';
    if (progress <= 80) return '#0ef';
    if (progress <= 90) return '#ea28f3';
    return '#4caf50'; // 100%
  };

  return (
    <div className="App">
      <h1>Upload Simulation</h1>
      <button onClick={startUpload}>Upload</button>
      <div style={{ marginTop: '20px' }}>
        {uploads.map((upload) => (
          <div key={upload.id} className="upload-item">
            <div style={{ color: getColor(upload.progress) }}>
              Progress: {upload.progress}%
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${upload.progress}%` }}
              ></div>
            </div>
            {upload.progress < 100 && !upload.isCancelled && (
              <button onClick={() => cancelUpload(upload.id)}>Cancel</button>
            )}
            {upload.isCancelled ? (
              <button onClick={() => removeUpload(upload.id)}>Remove</button>
            ) : (
              upload.progress === 100 && (
                <button onClick={() => removeUpload(upload.id)}>Remove</button>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
