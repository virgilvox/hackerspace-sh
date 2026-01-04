<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 -5 280 350" role="img" aria-label="Hackerspace Atlas logo">
    <!-- GLOBE OUTER -->
    <circle cx="200" cy="185" r="115" stroke="currentColor" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- MERIDIANS -->
    <ellipse cx="200" cy="185" rx="45" ry="115" stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="200" cy="185" rx="85" ry="115" stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- EQUATOR -->
    <line x1="85" y1="185" x2="315" y2="185" stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- LATITUDE RINGS -->
    <ellipse cx="200" cy="133" rx="100" ry="28" stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="200" cy="237" rx="100" ry="28" stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- VIAS AT INTERSECTIONS -->
    <g fill="currentColor" stroke="none">
      <!-- Equator vias -->
      <circle cx="85" cy="185" r="9"/><circle cx="85" cy="185" r="3.5" fill="#0c0c0c"/>
      <circle cx="115" cy="185" r="7"/><circle cx="115" cy="185" r="2.5" fill="#0c0c0c"/>
      <circle cx="155" cy="185" r="7"/><circle cx="155" cy="185" r="2.5" fill="#0c0c0c"/>
      <circle cx="245" cy="185" r="7"/><circle cx="245" cy="185" r="2.5" fill="#0c0c0c"/>
      <circle cx="285" cy="185" r="7"/><circle cx="285" cy="185" r="2.5" fill="#0c0c0c"/>
      <circle cx="315" cy="185" r="9"/><circle cx="315" cy="185" r="3.5" fill="#0c0c0c"/>

      <!-- Pole vias -->
      <circle cx="200" cy="70" r="8"/><circle cx="200" cy="70" r="3" fill="#0c0c0c"/>
      <circle cx="200" cy="300" r="8"/><circle cx="200" cy="300" r="3" fill="#0c0c0c"/>
    </g>

    <!-- HACKERSPACE MARKERS (featured vias with rings) -->
    <g>
      <circle cx="145" cy="160" r="11" fill="currentColor"/>
      <circle cx="145" cy="160" r="4.5" fill="#0c0c0c"/>
      <circle cx="145" cy="160" r="16" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g>
      <circle cx="260" cy="205" r="10" fill="currentColor"/>
      <circle cx="260" cy="205" r="4" fill="#0c0c0c"/>
      <circle cx="260" cy="205" r="15" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g>
      <circle cx="170" cy="255" r="9" fill="currentColor"/>
      <circle cx="170" cy="255" r="3.5" fill="#0c0c0c"/>
      <circle cx="170" cy="255" r="14" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <!-- COMPASS NEEDLE (Soldering Iron) -->
    <g>
      <!-- Main shaft -->
      <line x1="200" y1="75" x2="200" y2="285" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Tip assembly -->
      <path d="M200 28 L186 82 L200 98 L214 82 Z" fill="currentColor"/>
      <rect x="192" y="96" width="16" height="12" rx="2" fill="currentColor"/>

      <!-- Grip / handle -->
      <rect x="186" y="258" width="28" height="55" rx="6" fill="currentColor"/>
      <line x1="189" y1="272" x2="211" y2="272" stroke="#0c0c0c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="189" y1="286" x2="211" y2="286" stroke="#0c0c0c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="189" y1="300" x2="211" y2="300" stroke="#0c0c0c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="190" y="310" width="20" height="12" rx="4" fill="currentColor"/>

      <!-- South pointer fin -->
      <path d="M200 335 L212 295 L200 278 L188 295 Z" fill="currentColor" opacity="0.9"/>

      <!-- Heat lines -->
      <g stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8">
        <path d="M184 28 Q174 14 184 4"/>
        <path d="M216 28 Q226 14 216 4"/>
        <path d="M200 22 Q200 12 200 2"/>
      </g>
    </g>

    <!-- EAST/WEST POINTERS -->
    <path d="M330 185 L290 170 L275 185 L290 200 Z" fill="currentColor" opacity="0.9"/>
    <path d="M70 185 L110 200 L125 185 L110 170 Z" fill="currentColor" opacity="0.9"/>

    <!-- CENTER HUB -->
    <circle cx="200" cy="185" r="18" fill="currentColor"/>
    <circle cx="200" cy="185" r="7" fill="#d4ff00"/>
  </svg>
</template>
