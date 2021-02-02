import { ExampleComponent } from "@carbon/ibm-cloud-cognitive";
import React from "react";
import { render } from "react-dom";
import { CommonHeader } from "./components/CommonHeader/CommonHeader.js";
import { Content } from "carbon-components-react";

import "./index.scss";

const App = () => (
  <div className="app">
    <CommonHeader className="header-area" />
    <Content className="content-area carbon-theme--g10">
      <ExampleComponent />
    </Content>
  </div>
);

render(<App />, document.getElementById("root"));
