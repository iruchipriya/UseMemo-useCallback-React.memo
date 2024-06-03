import React from 'react';

const Child = React.memo(({ message, handleCountChild }) => {
  console.log('Child render');

  return (
    <div>
      Message is {message}
      <button onClick={handleCountChild}>Click Child</button>
    </div>
  );
});

// function Child({ message }) {
//   console.log('Child render');
//   return <div> Message is {message}</div>;
// }

export default Child;
