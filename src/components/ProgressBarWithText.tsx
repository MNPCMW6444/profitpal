import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 3px solid #ddd;
  border-top: 3px solid #0077cc;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 1s linear infinite;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  height: 10px;
  border-radius: 10px;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Progress = styled.div`
  background-color: #0077cc;
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;

const Text = styled.div`
  text-align: center;
`;

const randomSentence = (sentences: any) =>
  sentences[Math.floor(Math.random() * sentences.length)];

const ProgressBarWithText = ({ founder }: any) => {
  const [progress, setProgress] = useState(0);

  const sentences = [
    `Analyzing potential ${founder.type} investors based on investment focus and portfolio...`,
    `Checking compatibility with ${founder.type} investors that invest in ${founder.vertical}...`,
    `Searching for ${founder.type} investors that prefer ${founder.businessModel} business models...`,
    `Researching ${founder.type} investors with investment sizes of at least ${founder.netRevenue["2022"]}...`,
    `Reviewing ${founder.type} investors' past investment performance and success...`,
    `Searching for ${founder.type} investors that have invested in companies with a similar ${founder.businessModel} business model and revenue streams...`,
    `Reviewing portfolio companies of potential ${founder.type} investors for fit with your company...`,
    `Analyzing potential ${founder.type} investors based on their interest vector and surrounding...`,
    `Checking compatibility with ${founder.type} investors that invest in ${founder.geographicalMarkets}...`,
    `Searching for ${founder.type} investors that specialize in ${founder.vertical}...`,
  ];

  const [currentSentence, setCurrentSentence] = useState<any>(
    randomSentence(sentences)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((progress) => Math.min(progress + 1, 100));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSentence(randomSentence(sentences));
    }, Math.random() * 4000 + 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <ProgressContainer>
        <Spinner />
        <br /> <br />
        <br />
        <Text>{currentSentence}</Text>
        <ProgressBar>
          <Progress style={{ width: `${progress}%` }} />
        </ProgressBar>
      </ProgressContainer>
    </Container>
  );
};

export default ProgressBarWithText;
