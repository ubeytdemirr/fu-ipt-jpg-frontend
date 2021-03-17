import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

export class Home extends Component<any> {
  changeLanguage = (lng: string) => {
    this.props.i18n.changeLanguage(lng);
  };
  render() {
    return (
      <div>
        {" "}
        {this.props.t("welcome")}
        <button onClick={() => this.changeLanguage("tr")}>Change</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(withTranslation()(Home));
