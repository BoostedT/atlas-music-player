import React from 'react';
import placeholder from '../assets/placeholder.svg';

export default function CoverArt({ src, size = 200 }) {
  const styles = {
    width: size,
    height: size,
    objectFit: 'cover',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  };
  return (
    <img
      src={src || placeholder}
      alt="Cover Art"
      style={styles}
    />
  );
}
