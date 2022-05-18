import * as React from 'react';

import { IconProps } from '../common.types';

const ArrowUp = (props: IconProps) => (
  <svg
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={63}
      height={63}
      rx={31.5}
      stroke="#E7B65F"
      strokeWidth={2}
    />
    <path
      d="M31 41a1 1 0 1 0 2 0h-2Zm1.707-17.707a1 1 0 0 0-1.414 0l-6.364 6.364a1 1 0 0 0 1.414 1.414L32 25.414l5.657 5.657a1 1 0 0 0 1.414-1.414l-6.364-6.364ZM33 41V24h-2v17h2Z"
      fill="#E7B65F"
    />
  </svg>
);

export default ArrowUp;
