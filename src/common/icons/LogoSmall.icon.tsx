import * as React from 'react';

import { IconProps } from '../common.types';

const LogoSmall = (props: IconProps) => (
  <svg
    width={93}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h93v48H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.0071 0 0 .01374 0 -.002)" />
      </pattern>
      <image
        id="b"
        width={141}
        height={73}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default LogoSmall;
