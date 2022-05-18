import * as React from 'react';
import { IconProps } from '../common.types';

const SpentMoney = (props: IconProps) => (
  <svg
    width={34}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30.015 15.912a9.43 9.43 0 0 0 2.954-3.873c.427 1.224.648 2.59.648 4.122 0 3.652-1.316 6.212-2.665 7.858a10.968 10.968 0 0 1-2.137 2v2.452c0 .936-.38 1.834-1.055 2.495A3.64 3.64 0 0 1 25.213 32h-1.2a2.426 2.426 0 0 1-1.699-.69 2.329 2.329 0 0 1-.703-1.663h-4.802c0 .624-.253 1.223-.704 1.664-.45.441-1.06.689-1.698.689h-1.2a3.64 3.64 0 0 1-2.547-1.034 3.493 3.493 0 0 1-1.055-2.495v-.504a10.025 10.025 0 0 1-4.058-2.437c-1.42-1.412-2.216-3.176-2.617-4.287a1.007 1.007 0 0 0-.243-.406 1.035 1.035 0 0 0-.403-.255A3.141 3.141 0 0 1 .636 19.48 3.035 3.035 0 0 1 0 17.625v-1.868c0-1.355.917-2.546 2.245-2.918.25-.07.519-.306.65-.699.325-.96.947-2.376 2.09-3.51a13.951 13.951 0 0 1 3.338-2.416V1.796c.001-.358.112-.707.318-1.002.206-.296.497-.524.837-.655a1.894 1.894 0 0 1 1.983.353c.608.565 1.405 1.235 2.257 1.784.877.56 1.698.917 2.368.983h.012a9.285 9.285 0 0 0-1.58 6.364c.29 2.419 2.202 3.875 3.806 4.524l5.739 2.33c1.601.649 4.003.943 5.955-.565h-.003Zm-21.01-1.558a1.82 1.82 0 0 0 1.273-.516c.338-.331.527-.78.527-1.248 0-.468-.19-.917-.527-1.248a1.82 1.82 0 0 0-1.273-.517 1.82 1.82 0 0 0-1.274.517c-.338.331-.527.78-.527 1.248 0 .468.19.917.527 1.248a1.82 1.82 0 0 0 1.274.517Z"
      fill="#E7B65F"
    />
  </svg>
);

export default SpentMoney;
