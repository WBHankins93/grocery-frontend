import React from 'react';
import FormComponent from './components/form.jsx';
import './App.css'
//import { findByLabelText } from '@testing-library/react';
import { Bee24 } from '@carbon/icons-react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  ModalWrapper
} from 'carbon-components-react';
//import List from './components/List.jsx';

function App() {
  return (
    <div>
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#">
          Grocery App
        </HeaderName>
        <HeaderGlobalBar>

        <ModalWrapper
          buttonTriggerText={<Bee24 />}
          id='1'
          modalHeading="Contributors"
        >
          <h1>Front-End Developers:</h1>
          <h4>Ben Hankins</h4>
          <h4>Christine Samarchi</h4><br></br>

          <h1>Back-End Developer:</h1>
          <h4>Vivin Abraham</h4>
        </ModalWrapper>
          
        </HeaderGlobalBar>
        
      </Header>
      <FormComponent />
    </div>
  );
}

export default App;
