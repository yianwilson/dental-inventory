import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
      .then(res => res.json())
      .then(setProperty);
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Address: {property.address}</p>
      <p>Price: ${property.price}</p>
      {property.images.map(img => (
        <img key={img} src={`/${img}`} alt="" width="200" />
      ))}
    </div>
  );
}
