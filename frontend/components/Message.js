import React from 'react'
import { connect } from 'react-redux'


function Message(props) {
  return <div id="message">
    {props.infoMessage}
  </div>
}

const mapStateToProps = (state) => ({
  infoMessage: state.infoMessage,
});

export default connect(mapStateToProps, {})(Message);

// ---{messages needed to display}---
// Congrats: "how do you return the sum of two unmbers" is a great question!
// "how do you return the sum of two unmbers" is the question I asked