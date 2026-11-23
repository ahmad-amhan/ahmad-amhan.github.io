import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Solid({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const ArrowUpRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
);

export const ArrowDown = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Stroke>
);

export const ArrowUp = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Stroke>
);

export const Download = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </Stroke>
);

export const Mail = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Stroke>
);

export const MapPin = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 21s7-6.100 7-11.500A7 7 0 0 0 5 9.500C5 14.900 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </Stroke>
);

export const Sun = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400" />
  </Stroke>
);

export const Moon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20 14.500A8 8 0 0 1 9.500 4a8 8 0 1 0 10.500 10.500Z" />
  </Stroke>
);

/* Section icons for the mobile dock. */
export const Grid = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3.500" y="3.500" width="7" height="7" rx="1.500" />
    <rect x="13.500" y="3.500" width="7" height="7" rx="1.500" />
    <rect x="3.500" y="13.500" width="7" height="7" rx="1.500" />
    <rect x="13.500" y="13.500" width="7" height="7" rx="1.500" />
  </Stroke>
);

export const Route = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="6" cy="18" r="2.500" />
    <circle cx="18" cy="6" r="2.500" />
    <path d="M8.500 18H14a3.500 3.500 0 0 0 0-7h-4a3.500 3.500 0 0 1 0-7h5.500" />
  </Stroke>
);

export const Briefcase = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.500" />
    <path d="M9 7V5.500A1.500 1.500 0 0 1 10.500 4h3A1.500 1.500 0 0 1 15 5.500V7M3 13h18" />
  </Stroke>
);

export const Layers = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.500l9 5 9-5" />
  </Stroke>
);

export const LinkedIn = (p: IconProps) => (
  <Solid {...p}>
    <path d="M4.980 3.500a2.500 2.500 0 1 1 0 5 2.500 2.500 0 0 1 0-5ZM3 9.750h4V21H3V9.750Zm6.500 0h3.830v1.540h.050c.530-1 1.840-1.790 3.620-1.790 3.500 0 4 2.300 4 5.300V21h-4v-5.500c0-1.310-.020-3-1.830-3-1.830 0-2.110 1.430-2.110 2.900V21H9.500V9.750Z" />
  </Solid>
);

export const WhatsApp = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12.040 2a9.900 9.900 0 0 0-8.480 15.020L2 22l5.130-1.530A9.900 9.900 0 1 0 12.040 2Zm0 1.800a8.100 8.100 0 1 1-4.260 15l-.300-.190-3.020.900.920-2.940-.200-.310A8.100 8.100 0 0 1 12.040 3.800Zm-3.300 3.900c-.170 0-.450.060-.680.320-.240.250-.900.880-.900 2.140 0 1.260.920 2.480 1.050 2.650.130.170 1.790 2.860 4.420 3.900 2.180.860 2.630.690 3.100.650.480-.040 1.530-.630 1.750-1.230.220-.600.220-1.120.150-1.230-.060-.110-.240-.170-.500-.300-.260-.130-1.530-.760-1.770-.840-.240-.090-.410-.130-.580.130-.170.250-.670.840-.820 1.010-.150.170-.300.190-.560.060-.260-.130-1.100-.400-2.090-1.290-.770-.690-1.290-1.540-1.440-1.800-.150-.260-.020-.400.110-.530.120-.120.260-.300.390-.450.130-.150.170-.260.260-.430.090-.170.040-.320-.020-.450-.060-.130-.570-1.400-.800-1.910-.200-.470-.410-.400-.580-.410h-.490Z" />
  </Solid>
);

export const Apple = (p: IconProps) => (
  <Solid {...p}>
    <path d="M16.400 12.700c0-2.300 1.900-3.400 2-3.500-1.100-1.600-2.800-1.800-3.400-1.800-1.400-.100-2.800.900-3.500.900-.700 0-1.800-.800-3-.800-1.500 0-3 .900-3.800 2.300-1.600 2.800-.400 7 1.200 9.300.800 1.100 1.700 2.400 2.900 2.300 1.200 0 1.600-.700 3-.700s1.800.700 3 .700c1.200 0 2-1.100 2.800-2.200.900-1.300 1.200-2.500 1.300-2.600-.100 0-2.500-1-2.500-3.900ZM14.100 5.800c.600-.800 1.100-1.900.900-3-1 .100-2.100.700-2.800 1.500-.600.700-1.100 1.800-1 2.800 1.100.100 2.200-.500 2.900-1.300Z" />
  </Solid>
);

export const GooglePlay = (p: IconProps) => (
  <Solid {...p}>
    <path d="M4.300 2.600c-.200.200-.300.600-.300 1v16.800c0 .400.100.800.300 1l9.300-9.400-9.300-9.400Zm10.400 10.500 2.700 2.700-10.900 6.200 8.200-8.900Zm3.700-3.800 2.900 1.700c.900.500.900 1.500 0 2l-2.900 1.700-3-3 3-2.400Zm-1-.600L14.700 11 6.500 2 17.400 8.700Z" />
  </Solid>
);

export const Globe = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.500 2.700 3.800 5.700 3.800 9s-1.300 6.300-3.800 9c-2.500-2.700-3.800-5.700-3.800-9S9.500 5.700 12 3Z" />
  </Stroke>
);

/** Fallback glyph for a product that has no public app icon. */
export const Shield = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3 4.500 6v5.500c0 4.500 3.100 8.300 7.500 9.500 4.400-1.200 7.500-5 7.500-9.500V6L12 3Z" />
    <path d="m9 12 2.200 2.200L15.200 10" />
  </Stroke>
);

export function linkIcon(label: string) {
  if (label === "App Store") return Apple;
  if (label === "Google Play") return GooglePlay;
  return Globe;
}
