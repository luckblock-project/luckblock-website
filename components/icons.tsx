export function BarsIcon({
  className = "",
  key = "",
  id = "",
  onClick,
}: {
  className?: string;
  key?: string;
  id?: string;
  onClick?: () => void | undefined;
}): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
      onClick={onClick}
    >
      <path
        d="M3 8H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16H21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({
  className = "",
  key = "",
  id = "",
  onClick,
}: {
  className?: string;
  key?: string;
  id?: string;
  onClick?: () => void | undefined;
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 384 512"
      fill="white"
      className={className}
      key={key}
      id={id}
      onClick={onClick}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  );
}

export function UnderlineIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="217"
      height="13"
      viewBox="0 0 217 13"
      fill="none"
      className={className}
      key={key}
      id={id}
    >
      <path
        d="M2 11C17.1907 4.20839 81.0577 -5.29987 215 11"
        stroke="#61CC00"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property
 */
export function AngleRightIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="7"
      height="11"
      viewBox="0 0 7 11"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path d="M6.3297 4.7897L2.0897 0.549705C1.99674 0.455976 1.88614 0.381582 1.76428 0.330813C1.64242 0.280044 1.51171 0.253906 1.3797 0.253906C1.24769 0.253906 1.11698 0.280044 0.995122 0.330813C0.873263 0.381582 0.762662 0.455976 0.669699 0.549705C0.483448 0.737067 0.378906 0.990519 0.378906 1.2547C0.378906 1.51889 0.483448 1.77234 0.669699 1.9597L4.2097 5.4997L0.669699 9.0397C0.483448 9.22707 0.378906 9.48052 0.378906 9.74471C0.378906 10.0089 0.483448 10.2623 0.669699 10.4497C0.763139 10.5424 0.873955 10.6157 0.995793 10.6655C1.11763 10.7152 1.24809 10.7405 1.3797 10.7397C1.51131 10.7405 1.64177 10.7152 1.76361 10.6655C1.88544 10.6157 1.99626 10.5424 2.0897 10.4497L6.3297 6.2097C6.42343 6.11674 6.49782 6.00614 6.54859 5.88428C6.59936 5.76242 6.6255 5.63172 6.6255 5.4997C6.6255 5.36769 6.59936 5.23699 6.54859 5.11513C6.49782 4.99327 6.42343 4.88267 6.3297 4.7897Z" />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property
 */
export function PlayIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path d="M4.76793 0.622471C3.11109 -0.538468 0.833313 0.646783 0.833313 2.66988V14.3305C0.833313 16.3536 3.11111 17.5389 4.76795 16.3779L13.1081 10.5339C14.5191 9.54515 14.5191 7.45508 13.108 6.46637L4.76793 0.622471Z" />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property
 */
export function TickIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <circle cx="10" cy="10" r="10" fill="#61CC00" />
      <path
        d="M15.0429 6.23787C14.9682 6.1625 14.8792 6.10267 14.7812 6.06185C14.6832 6.02102 14.5781 6 14.472 6C14.3658 6 14.2607 6.02102 14.1627 6.06185C14.0647 6.10267 13.9758 6.1625 13.901 6.23787L7.90986 12.2371L5.39278 9.71193C5.31516 9.63695 5.22353 9.57799 5.12312 9.53842C5.02271 9.49886 4.9155 9.47945 4.80759 9.48132C4.69969 9.48318 4.59321 9.50629 4.49423 9.5493C4.39525 9.59232 4.30572 9.65442 4.23074 9.73204C4.15576 9.80966 4.0968 9.90129 4.05723 10.0017C4.01766 10.1021 3.99826 10.2093 4.00012 10.3172C4.00199 10.4251 4.02509 10.5316 4.06811 10.6306C4.11113 10.7296 4.17322 10.8191 4.25084 10.8941L7.33889 13.9821C7.41365 14.0575 7.50259 14.1173 7.60059 14.1582C7.69859 14.199 7.8037 14.22 7.90986 14.22C8.01602 14.22 8.12113 14.199 8.21913 14.1582C8.31712 14.1173 8.40607 14.0575 8.48083 13.9821L15.0429 7.42002C15.1246 7.34471 15.1897 7.25332 15.2343 7.15159C15.2788 7.04986 15.3018 6.94001 15.3018 6.82895C15.3018 6.71789 15.2788 6.60803 15.2343 6.50631C15.1897 6.40458 15.1246 6.31318 15.0429 6.23787Z"
        fill="#18171C"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property
 */
