/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-24 01:04
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-28 23:24
 * @desc       :
 */
import React, { useState, useEffect } from 'react';

const IconComponent = ({ index }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await import(`../assets/icons/${index}.svg`);
        setIcon(iconModule.default);
      } catch (error) {
        console.error(`Error loading icon: ${index}`, error);
      }
    };

    loadIcon();
  }, [index]);

  return icon ? (
    <img
      src={icon}
      alt={`icon-${index}`}
    />
  ) : null;
};

export default IconComponent;
