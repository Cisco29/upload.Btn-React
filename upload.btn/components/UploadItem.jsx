// UploadItem.jsx (ou le nom de ton fichier)
import React from 'react';

const UploadItem = ({ id, progress }) => {
  const getColor = (percent) => {
    if (percent <= 10) return '#ea28f3'; // 0% à 10%
    if (percent <= 20) return '#0ef'; // 10% à 20%
    if (percent <= 30) return '#0ef'; // 20% à 30%
    if (percent <= 40) return '#0ef'; // 30% à 40%
    if (percent <= 50) return '#0ef'; // 40% à 50%
    if (percent <= 60) return '#0ef'; // 50% à 60%
    if (percent <= 70) return '#0ef'; // 60% à 70%
    if (percent <= 80) return '#0ef'; // 70% à 80%
    if (percent <= 90) return '#0ef'; // 80% à 90%
    return '#4caf50'; // 90% à 100%
  };

  return (
    <div className="upload-item">
      <div>Upload {id}</div>
      <div style={{ color: getColor(progress) }}>{progress}%</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      {/* Ajoute ici les boutons pour annuler et supprimer */}
    </div>
  );
};

export default UploadItem;
