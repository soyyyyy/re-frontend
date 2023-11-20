import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background-color: rgba(0, 0, 0, 0); /* 완전히 투명한 배경 */
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  @media screen and (min-width: 800px) and (max-width:1120px) {
    width: 70%;
  }
  @media screen and (min-width: 600px) and (max-width:800px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 140%;
  }
`;
export const ModalContent = styled.div`
  width: 66.66%;
  background-color: #FFFAF3;
  color: #FFAC33;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ModalCloseButton = styled.button`
  display: flex;
  font-size: 20px;
  padding:10px;
  color:  #FFAC33;
  cursor: pointer;
  align-self: flex-start;

`;

export const ModalTitle = styled.a`
  margin: 15px;
  font-size: 40px;
  @media screen and (max-width: 800px) {
    font-size: 30px;

  }
`;

export const CartListContainer = styled.div`
  width: 100%;
  overflow-y: auto; /* 수직 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤 방지 */

  &::-webkit-scrollbar {
  width: 8px; 
}

&::-webkit-scrollbar-thumb {
  background-color: #FFAC33;
  border-radius: 5px;
  backdrop-filter: blur(50px);
}

&::-webkit-scrollbar-track {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
}

`;

export const CartList = styled.div`
  width: 90%;
  height: 90px;
  background-color: white;
  border: 1.5px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 20px;
`;

export const ModalContainer = styled.div`
  width: 90%;
  margin-top: auto;
  margin-bottom: 20px;  

`;

export const CartTotal = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  border: 2.5px solid #FFAC33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 0px;
  margin-top:20px;
  `;
export const PayingButton = styled.button`
  background-color: #FFAC33;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  width: 90%;
  height: 70px;
  font-size: 30px;
  border-radius: 50px;
  font-weight: bold;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;

  @media screen and (max-width: 600px){
    width: 60%;
    height: 60px;
    font-size: 25px;

  }
`;
export const LoginMessage = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: #FFAC33;
  font-size: 20px;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
export const LoginButton=styled.button`
  width: 30%;
  height: 50px;
  color: white;
  background-color:#FFAC33;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;  
  cursor: pointer;
  font-size: 20px;
`;