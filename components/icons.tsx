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
