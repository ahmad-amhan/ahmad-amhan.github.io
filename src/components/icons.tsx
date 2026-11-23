import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const ArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Base>
);

export const Download = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);

export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.500C5 14.900 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </Base>
);

export const Sun = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400" />
  </Base>
);

export const Moon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 14.500A8 8 0 0 1 9.500 4a8 8 0 1 0 10.500 10.500Z" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const LinkedIn = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M4.980 3.500a2.500 2.500 0 1 1 0 5 2.500 2.500 0 0 1 0-5ZM3 9.750h4V21H3V9.750Zm6.500 0h3.830v1.540h.050c.530-1 1.840-1.790 3.620-1.790 3.500 0 4 2.300 4 5.300V21h-4v-5.500c0-1.310-.020-3-1.830-3-1.830 0-2.110 1.430-2.110 2.900V21H9.500V9.750Z" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.040 2a9.900 9.900 0 0 0-8.480 15.020L2 22l5.130-1.530A9.900 9.900 0 1 0 12.040 2Zm0 1.800a8.100 8.100 0 1 1-4.260 15l-.300-.190-3.020.900.920-2.940-.200-.310A8.100 8.100 0 0 1 12.040 3.800Zm-3.300 3.900c-.170 0-.450.060-.680.320-.240.250-.900.880-.900 2.140 0 1.260.920 2.480 1.050 2.650.130.170 1.790 2.860 4.420 3.900 2.180.860 2.630.690 3.100.650.480-.040 1.530-.630 1.750-1.230.220-.600.220-1.120.150-1.230-.060-.110-.240-.170-.500-.300-.260-.130-1.530-.760-1.770-.840-.240-.090-.410-.130-.580.130-.170.250-.670.840-.820 1.010-.150.170-.300.190-.560.060-.260-.130-1.100-.400-2.090-1.290-.770-.690-1.290-1.540-1.440-1.800-.150-.260-.020-.400.110-.530.120-.120.260-.300.390-.450.130-.150.170-.260.260-.430.090-.170.040-.320-.020-.450-.060-.130-.570-1.400-.800-1.910-.200-.470-.410-.400-.580-.410h-.490Z" />
  </svg>
);

/* Domain glyphs for the product grid. */
export const domainIcon = {
  health: (p: IconProps) => (
    <Base {...p}>
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" />
    </Base>
  ),
  yard: (p: IconProps) => (
    <Base {...p}>
      <path d="M3 16V9l3-4h8l3 4h2a2 2 0 0 1 2 2v5h-2" />
      <path d="M9 16h6M3 16h2" />
      <circle cx="7" cy="16.500" r="2" />
      <circle cx="17" cy="16.500" r="2" />
    </Base>
  ),
  facility: (p: IconProps) => (
    <Base {...p}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M2 21h20" />
      <path d="M8 8h3M8 12h3M8 16h3" />
    </Base>
  ),
  iot: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M7.800 16.200a6 6 0 0 1 0-8.400M16.200 7.800a6 6 0 0 1 0 8.400M5 19a10 10 0 0 1 0-14M19 5a10 10 0 0 1 0 14" />
    </Base>
  ),
  fleet: (p: IconProps) => (
    <Base {...p}>
      <path d="M2 6h11v10H2zM13 9h4.500L21 12.500V16h-8z" />
      <circle cx="6.500" cy="17.500" r="2" />
      <circle cx="17" cy="17.500" r="2" />
    </Base>
  ),
  pharmacy: (p: IconProps) => (
    <Base {...p}>
      <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
      <path d="m8.500 8.500 7 7" />
    </Base>
  ),
  safety: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 3 4.500 6v5.500c0 4.500 3.100 8.300 7.500 9.500 4.400-1.200 7.500-5 7.500-9.500V6L12 3Z" />
      <path d="m9 12 2.200 2.200L15.200 10" />
    </Base>
  ),
} as const;
