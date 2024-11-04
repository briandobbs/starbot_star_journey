export interface DialogMessage {
  text: string;
  speaker: "AI" | "Player";
  condition?: () => boolean; // Optional function to control display
}

// Sample dialog messages with conditions
export const dialogMessages: DialogMessage[] = [
  { text: "Yay! You are finally awake!", speaker: "AI" },
  { text: "Where am I?", speaker: "Player" },
  {
    text: "You're in a safe place. Try moving around to explore.",
    speaker: "AI",
    condition: () => true,
  },
];
