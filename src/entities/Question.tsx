import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SYSTEM_INIT_MESSAGES } from "../shared/constants";

interface Message {
  role: string;
  content: string;
}

const API_KEY = process.env.REACT_APP_API_KEY;

const openaiQuery = async (messages: Message[]) => {
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

const Question: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [generatedText, setGeneratedText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([...SYSTEM_INIT_MESSAGES]);

  const handleGenerate = async () => {
    const { message: newMessage } = await openaiQuery([...messages, { role: "user", content: inputText }]);
    const responseText = newMessage.content;

    setMessages([...messages, { role: "user", content: inputText }, newMessage]);
    setGeneratedText(responseText || "");
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <MainContainer>
      <header className="App-header">
        <h1>모의면접 어플리케이션</h1>
        <textarea
          rows={4}
          cols={50}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here"
        />
        <button onClick={handleGenerate}>답변</button>
        <div>
          <h2>면접관의 생각</h2>
          <p dangerouslySetInnerHTML={{ __html: generatedText.replaceAll("\n", "<br>") }}></p>
        </div>
      </header>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;

export default Question;
