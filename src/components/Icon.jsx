const PATHS = {
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
    </>
  ),
  contract: (
    <>
      <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M8.5 13h7M8.5 17h4.5" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="m3 12.5 9 4.5 9-4.5M3 17l9 4.5L21 17" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 6.8V12l3.4 2.1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  check: <path d="m5 12.6 4.4 4.4L19 7.4" />,
  arrow: (
    <>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M3.3 12h17.4M12 3.25c2.3 2.5 3.4 5.5 3.4 8.75S14.3 18.25 12 20.75c-2.3-2.5-3.4-5.5-3.4-8.75S9.7 5.75 12 3.25Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.6" />
      <path d="m3.8 7.3 7.3 5.2a1.6 1.6 0 0 0 1.8 0l7.3-5.2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.4" />
      <path d="M2.8 20a6.3 6.3 0 0 1 12.4 0" />
      <path d="M16 5.6a3.4 3.4 0 0 1 0 5.9M17.2 14.6a6.3 6.3 0 0 1 4 5.4" />
    </>
  ),
}

export default function Icon({ name, size = 22, strokeWidth = 1.7, ...rest }) {
  const d = PATHS[name]
  if (!d) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {d}
    </svg>
  )
}
