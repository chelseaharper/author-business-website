import './ProgressWidget.css';
import React from 'react';

interface ProgressWidgetProps {
  projectTitle: string;
  drafting: number;
  selfEdit: number;
  proEdit: number;
  releasePrep: number;
}

function ProgressWidget({ projectTitle, drafting, selfEdit, proEdit, releasePrep }: ProgressWidgetProps) {
  return (
    <div className="progress-widget">
        <h3 className="progress-title">{projectTitle}</h3>
      <div className="circle-stack">

        <div
          className="progress-ring ring1"
          style={{ 
            background: `conic-gradient(#b56576 ${drafting}%, #222 ${drafting}%)`
          }}
        ></div>

        <div
          className="progress-ring ring2"
          style={{ 
            background: `conic-gradient(#6d597a ${selfEdit}%, #222 ${selfEdit}%)`
          }}
        ></div>

        <div
          className="progress-ring ring3"
          style={{ 
            background: `conic-gradient(#355070 ${proEdit}%, #222 ${proEdit}%)`
          }}
        ></div>

        <div
          className="progress-ring ring4"
          style={{ 
            background: `conic-gradient(#e56b6f ${releasePrep}%, #222 ${releasePrep}%)`
          }}
        ></div>

      </div>

      <div className="legend">
        <p><span className="dot dot1"></span> Drafting</p>
        <p><span className="dot dot2"></span> Self-Edit</p>
        <p><span className="dot dot3"></span> Professional Edit</p>
        <p><span className="dot dot4"></span> Release Prep</p>
      </div>
    </div>
  );
}

export default ProgressWidget;