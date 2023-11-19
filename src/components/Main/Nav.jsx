import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faShoppingCart, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import * as N from './NavStyle';
import LogoImage from '/logo.png';
import TodayMenuImage from '/today-menu.jpg';
const Nav = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleModalWrapperClick = (e) => {
    // 모달 외부를 클릭했을 때 모달을 닫기
    if (e.target.classList.contains('modal-wrapper')) {
      closeModal();
    }
  };

  return (
    <N.NavWrapper>
      <N.NavContent>
        <a href="/">
          <N.LogoImage src={LogoImage} alt="로고 이미지" />
        </a>
        <N.SearchWrapper>
          <N.GrayBox>
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <N.NavInput type="text" placeholder="검색어를 입력해주세요." />
          </N.GrayBox>
        </N.SearchWrapper>
        
        <N.NavTagContainer>
          <N.NavTag as={Link} to ="/mypage">
            <FontAwesomeIcon icon={faUser} /> {/* MYPAGE 아이콘 */}
          </N.NavTag>
          <N.NavTag as={Link} to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> {/* LOGIN 아이콘 */}
          </N.NavTag>
          <N.NavTag onClick={openModal}>
            <FontAwesomeIcon icon={faShoppingCart} /> {/* CART 아이콘 */}
          </N.NavTag>
        </N.NavTagContainer>
      </N.NavContent>
      <N.TodayMenuImage src={TodayMenuImage} alt="Today's Menu" />

      {isModalOpen && (
        <N.ModalWrapper className="modal-wrapper" onClick={handleModalWrapperClick}>
          <N.ModalContent>
            <N.ModalCloseButton onClick={closeModal}>
              {/* 모달 창 닫기 버튼 */}
              <FontAwesomeIcon icon={faTimes} />
            </N.ModalCloseButton>
            <FontAwesomeIcon icon={faShoppingCart} />{/* CART 아이콘 */}
              <N.ModalTitle>장바구니</N.ModalTitle>
              <N.CartListContainer>
                <N.CartList>

                </N.CartList>
                <N.CartList>
                
                </N.CartList>
                <N.CartList>
                
                </N.CartList>
                <N.CartList>
                
                </N.CartList>
                <N.CartList>
                  
                </N.CartList>
              </N.CartListContainer>
              <N.ModalContainer>
              <N.CartTotal>
                
              </N.CartTotal>
              </N.ModalContainer>

              <N.PayingButton as={Link} to="/paying">주문하기</N.PayingButton>
          </N.ModalContent>
        </N.ModalWrapper>
      )}
    </N.NavWrapper>
  );
};

export default Nav;


