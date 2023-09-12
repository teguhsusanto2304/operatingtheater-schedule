import { render } from "react-dom";
import React, { Component } from "react";
import Calendar from "../components/Calendar";
import EventProvider from "./contexts/EventContext";

class Kalender extends Component {
  render() {
    return (
      <EventProvider>
        <Calendar />
      </EventProvider>
    );
  }
}

render(<Kalender />, document.getElementById("app"));
