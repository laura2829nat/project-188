import React from 'react';
import './MediaItem.css';

function MediaItem({ media }) {
  return (
    <div className="media-item">
      <img src={media.url} alt={media.title} />
      <p>{media.title}</p>
    </div>
  );
}

export default MediaItem;
