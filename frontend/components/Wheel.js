import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

function Wheel(props) {
  const { moveClockwise, moveCounterClockwise, activeCogIndex } = props;

  return (
    <div id="wrapper">
      <div id="wheel">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            className={`cog ${index === activeCogIndex ? "active" : ""}`}
            style={{ "--i": index }}
            key={index}
          >
            {index === activeCogIndex ? "B" : ""}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={moveClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeCogIndex: state.wheel.activeCogIndex,
});

export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise,
})(Wheel);
