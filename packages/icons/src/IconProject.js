import * as React from 'react';

function SvgIconProject(props, svgRef) {
  return (
    <svg
      className="icon_project_svg__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M524.544 129.946l349.85 196.761a25.6 25.6 0 010 44.647l-349.85 196.812a25.6 25.6 0 01-25.088 0l-349.85-196.812a25.6 25.6 0 010-44.647l349.85-196.761a25.6 25.6 0 0125.088 0z"
        fill="#83E2D6"
      />
      <path
        d="M824.678 474.624l69.581 39.168a12.8 12.8 0 010 22.323L518.298 747.571a12.8 12.8 0 01-12.596 0L129.741 536.115a12.8 12.8 0 010-22.323l69.53-39.117L512 650.598l312.678-175.923z"
        fill="#4FC8B9"
      />
      <path
        d="M824.678 650.547l69.581 39.168a12.8 12.8 0 010 22.323L518.298 923.494a12.8 12.8 0 01-12.596 0L129.741 712.038a12.8 12.8 0 010-22.323l69.53-39.168L512 826.522l312.678-175.975z"
        fill="#04A18D"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconProject);
export default ForwardRef;
