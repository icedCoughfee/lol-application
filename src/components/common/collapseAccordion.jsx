import React, { useState } from "react";

const CollapseAccordion = props => {
  const [visibleKey, setVisibleKey] = useState("");
  const { items, id, labelProperty, ContentType } = props;

  if (items.length) {
    return (
      <div className="accordion m-2" id={id}>
        {items.map((item, index) => {
          const controlEleName = `${id}Collapse_${index}`;
          const controlEleId = `${id}Heading_${index}`;
          const show = index === visibleKey ? "show" : "";
          return (
            <div key={index} className="card">
              <div className="card-header" id={controlEleId}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${controlEleName}`}
                    aria-expanded="false"
                    aria-controls={controlEleName}
                    onClick={() => setVisibleKey(index)}
                  >
                    {item[labelProperty]}
                  </button>
                </h2>
              </div>

              <div
                id={`#${controlEleName}`}
                className={`collapse ${show}`}
                aria-labelledby={controlEleId}
                data-parent="#$"
              >
                <div className="card-body">
                  <ContentType item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default CollapseAccordion;
