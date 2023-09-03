import styled from "styled-components";
import bgimage from "../../assets/images/login-background.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

export const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bgimage});
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
export const CTA = styled.div`
  width: 100%;
`;
export const CTALogoOne = styled.img`
  width: 90%;
`;