export function ExpanceIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      key={key}
      id={id}
    >
      <rect width="18" height="21" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_791"
            transform="scale(0.0555556 0.047619)"
          />
        </pattern>
        <image
          id="image0_1_791"
          width="18"
          height="21"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAACQklEQVQ4jZ2UTUhVURDH/+f5XklQaKhlKCShoouCMuwDpHVFEBRBuCtp0wchGLQsKAjKtuE2KKJVtAiqRYsgqE1FYUYgRtQmwsqgM+eeX4t3bu/yTF44cBZnZu5v/jN37pUaGNACrGqU1wASRiP2JeLnIBxaBoD+iD2NGHXnMbDpPyF2PmKh+qB/DWEv2J6If5VgHmxiKQVlCKNAO9CaYdchjAElsBHw2wEHYSzDJoFWoBPCUaAph3RE/IdUbR7oqxXwp/K2wJ8oFB6I2M+kegboyJ1E/CywNQ35INCbYGcgHE+AQQj7kn84Yp+rRRgQ0BOxLMPfBMoR/yKpCBl2DVgLrM/wUxGLKfZIkiJ2P2IR6MlbGM6wi0DzP97Ut4gt1Pl+S1KGXQU/JEkOaJPU6px7D6xA4buklQ1e7teSq7SldjdLmhUwGLEA/mQKdCfJ9crycw/oTIoupxl1lSQhqSlKO4CKZOtKrrLfyR2WNF9QseDkjpRc5YAUNkqSk3blwVL1/teakHueYVecK9+VNFPYtjnnyncy/BTSk+R0RVDRgsS0k0aWGo6Tdkt6We/PW5OT65PU4lTZ4uRu5DIKuSmvNOlU3gl0S3TVotARsY9pkD/AJoAVkpR2h4iR4W+n/NUZdiliPi3yO2BNDmvOsAu1oD2oFQrHwJ/O7xH/NuX8AjsHlBf1D/RG7GHEnlXv/mz6QNvBxqsg+5ThbwEblppjAeiHU/Xp2mb7Nyk21BCwGGjj6d/ki+0ty8BvA/ob5f0BQlKDIuVoHnkAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property
 */
export function EthereumIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      key={key}
      id={id}
    >
      <rect width="12" height="20" fill="url(#pattern1)" />
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_799" transform="scale(0.0833333 0.05)" />
        </pattern>
        <image
          id="image0_1_799"
          width="12"
          height="20"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAABjklEQVQ4jY2TsWtTURTGf999aVravtC3OBiDo0MFpSAuju7tUuiou6siODpIwYK0g6OjTvoXuDi4uKjQwUmxTSq09D46hL7Q9HNoEl5eE/RM95zv953D5Z4LE8J2zXZtkjaxmOcHjwbHV1VN1UK3226dnrILMDfH8vx8c6+sh6qhKNiRSCXSomCnqo8ZYuysAaul0uqgdtlgH6a2t6sdbW/bh+klQ54XzyVaVYNEK8bes1EOcHLSvtHvswskVcNgTpEkutVoNH8EgH7fr6fDAJodMCjG/QegN9PhsUkPgx3OwPE/4GiHswD8goUV0Ba4NwHsXWgLK7Waf4Ysm/kG3fdw3gmhvmzzFjBgm3ch1G/C+QF0P6Rp/bsAYty/DfoC/i3xVGIPwNZ1mxdAC3wny659He1Snref2GxegHwGJ5LuAkg8XlpqvoTS8tlWjJ1PEvcql/iYZc37w2T00pJcr8+sA0cl+ChJtFF2jy3f4uKVP5KHgCVvNBpXyw0mR4ydrePj9uY/wWHYnp32Rf8CUfqgEKnlSRcAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property
 */
