import React from "react";

export default class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tabIndex) {
    this.setState({
      activeTabIndex:
        tabIndex === this.state.activeTabIndex
          ? this.props.defaultActiveTabIndex
          : tabIndex
    });
  }

  renderTabChildren() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs-nav nav navbar-nav navbar-left">
          {this.renderTabChildren()}
        </ul>
        <div className="tabs-active-content">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}
