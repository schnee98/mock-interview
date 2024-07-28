import { FC, useEffect, useState } from "react";
import { Message } from "shared/constants";
import { initializeMessages } from "shared/helper/message";
import { sendQuestion } from "shared/query/query";
import useSelectionStore from "shared/store/useSelectionStore";
import styled from "styled-components";

const Question: FC = () => {
  const { developer, themeContents } = useSelectionStore();
  const [inputText, setInputText] = useState<string>("");
  const [generatedText, setGeneratedText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([...initializeMessages({ developer, themeContents })]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    const previousMessage = [...messages, { role: "user", content: inputText }];
    const { message: newMessage } = await sendQuestion(previousMessage);
    const responseText = newMessage.content;

    setMessages([...previousMessage, newMessage]);
    setGeneratedText(responseText || "");
    setIsLoading(false);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <>
      <h1>면접관의 질문</h1>
      <Feedback>
        {isLoading ? (
          <LoadingSpinner>로딩 중...</LoadingSpinner>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: generatedText.replaceAll("\n", "<br>") }}></p>
        )}
      </Feedback>
      <InputContainer>
        <InputArea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="답변을 적어주세요." />
        <button onClick={handleGenerate}>답변</button>
      </InputContainer>
    </>
  );
};

const Feedback = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  color: #888;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputArea = styled.textarea`
  box-sizing: border-box;
  width: inherit;
  height: 2rem;
`;

export default Question;
