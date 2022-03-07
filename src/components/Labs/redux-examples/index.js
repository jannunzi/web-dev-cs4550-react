import React from "react";
import HelloReduxExampleComponent
  from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(hello);

const ReduxExamples = () => {
  return(
    <Provider store={store}>
    <div>
      <h2>Redux Examples</h2>
      <HelloReduxExampleComponent/>
    </div>
    </Provider>
  );
};
export default ReduxExamples;
