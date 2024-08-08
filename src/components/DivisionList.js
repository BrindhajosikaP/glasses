import React from 'react';
import DivisionCard from './DivisionCard';
import './DivisionList.css';

import polarizedImage from '../assets/categories/polarizedmod1.jpg';
import sportsImage from '../assets/categories/sportsmod1.jpg';
import shadesImage from '../assets/categories/sunmod1.jpg';
import visionImage from '../assets/categories/visionmod1.jpg';

const divisions = [
  { name: 'Outlook', color: '#4caf50', image: polarizedImage },
  { name: 'Sports', color: '#d2b48c', image: sportsImage },
  { name: 'Shades', color: '#b0c4de', image: shadesImage },
  { name: 'Vision', color: '#d2691e', image: visionImage },
];

const DivisionList = () => {
  return (
    <div className="division-list">
      <div className="division-grid">
        {divisions.map((division, index) => (
          <DivisionCard key={index} division={division} />
        ))}
      </div>
    </div>
  );
};

export default DivisionList;
