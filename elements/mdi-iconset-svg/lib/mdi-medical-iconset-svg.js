/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-medical-iconset-svg`
 * @element mdi-medical-iconset-svg is a iconset for the Material Design Icons collection with the "medical" tag
 * Example:
 *   <simple-icon icon="mdi-medical:ambulance"></simple-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-medical" size="24">
    <svg>
      <g id="ambulance">
        <path
          d="M18,18.5A1.5,1.5 0 0,0 19.5,17A1.5,1.5 0 0,0 18,15.5A1.5,1.5 0 0,0 16.5,17A1.5,1.5 0 0,0 18,18.5M19.5,9.5H17V12H21.46L19.5,9.5M6,18.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 6,15.5A1.5,1.5 0 0,0 4.5,17A1.5,1.5 0 0,0 6,18.5M20,8L23,12V17H21A3,3 0 0,1 18,20A3,3 0 0,1 15,17H9A3,3 0 0,1 6,20A3,3 0 0,1 3,17H1V6C1,4.89 1.89,4 3,4H17V8H20M8,6V9H5V11H8V14H10V11H13V9H10V6H8Z"
        ></path>
      </g>

      <g id="flask">
        <path
          d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"
        ></path>
      </g>

      <g id="flash-empty">
        <path
          d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6Z"
        ></path>
      </g>

      <g id="flash-empty-outline">
        <path
          d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6Z"
        ></path>
      </g>

      <g id="flash-outline">
        <path
          d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12A0.5,0.5 0 0,1 13,12.5A0.5,0.5 0 0,1 12.5,13A0.5,0.5 0 0,1 12,12.5A0.5,0.5 0 0,1 12.5,12Z"
        ></path>
      </g>

      <g id="hospital">
        <path
          d="M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        ></path>
      </g>

      <g id="hospital-building">
        <path
          d="M2,22V7A1,1 0 0,1 3,6H7V2H17V6H21A1,1 0 0,1 22,7V22H14V17H10V22H2M9,4V10H11V8H13V10H15V4H13V6H11V4H9M4,20H8V17H4V20M4,15H8V12H4V15M16,20H20V17H16V20M16,15H20V12H16V15M10,15H14V12H10V15Z"
        ></path>
      </g>

      <g id="hospital-marker">
        <path
          d="M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M9,6V12H11V10H13V12H15V6H13V8H11V6H9Z"
        ></path>
      </g>

      <g id="needle">
        <path
          d="M11.15,15.18L9.73,13.77L11.15,12.35L12.56,13.77L13.97,12.35L12.56,10.94L13.97,9.53L15.39,10.94L16.8,9.53L13.97,6.7L6.9,13.77L9.73,16.6L11.15,15.18M3.08,19L6.2,15.89L4.08,13.77L13.97,3.87L16.1,6L17.5,4.58L16.1,3.16L17.5,1.75L21.75,6L20.34,7.4L18.92,6L17.5,7.4L19.63,9.53L9.73,19.42L7.61,17.3L3.08,21.84V19Z"
        ></path>
      </g>

      <g id="pharmacy">
        <path
          d="M16,14H13V17H11V14H8V12H11V9H13V12H16M21,5H18.35L19.5,1.85L17.15,1L15.69,5H3V7L5,13L3,19V21H21V19L19,13L21,7V5Z"
        ></path>
      </g>

      <g id="pill">
        <path
          d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.75 4.24,15.24 4.6,16.57L10.59,10.59L14.83,14.83L18.36,11.29C19.93,9.73 19.93,7.2 18.36,5.64C16.8,4.07 14.27,4.07 12.71,5.64L5.64,12.71Z"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