export function CopyIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        opacity="0.4"
        d="M4 3.25C4 1.86929 5.11929 0.75 6.5 0.75H10.25C11.6307 0.75 12.75 1.86929 12.75 3.25V7C12.75 8.38071 11.6307 9.5 10.25 9.5H6.5C5.11929 9.5 4 8.38071 4 7V3.25Z"
        fill="#84818A"
      />
      <path
        d="M0.25 7C0.25 5.61929 1.36929 4.5 2.75 4.5H6.50002C7.88073 4.5 9.00002 5.61929 9.00002 7V10.75C9.00002 12.1307 7.88073 13.25 6.50002 13.25H2.75C1.36929 13.25 0.25 12.1307 0.25 10.75V7Z"
        fill="#84818A"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` tag
 */
export function TelegramIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        d="M23.4872 0.5C19.0371 0.5 14.687 1.8196 10.9869 4.29193C7.28676 6.76427 4.40288 10.2783 2.6999 14.3896C0.996932 18.501 0.551356 23.025 1.41952 27.3895C2.28769 31.7541 4.43061 35.7632 7.57729 38.9099C10.724 42.0566 14.7331 44.1995 19.0977 45.0677C23.4622 45.9358 27.9862 45.4903 32.0976 43.7873C36.2089 42.0843 39.7229 39.2004 42.1953 35.5003C44.6676 31.8002 45.9872 27.4501 45.9872 23C45.9874 20.0452 45.4056 17.1193 44.275 14.3893C43.1443 11.6594 41.487 9.17892 39.3976 7.08955C37.3083 5.00018 34.8278 3.34286 32.0979 2.21221C29.3679 1.08157 26.442 0.499755 23.4872 0.5ZM30.6411 34.5931C30.5569 34.8031 30.4287 34.9926 30.2653 35.149C30.1018 35.3055 29.9068 35.4251 29.6933 35.5C29.4798 35.5749 29.2527 35.6033 29.0274 35.5833C28.802 35.5633 28.5835 35.4953 28.3866 35.3839L22.2786 30.6378L18.3584 34.2545C18.2674 34.3217 18.161 34.365 18.0489 34.3803C17.9369 34.3956 17.8228 34.3825 17.7171 34.3421L18.4686 27.6181L18.4927 27.6372L18.508 27.5044C18.508 27.5044 29.4993 17.4975 29.947 17.0712C30.4003 16.6459 30.2508 16.5537 30.2508 16.5537C30.2766 16.035 29.4374 16.5537 29.4374 16.5537L14.8742 25.9227L8.80934 23.8572C8.80934 23.8572 7.87784 23.5231 7.79009 22.7885C7.69784 22.0595 8.83969 21.6635 8.83969 21.6635L32.9529 12.0841C32.9529 12.0841 34.9352 11.2009 34.9352 12.6635L30.6411 34.5931Z"
        fill="inherit"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` tag
 */
