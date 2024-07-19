import React, { useState} from 'react';
import { connect } from 'react-redux';

// import Contact from './Contact';
import Contact from './Contact';


function ContactContainer() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default connect()(ContactContainer);
