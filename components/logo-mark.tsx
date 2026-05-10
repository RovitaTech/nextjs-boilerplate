export function LogoMark({ size = 36 }: { size?: number }) {
  const h = Math.round(size * 1.3);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Leg gradient: vivid blue → dark navy */}
        <linearGradient
          id="rovi-leg"
          x1="55"
          y1="58"
          x2="80"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2525CC" />
          <stop offset="1" stopColor="#08083A" />
        </linearGradient>
        {/* Left bar gradient: mid-navy → dark navy */}
        <linearGradient
          id="rovi-bar"
          x1="25"
          y1="54"
          x2="3"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14147A" />
          <stop offset="1" stopColor="#060628" />
        </linearGradient>
      </defs>

      {/* Left bar — parallelogram extending left at junction height */}
      <polygon points="3,54 25,52 25,67 8,68" fill="url(#rovi-bar)" />

      {/* Diagonal leg — parallelogram going lower-right */}
      <polygon points="48,58 66,58 86,118 68,118" fill="url(#rovi-leg)" />

      {/*
        R letterform — stem + bowl with inner counter removed via evenodd.
        Outer path (clockwise):
          stem top-left → bowl top → bowl right bezier curves →
          junction → leg → back up → stem bottom → close.
        Inner counter (counter-clockwise): creates the hole in the bowl.
      */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M25 6
          H63
          Q90 6 90 37
          Q90 60 69 65
          L82 95
          H65
          L52 65
          H42
          V95
          H25
          Z
          M42 20
          V52
          H61
          Q75 52 75 37
          Q75 20 61 20
          Z
        "
        fill="#2828CC"
      />
    </svg>
  );
}