export function TwitterIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="45"
      height="36"
      viewBox="0 0 45 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        d="M44.1667 4.56663C42.5381 5.27317 40.8158 5.74024 39.0533 5.9533C40.9127 4.84249 42.3061 3.09499 42.975 1.03497C41.2277 2.0751 39.315 2.80794 37.32 3.20163C35.9865 1.75554 34.2108 0.792941 32.2713 0.464811C30.3318 0.13668 28.3382 0.461576 26.6032 1.38854C24.8683 2.31551 23.49 3.79212 22.6847 5.58678C21.8794 7.38144 21.6925 9.39264 22.1533 11.305C18.6204 11.1263 15.1646 10.2064 12.0104 8.605C8.85623 7.00363 6.07418 4.75663 3.84501 2.00997C3.06314 3.37533 2.6523 4.92158 2.65334 6.49497C2.65057 7.95613 3.00915 9.3953 3.69715 10.6844C4.38515 11.9734 5.38122 13.0723 6.59668 13.8833C5.18396 13.8449 3.80143 13.4658 2.56668 12.7783V12.8866C2.57727 14.9339 3.29466 16.9147 4.59753 18.4939C5.90039 20.0731 7.70873 21.1539 9.71668 21.5533C8.94373 21.7885 8.14124 21.9125 7.33334 21.9216C6.77411 21.9151 6.21626 21.8644 5.66501 21.77C6.23681 23.5311 7.34336 25.0701 8.83067 26.173C10.318 27.2758 12.1121 27.8877 13.9633 27.9233C10.8373 30.383 6.97776 31.7255 3.00001 31.7366C2.27577 31.739 1.5521 31.6956 0.833344 31.6066C4.89461 34.2289 9.62744 35.6209 14.4617 35.615C17.7977 35.6496 21.1071 35.0192 24.1968 33.7605C27.2864 32.5018 30.0942 30.64 32.4563 28.284C34.8183 25.928 36.6873 23.125 37.9539 20.0386C39.2205 16.9522 39.8594 13.6444 39.8333 10.3083C39.8333 9.93996 39.8333 9.54996 39.8333 9.15996C41.5335 7.89206 42.9999 6.33772 44.1667 4.56663Z"
        fill="inherit"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` tag
 */
export function DocsIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="38"
      height="42"
      viewBox="0 0 38 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2708 0.166748H27.7312C34.1667 0.166748 37.75 3.87508 37.75 10.2292V31.7501C37.75 38.2084 34.1667 41.8334 27.7312 41.8334H10.2708C3.9375 41.8334 0.25 38.2084 0.25 31.7501V10.2292C0.25 3.87508 3.9375 0.166748 10.2708 0.166748ZM10.8329 9.87517V9.85434H17.06C17.9579 9.85434 18.6871 10.5835 18.6871 11.4773C18.6871 12.396 17.9579 13.1252 17.06 13.1252H10.8329C9.93501 13.1252 9.20793 12.396 9.20793 11.5002C9.20793 10.6043 9.93501 9.87517 10.8329 9.87517ZM10.8329 22.5419H27.1663C28.0621 22.5419 28.7913 21.8128 28.7913 20.917C28.7913 20.0211 28.0621 19.2899 27.1663 19.2899H10.8329C9.93501 19.2899 9.20793 20.0211 9.20793 20.917C9.20793 21.8128 9.93501 22.5419 10.8329 22.5419ZM10.8333 32.0626H27.1666C27.9978 31.9792 28.6249 31.2688 28.6249 30.4376C28.6249 29.5834 27.9978 28.8751 27.1666 28.7917H10.8333C10.2083 28.7292 9.60408 29.0209 9.27075 29.5626C8.93742 30.0834 8.93742 30.7709 9.27075 31.3126C9.60408 31.8334 10.2083 32.1459 10.8333 32.0626Z"
        fill="inherit"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` tag
 */
