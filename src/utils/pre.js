import React from 'react';

const Pre = ({obj}) => {
  return (
    <pre>
      {JSON.stringify(obj, null, 2)}
    </pre>
  );
};

export default Pre;