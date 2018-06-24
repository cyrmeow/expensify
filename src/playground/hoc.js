// HOC - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>information: {props.info}</p>
  </div>
);

const withAdminWarning = (Component) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <Component {...props}/>
    </div>
  );
};

const requireAuthentication = (Component) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <p>you need to log in to continue</p>
        )
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the details"/>, document.getElementById('app-root'));