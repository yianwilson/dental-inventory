import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/api/properties')
      .then(res => res.json())
      .then(setProperties);
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {properties.map(p => (
          <div key={p._id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <Link to={`/property/${p._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
