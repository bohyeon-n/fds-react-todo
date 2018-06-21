import React from "react";

import { Redirect } from "react-router-dom";

export default function(redirectPath) {
  return function(WrappedComponent) {
    return class extends React.Component {
      render() {
        if (localStorage.getItem("token")) {
          return <WrappedComponent {...this.props} />;
        } else {
          return <Redirect to={redirectPath} />;
        }
      }
    };
  };
}
