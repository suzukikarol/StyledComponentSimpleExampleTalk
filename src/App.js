import React from 'react';
import { Title, TitleSmall, Buttom } from './style.js';
 
function App() {
  return (
    <div>
      <Title fontSize={30}>
        Hello Word!
        <p>aqui subititulo!</p>
      </Title>
      <TitleSmall>
        Thanks all folks!
      </TitleSmall>
      <Buttom type="ok">
        OK
      </Buttom>
      <Buttom type="cancel">
        Cancel
      </Buttom>
      <Buttom type="alert">
        Alert
      </Buttom>
      <Buttom type="default">
        Default
      </Buttom>
    </div>
  );
}

export default App;
