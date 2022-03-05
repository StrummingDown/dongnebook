import styled from "styled-components";
import IphoneChat from "../../img/chat.png";
import IphoneDetail from "../../img/detail.png";

const Wrap = styled.div`
  width: 100%;
  /* background-color: #f1f5f0; */
  padding: 50px 0px 50px 0px;
`;

const TitleBox = styled.div`
  width: 100%;
  margin: 0px 0px 30px 0px;
  padding-top: 66px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-left: 35px;
  font-family: "Montserrat", "NotoSansKR", sans-serif;
`;

const Title = styled.div`
  color: green;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Explain = styled.div`
  color: black;
  font-size: 35px;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
  position: relative;
`;

const ScreenBoxOne = styled.div`
  position: absolute;
  margin-top: 50px;
  top: -5%;
  left: 10%;
`;

const ScreenBoxTwo = styled.div`
  position: absolute;
  bottom: 2%;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScreenShot = styled.img`
  max-width: 350px;
  width: 50vw;
  margin-bottom: 10px;
  filter: drop-shadow(10px 10px 15px #000);
`;

const ContentBox = styled.div`
  text-align: center;
`;

const Content = styled.div`
  font-size: 1.4rem;
  font-family: "Montserrat", "NotoSansKR", sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`;

const ChattingService = () => {
  return (
    <Wrap>
      <TitleBox>
        <Title>채팅 서비스</Title>
        <Explain>게시글을 확인하고 </Explain>
        <Explain>교환 약속을 잡으세요</Explain>
      </TitleBox>
      <Container>
        <ScreenBoxOne>
          <ScreenShot src={IphoneDetail} />
        </ScreenBoxOne>
        <ScreenBoxTwo>
          <ScreenShot src={IphoneChat} />
          <ContentBox>
            <Content>중고교환은 타이밍!</Content>
            <Content>실시간 대화로 더 빠르게 거래하세요</Content>
          </ContentBox>
        </ScreenBoxTwo>
      </Container>
    </Wrap>
  );
};
export default ChattingService;
