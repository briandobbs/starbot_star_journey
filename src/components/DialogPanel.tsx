import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { nextDialog } from "../app/dialogSlice";
import { activateTrigger } from "../app/triggerSlice";
import { dialogMessages, DialogMessage } from "../data/dialogData";
import { SHIP, PLAYER } from "../types/speaker";
import {
  Trigger,
  MOVE_COMMAND_ENTERED,
  TURN_COMMAND_ENTERED,
} from "../types/trigger";
import ShipImage from "../assets/ship_portrait_32x32.png";
import StarbotImage from "../assets/starbot_portrait_32x32.png";

const DialogPanel: React.FC = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(
    (state: RootState) => state.dialog.currentIndex
  );
  const activeTriggers = useSelector(
    (state: RootState) => state.triggers.activeTriggers
  );
  const dialog = useSelector((state: RootState) => state.dialog.filteredDialog);

  const playerHasWokenUp = true; // start condition for game

  const handleCommand = (command: string) => {
    if (command === "move") {
      dispatch(activateTrigger(MOVE_COMMAND_ENTERED));
    } else if (command === "turn") {
      dispatch(activateTrigger(TURN_COMMAND_ENTERED));
    }
    dispatch(nextDialog());
  };

  const handleNextDialog = () => {
    if (currentIndex < dialog.length) {
      dispatch(nextDialog());
    }
  };

  return (
    <div className="tw-w-full tw-max-w-[500px] tw-p-2.5 tw-bg-[#f9f9f9] tw-border tw-border-[#ccc] tw-h-[400px] tw-overflow-y-auto">
      {dialog.map((msg, index) => (
        <div
          key={index}
          className={`tw-chat ${
            msg.speaker === SHIP ? "tw-chat-start" : "tw-chat-end"
          }`}
        >
          <div className="tw-chat-image tw-avatar">
            <div className="tw-w-10 tw-rounded-full">
              <img
                src={msg.speaker === SHIP ? ShipImage : StarbotImage}
                alt={msg.speaker === SHIP ? "Ship" : "Starbot"}
              />
            </div>
          </div>
          <div className="tw-chat-header">
            {msg.speaker === SHIP ? "Ship" : "Starbot"}
          </div>
          <div className="tw-chat-bubble">{msg.text}</div>
        </div>
      ))}
      <button className="tw-btn tw-btn-primary" onClick={handleNextDialog}>
        Next
      </button>
    </div>
  );
};

export default DialogPanel;
