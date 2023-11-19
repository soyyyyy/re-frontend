import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart, faUserPen, faComment } from '@fortawesome/free-solid-svg-icons';

import * as C from './../Main/ContainerStyle';
import LogoImage from './../Login/logo.png';
import * as M from './MyPageStyle';
const EditProfileContent = () => {
  return (
    <div>
      <M.MypageRow>
        <M.MypageContent>NICKNAME</M.MypageContent>
        <M.InputBox></M.InputBox>
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>PHONE NUMBER</M.MypageContent>
        <M.InputBox></M.InputBox>
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>current PASSWORD</M.MypageContent>
        <M.InputBox></M.InputBox>
      </M.MypageRow>
      <M.MypageRow>
        <M.MypageContent>NEW PASSWORD</M.MypageContent>
        <M.InputBox></M.InputBox>
      </M.MypageRow>
      <M.ModifyButton>
        수정하기
      </M.ModifyButton>    
    </div>
  );
};


const ReviewManagementContent = () => {  
  const itemsPerPage = 5;  // 한 페이지에 표시될 항목 수
  const [currentPage, setCurrentPage] = useState(1);

  // 총 항목 수
  const totalEntries = 17;  // 예시로 17개로 설정

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalEntries / itemsPerPage);

  // 현재 페이지에 해당하는 항목 가져오기
  const getCurrentPageEntries = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const reversedEntries = [...entries].reverse(); // 배열을 뒤집음
    return reversedEntries.slice(startIndex, endIndex);
  };

  // 페이지 변경 이벤트 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const entries = Array.from({ length: totalEntries }).map((_, index) => ({
    id: index + 1,
    // 나머지 항목 정보
  }));

  return (
    <M.ReviewContainer>
      {getCurrentPageEntries().map((entry) => (
        <M.ReviewList key={entry.id}>
          {/* 각 항목에 대한 표시 */}
          {entry.id}
        </M.ReviewList>
      ))}
      
      {/* 페이지네이션 컴포넌트 추가 */}
      <M.Pagination>
        <ul>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </M.Pagination>
    </M.ReviewContainer>
  );
};

export default function MyPage() {
  const [isEditing, setIsEditing] = useState(true); // 초기에 정보 수정 페이지로 시작
  const [isReviewManaging, setIsReviewManaging] = useState(false); // 리뷰 관리 상태

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setIsReviewManaging(false);
  };

  const handleReviewManageButtonClick = () => {
    setIsEditing(false);
    setIsReviewManaging(true);
  };

  return (
    <C.Container>
      <C.WhiteBox>
        <M.ContentContainer>
          <a href="/">
            <M.BackButton>⬅ BACK TO MENU</M.BackButton>
          </a>
          <M.NavTagContainer>
            <M.NavTag as={Link} to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> {/* LOGIN 아이콘 */}
            </M.NavTag>
            <M.NavTag as={Link} to="/">
              <FontAwesomeIcon icon={faShoppingCart} /> {/* CART 아이콘 */}
            </M.NavTag>
          </M.NavTagContainer>
          <M.LogoContainer>
            <M.LogoImage
              src={LogoImage}
              alt="로고"
            />
          </M.LogoContainer>

          <M.Title>MyPage</M.Title>
          <M.IvoryBox>
            <M.ButtonContainer>
              <M.MypageButton 
                onClick={handleEditButtonClick}
                selected={isEditing}  // 변경된 부분
                >
                <FontAwesomeIcon icon={faUserPen} /><br></br>
                정보 수정
              </M.MypageButton>

              <M.MypageButton 
                onClick={handleReviewManageButtonClick}
                selected={isReviewManaging} >
                <FontAwesomeIcon icon={faComment} /><br></br>
                리뷰 관리
              </M.MypageButton>
            </M.ButtonContainer>

              {isEditing && <EditProfileContent />} {/* 정보 수정 컴포넌트 */}
              {isReviewManaging && <ReviewManagementContent />} {/* 리뷰 관리 컴포넌트 */}
          </M.IvoryBox>


        </M.ContentContainer>
      </C.WhiteBox>
    </C.Container>
  );
}
