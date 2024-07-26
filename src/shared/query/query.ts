import { Message } from "shared/constants";

const API_KEY = process.env.REACT_APP_API_KEY;

export const sendQuestion = async (messages: Message[]) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });

    if (!response.ok) throw new Error("Server request error");

    const data = await response.json();
    return data.choices[0];
  } catch (error) {
    console.error("Error querying OpenAI API:", error);
  }
};