export function InstagramIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        d="M7.00027 1.44721C8.80898 1.44721 9.02317 1.45398 9.73769 1.48656C10.1673 1.49182 10.5928 1.5707 10.9958 1.71979C11.288 1.83248 11.5533 2.00511 11.7748 2.22656C11.9962 2.44802 12.1689 2.71339 12.2816 3.00559C12.4306 3.40853 12.5095 3.83406 12.5148 4.26366C12.547 4.97817 12.5541 5.19237 12.5541 7.00108C12.5541 8.80979 12.5474 9.02398 12.5148 9.7385C12.5095 10.1681 12.4306 10.5936 12.2816 10.9966C12.1689 11.2888 11.9962 11.5541 11.7748 11.7756C11.5533 11.997 11.288 12.1697 10.9958 12.2824C10.5928 12.4315 10.1673 12.5103 9.73769 12.5156C9.02349 12.5479 8.8093 12.5549 7.00027 12.5549C5.19124 12.5549 4.97704 12.5482 4.26285 12.5156C3.83325 12.5103 3.40772 12.4315 3.00478 12.2824C2.71258 12.1697 2.44721 11.997 2.22575 11.7756C2.0043 11.5541 1.83167 11.2888 1.71898 10.9966C1.56989 10.5936 1.49101 10.1681 1.48575 9.7385C1.45349 9.02398 1.4464 8.80979 1.4464 7.00108C1.4464 5.19237 1.45317 4.97817 1.48575 4.26366C1.49101 3.83406 1.56989 3.40853 1.71898 3.00559C1.83167 2.71339 2.0043 2.44802 2.22575 2.22656C2.44721 2.00511 2.71258 1.83248 3.00478 1.71979C3.40772 1.5707 3.83325 1.49182 4.26285 1.48656C4.97737 1.4543 5.19156 1.44721 7.00027 1.44721ZM7.00027 0.226562C5.16156 0.226562 4.92995 0.234304 4.20736 0.267208C3.64512 0.278391 3.08885 0.384847 2.5622 0.582046C2.11043 0.752261 1.70123 1.019 1.36317 1.36366C1.0182 1.70184 0.751234 2.11127 0.580913 2.56334C0.383713 3.08998 0.277257 3.64625 0.266074 4.2085C0.233816 4.93043 0.226074 5.16205 0.226074 7.00076C0.226074 8.83946 0.233816 9.07108 0.266719 9.79366C0.277903 10.3559 0.384358 10.9122 0.581558 11.4388C0.75169 11.8908 1.01844 12.3002 1.36317 12.6385C1.70142 12.9832 2.11084 13.25 2.56285 13.4201C3.08949 13.6173 3.64577 13.7238 4.20801 13.7349C4.93059 13.7672 5.16124 13.7756 7.00091 13.7756C8.84059 13.7756 9.07124 13.7679 9.79382 13.7349C10.3561 13.7238 10.9123 13.6173 11.439 13.4201C11.8888 13.2457 12.2974 12.9794 12.6384 12.6381C12.9795 12.2968 13.2455 11.8882 13.4196 11.4382C13.6168 10.9115 13.7233 10.3553 13.7345 9.79301C13.7667 9.07108 13.7745 8.83946 13.7745 7.00076C13.7745 5.16205 13.7667 4.93043 13.7338 4.20785C13.7226 3.64561 13.6162 3.08934 13.419 2.56269C13.2488 2.11068 12.9821 1.70126 12.6374 1.36301C12.2991 1.01828 11.8897 0.751533 11.4377 0.581401C10.911 0.384201 10.3548 0.277746 9.79253 0.266563C9.07059 0.234304 8.83898 0.226562 7.00027 0.226562Z"
        fill="inherit"
      />
      <path
        d="M7.00068 3.52344C6.31266 3.52344 5.64009 3.72746 5.06802 4.10971C4.49595 4.49195 4.05007 5.03525 3.78678 5.6709C3.52348 6.30655 3.45459 7.00601 3.58882 7.68081C3.72304 8.35561 4.05436 8.97546 4.54087 9.46197C5.02737 9.94847 5.64722 10.2798 6.32202 10.414C6.99683 10.5482 7.69628 10.4794 8.33193 10.2161C8.96758 9.95276 9.51088 9.50689 9.89312 8.93481C10.2754 8.36274 10.4794 7.69017 10.4794 7.00215C10.4794 6.07954 10.1129 5.19471 9.4605 4.54233C8.80812 3.88994 7.9233 3.52344 7.00068 3.52344ZM7.00068 9.26021C6.55408 9.26021 6.11751 9.12778 5.74617 8.87966C5.37483 8.63154 5.08541 8.27888 4.9145 7.86627C4.7436 7.45366 4.69888 6.99964 4.78601 6.56162C4.87314 6.1236 5.0882 5.72125 5.40399 5.40545C5.71979 5.08966 6.12214 4.8746 6.56016 4.78747C6.99818 4.70034 7.4522 4.74506 7.86481 4.91597C8.27741 5.08687 8.63008 5.3763 8.8782 5.74763C9.12632 6.11897 9.25875 6.55554 9.25875 7.00215C9.25875 7.60102 9.02085 8.17537 8.59738 8.59884C8.17391 9.02231 7.59956 9.26021 7.00068 9.26021Z"
        fill="inherit"
      />
      <path
        d="M10.6166 4.19807C11.0656 4.19807 11.4295 3.83412 11.4295 3.38517C11.4295 2.93621 11.0656 2.57227 10.6166 2.57227C10.1677 2.57227 9.80371 2.93621 9.80371 3.38517C9.80371 3.83412 10.1677 4.19807 10.6166 4.19807Z"
        fill="inherit"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` tag
 */
export function GithubIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.60783 0.226562C3.01688 0.226562 0.12793 3.11552 0.12793 6.70646C0.12793 9.56841 1.9909 11.9984 4.55586 12.8624C4.87985 12.9164 4.98785 12.7274 4.98785 12.5384C4.98785 12.3764 4.98785 11.9714 4.98785 11.4314C3.17888 11.8364 2.80089 10.5674 2.80089 10.5674C2.50389 9.81141 2.0719 9.62241 2.0719 9.62241C1.47791 9.21742 2.1259 9.21742 2.1259 9.21742C2.77389 9.27142 3.12488 9.89241 3.12488 9.89241C3.69187 10.8914 4.63686 10.5944 5.01485 10.4324C5.06885 10.0004 5.23085 9.73041 5.41984 9.56841C3.98887 9.40642 2.47689 8.83942 2.47689 6.35546C2.47689 5.65347 2.71989 5.05948 3.15188 4.62749C3.09788 4.46549 2.85489 3.8175 3.20588 2.89952C3.20588 2.89952 3.74587 2.73752 4.98785 3.57451C5.50084 3.43951 6.06783 3.35851 6.60783 3.35851C7.14782 3.35851 7.71481 3.43951 8.2278 3.57451C9.46978 2.73752 10.0098 2.89952 10.0098 2.89952C10.3608 3.79051 10.1448 4.43849 10.0638 4.62749C10.4688 5.08648 10.7388 5.65347 10.7388 6.35546C10.7388 8.83942 9.22678 9.37942 7.76881 9.54141C8.0118 9.73041 8.2008 10.1354 8.2008 10.7294C8.2008 11.5934 8.2008 12.2954 8.2008 12.5114C8.2008 12.6734 8.3088 12.8894 8.65979 12.8354C11.2248 11.9984 13.0877 9.56841 13.0877 6.70646C13.0877 3.11552 10.1988 0.226562 6.60783 0.226562Z"
        fill="inherit"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` tag
 */
