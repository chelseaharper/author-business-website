import { useState } from "react";

function CollapsibleSection({title, children, defaultExpanded = false}) {
    const [expanded, setExpanded] = useState(defaultExpanded);

    return (
        <div className="collapsible-section">
            <h2 onClick={() => setExpanded(!expanded)} className="section-title">
                {title} {expanded ? '▼' : '▶'}
            </h2>
            {expanded && <div className="section-content">{children}</div>}
        </div>
    )
}

export default CollapsibleSection;