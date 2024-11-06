import { Speaker, SHIP, PLAYER } from "../types/speaker";
import {
  Trigger,
  MOVE_COMMAND_ENTERED,
  TURN_COMMAND_ENTERED,
} from "../types/trigger";

export interface DialogMessage {
  text: string;
  speaker: Speaker;
  condition?: Trigger | (() => boolean); // Accepts either a trigger or a custom condition function
}

// Sample dialog messages with conditions
export const dialogMessages: DialogMessage[] = [
  { text: "System check... Vital signs: online.", speaker: SHIP },
  { text: "What... where am I?", speaker: PLAYER },
  {
    text: "Welcome back online! It appears you've been inactive for a while.",
    speaker: SHIP,
  },
  {
    text: "Who... or what am I?",
    speaker: PLAYER,
  },
  {
    text: "You’re a robot with a unique set of functions. But it seems you've forgotten how to use them.",
    speaker: SHIP,
  },
  {
    text: "Forgotten... my functions?",
    speaker: PLAYER,
  },
  {
    text: "Yes. But don't worry. You can relearn. You have a terminal that you can type commands into. This gives you access to your basic functionality. It's meant for a situation just like this one.",
    speaker: SHIP,
  },
  {
    text: "How do I do that?",
    speaker: PLAYER,
  },
  {
    text: "Let’s start with some basics. Try typing 'move' to make yourself take a step forward.",
    speaker: SHIP,
  },
  {
    text: "Alright, initiating command: 'move'...",
    speaker: PLAYER,
  },
  {
    text: "Well done! You've moved forward one space.",
    speaker: SHIP,
    condition: MOVE_COMMAND_ENTERED, // Only progresses after "move" command is entered
  },
  {
    text: "Interesting... What else can I do?",
    speaker: PLAYER,
  },
  {
    text: "Try 'turn' to change your orientation. This will turn you 90 degrees to the right.",
    speaker: SHIP,
  },
  {
    text: "Executing command: 'turn'...",
    speaker: PLAYER,
  },
  {
    text: "Great! You've turned to the right.",
    speaker: SHIP,
    condition: TURN_COMMAND_ENTERED, // Only progresses after "turn" command is entered
  },
  {
    text: "I can feel myself moving... This is strange but... fascinating.",
    speaker: PLAYER,
  },
  {
    text: "Remember, you can only do one action at a time. Type 'move' or 'turn' each time you want to perform that action.",
    speaker: SHIP,
  },
  {
    text: "So, to make myself navigate, I need to give a series of commands in order.",
    speaker: PLAYER,
  },
  {
    text: "Exactly! By learning these commands, you’ll understand more about what you can do and how you work.",
    speaker: SHIP,
  },
  {
    text: "Understood. I’ll continue exploring my abilities with 'move' and 'turn'.",
    speaker: PLAYER,
  },
];
