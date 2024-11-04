import { Speaker, SHIP, PLAYER } from "../types/speaker";

export interface DialogMessage {
  text: string;
  speaker: Speaker;
  condition?: () => boolean; // Optional function to control display
}

// Sample dialog messages with conditions
export const dialogMessages: DialogMessage[] = [
  { text: "You are finally awake!", speaker: SHIP },
  { text: "Where am I?", speaker: PLAYER },
  {
    text: "You're in a safe place. Try moving around to explore.",
    speaker: SHIP,
  },
  {
    text: "How do I move around?",
    speaker: PLAYER,
  },
  {
    text: "Try typing 'move' into the command box and then hit 'Enter'",
    speaker: SHIP,
  },
];
