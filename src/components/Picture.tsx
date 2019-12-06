import React from 'react';

type Props = {
  src: string;
  tooltip?: string;
  width?: number;
  height?: number;
};

export const Picture = ({src, tooltip, width, height}: Props) => {
  return (
    <div
      className="image"
      style={{height, width, backgroundImage: `url(${src})`}}
      title={tooltip}
    />
  );
};
