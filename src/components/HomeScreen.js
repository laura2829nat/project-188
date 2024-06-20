import React, { useState } from 'react';
import MediaItem from './MediaItem';
import './HomeScreen.css';


const mediaData = [
  { id: 1, title: 'Image 1', url: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Image 2', url: 'https://via.placeholder.com/150' },
  // Add more media items as needed
];

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedia = mediaData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-screen">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="media-grid">
        {filteredMedia.map((item) => (
          <MediaItem key={item.id} media={item} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
