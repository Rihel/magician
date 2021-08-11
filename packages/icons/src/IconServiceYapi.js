import * as React from 'react';

function SvgIconServiceYapi(props, svgRef) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M24 4.5c10.77 0 19.5 8.73 19.5 19.5S34.77 43.5 24 43.5 4.5 34.77 4.5 24 13.23 4.5 24 4.5zm0 3C14.887 7.5 7.5 14.887 7.5 24S14.887 40.5 24 40.5 40.5 33.113 40.5 24 33.113 7.5 24 7.5z"
          fill="#4FC8B9"
          fillRule="nonzero"
        />
        <path
          d="M25.928 23a2.5 2.5 0 01-.915 3.415l-9.526 5.5a2.5 2.5 0 11-2.5-4.33l9.526-5.5a2.5 2.5 0 013.415.915z"
          fill="#83E2D6"
        />
        <path
          d="M22.072 23a2.5 2.5 0 00.915 3.415l9.526 5.5a2.5 2.5 0 102.5-4.33l-9.526-5.5a2.5 2.5 0 00-3.415.915z"
          fill="#4FC8B9"
        />
        <rect fill="#04A18D" x={21.5} y={10} width={5} height={17} rx={2.5} />
        <path d="M24 25.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#FFF" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconServiceYapi);
export default ForwardRef;