export function RoundTickIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <path
        d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
        stroke="inherit"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` and `path` tag
 */
export function RightArrowIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <rect
        opacity="0.3"
        x="6.66666"
        y="17.3333"
        width="2.66667"
        height="18.6667"
        rx="1"
        transform="rotate(-90 6.66666 17.3333)"
        fill="white"
      />
      <path
        d="M15.0572 23.0572C14.5365 23.5779 14.5365 24.4221 15.0572 24.9428C15.5779 25.4635 16.4221 25.4635 16.9428 24.9428L24.9428 16.9428C25.4476 16.438 25.4653 15.6252 24.9829 15.099L17.6495 7.09901C17.152 6.55619 16.3085 6.51952 15.7657 7.01711C15.2229 7.5147 15.1862 8.35812 15.6838 8.90095L22.1545 15.9599L15.0572 23.0572Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * @requires Requires `fill` property to be set to some color either through `className` or css property of `svg` and `path` tag
 */
export function LeftArrowIcon({
  className = "",
  key = "",
  id = "",
}: {
  className?: string;
  key?: string;
  id?: string;
}): JSX.Element {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      key={key}
      id={id}
    >
      <rect
        opacity="0.3"
        width="2.66667"
        height="18.6667"
        rx="1"
        transform="matrix(0 -1 -1 0 25.3333 17.3333)"
        fill="white"
      />
      <path
        d="M16.9428 23.0572C17.4635 23.5779 17.4635 24.4221 16.9428 24.9428C16.4221 25.4635 15.5779 25.4635 15.0572 24.9428L7.0572 16.9428C6.55243 16.438 6.53477 15.6252 7.01713 15.099L14.3505 7.09901C14.8481 6.55619 15.6915 6.51952 16.2343 7.01711C16.7771 7.5147 16.8138 8.35812 16.3162 8.90095L9.84552 15.9599L16.9428 23.0572Z"
        fill="white"
        //383640
      />
    </svg>
  );
}
