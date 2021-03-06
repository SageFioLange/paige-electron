/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Icon from '@ant-design/icons';

const SortSVG = () => (
  <svg
    viewBox="0 0 36 36"
    focusable="false"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="9" y="24" width="18" height="3" />
    <rect x="9" y="18" width="18" height="3" />
    <rect x="9" y="12" width="18" height="3" />
    <polygon points="25.1,6 22.9,9 9,9 9,6 " />
    <polygon points="27,30 27,33 9.7,33 12,30 " />
    <path d="M6,30H3V6h3V30z M4.5,36L9,30H0L4.5,36z" />
    <g>
      <path d="M30,6h3v24h-3V6z M31.5,0L27,6h9L31.5,0z" />
    </g>
  </svg>
);

const CalDownSVG = () => (
  <svg
    viewBox="0 0 36 36"
    focusable="false"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect
      x="16.5"
      y="4.4"
      transform="matrix(-1 -4.488688e-11 4.488688e-11 -1 51.0435 11.7668)"
      width="18"
      height="3"
    />
    <polygon points="16.2,34.4 34.5,34.4 34.5,31.4 18.4,31.4 " />
    <rect
      x="31.5"
      y="7.4"
      transform="matrix(-1 -4.486867e-11 4.486867e-11 -1 66.0361 38.8252)"
      width="3"
      height="24.1"
    />
    <rect
      x="22.5"
      y="1.4"
      transform="matrix(-1 -4.486867e-11 4.486867e-11 -1 48.0362 11.7668)"
      width="3"
      height="9"
    />
    <rect
      x="16.5"
      y="13.4"
      transform="matrix(-1 -4.489044e-11 4.489044e-11 -1 48.0435 29.7668)"
      width="15"
      height="3"
    />
    <g>
      <path d="M10.5,1.4h3v28.6h-3V1.4z M16.5,29.9h-9l4.5,6L16.5,29.9z" />
    </g>
    <rect x="1.5" y="4.4" width="3" height="27.1" />
    <polygon points="1.5,31.4 1.5,34.4 7.9,34.4 5.7,31.4 " />
    <rect
      x="4.5"
      y="4.4"
      transform="matrix(-1 -4.486867e-11 4.486867e-11 -1 12.0449 11.7668)"
      width="3"
      height="3"
    />
  </svg>
);

const CalUpSVG = () => (
  <svg
    viewBox="0 0 36 36"
    focusable="false"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="1.5" y="7.4" width="3" height="24.1" />
    <rect x="10.5" y="1.4" width="3" height="9" />
    <rect x="4.5" y="13.4" width="15" height="3" />
    <g>
      <path d="M25.5,34.4h-3V6h3V34.4z M19.5,6h9L24,0L19.5,6z" />
    </g>
    <polygon points="30.3,4.4 31.5,6 31.5,31.4 34.5,31.4 34.5,4.4 " />
    <polygon points="1.5,4.4 1.5,7.4 15.5,7.4 16.5,6 17.7,4.4 " />
    <rect
      x="28.5"
      y="31.4"
      transform="matrix(-1 -4.484292e-11 4.484292e-11 -1 62.9565 65.8817)"
      width="6"
      height="3"
    />
    <rect
      x="1.5"
      y="31.4"
      transform="matrix(-1 -4.482160e-11 4.482160e-11 -1 20.9828 65.8817)"
      width="18"
      height="3"
    />
  </svg>
);

const SortIcon = (props: Record<string, unknown>) => (
  <Icon component={SortSVG} {...props} />
);
const SortCalDownIcon = (props: Record<string, unknown>) => (
  <Icon component={CalDownSVG} {...props} />
);
const SortCalUpIcon = (props: Record<string, unknown>) => (
  <Icon component={CalUpSVG} {...props} />
);

export { SortIcon, SortCalDownIcon, SortCalUpIcon };
