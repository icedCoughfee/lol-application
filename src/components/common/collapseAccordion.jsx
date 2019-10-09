import React, { Component } from "react";
class CollapseAccordion extends Component {
  state = {
    visibleKey: "",
  };
  render() {
    const { items, id, labelProperty, ContentType } = this.props;
    if (items.length) {
      return (
        <div className="accordion" id={id}>
          {items.map((item, index) => {
            const controlEleName = `${id}Collapse_${index}`;
            const controlEleId = `${id}Heading_${index}`;
            const show = index === this.state.visibleKey ? "show" : "";
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
                      onClick={() => this.toggleAccordionKeyVisbility(index)}
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
  }

  toggleAccordionKeyVisbility = index => {
    index === this.state.visibleKey
      ? this.setState({ visibleKey: "" })
      : this.setState({ visibleKey: index });
  };
}

export default CollapseAccordion;
