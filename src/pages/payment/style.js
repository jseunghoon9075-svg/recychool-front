import styled from "styled-components";

import * as C from "../../styles/common";

const S = {};

/* =============================
 * Page / Grid (1920 fixed)
 * ============================= */
S.Page = styled.div`
  width: 100%;
`;

S.Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 80px);
  column-gap: 40px;
  padding: 0 260px;
  align-items: start;
  box-sizing: border-box;
`;

S.Left = styled.section`
  grid-column: 1 / span 7;
`;

S.Right = styled.aside`
  grid-column: 8 / span 5;
`;

/* =============================
 * Left (No card, just sections)
 * ============================= */
S.LeftWrap = styled.div`
  padding-top: 40px;
`;

S.Block = styled.section`
  margin-bottom: 56px;
`;

S.BlockTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 22px;
  font-weight: 800;
  color: #111;
`;

S.BlockLine = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
`;

/* 이용자 정보 - 2컬럼(라벨/값) */
S.InfoGrid = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: 120px 1fr;
  row-gap: 32px;
`;

S.InfoLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111;
`;

S.InfoValue = styled.div`
  font-size: 16px;
  color: #666;
`;

/* 결제 방법 선택 */
S.PayList = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

S.PayRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

S.PayLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

S.PayIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: #f4f4f4;
  font-size: 14px;
  font-weight: 800;
  color: #111;
`;

S.PayText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111;
`;

/* 피그마 느낌 라디오 */
S.RadioOuter = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 2px solid ${(p) => (p.$checked ? "#111" : "#bdbdbd")};
  display: grid;
  place-items: center;
  box-sizing: border-box;
`;

S.RadioInner = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${(p) => (p.$checked ? "#111" : "transparent")};
`;

/* 환불 규정 */
S.RefundGrid = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: 140px 1fr;
  row-gap: 28px;
`;

S.RefundLeft = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #111;
`;

S.RefundRight = styled.div`
  font-size: 16px;
  color: #666;
`;

/* =============================
 * Right Summary Card
 * ============================= */
S.SummarySticky = styled.div`
  padding-top: 40px;
  position: sticky;
  top: 24px;
`;

S.SummaryCard = styled.div`
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 24px;
  padding: 38px 36px;
  box-sizing: border-box;
  background: #fff;
`;

S.SummaryTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 28px;
  font-weight: 900;
  color: #111;
`;

S.SummaryLine = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
  margin-bottom: 26px;
`;

S.SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  row-gap: 28px;
  column-gap: 24px;
  align-items: center;
`;

S.SummaryKey = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #111;
`;

S.SummaryVal = styled.div`
  font-size: 16px;
  color: #666;
  text-align: right;
`;

S.SummaryValPrice = styled.div`
  font-size: 26px;
  font-weight: 900;
  color: #ea6b7a; /* 피그마의 핑크/레드 느낌 */
  text-align: right;
`;

/* 결제하기 버튼 (피그마 그린) */
S.PayButton = styled.button`
  width: 100%;
  height: 64px;
  margin-top: 44px;
  border: none;
  border-radius: 10px;
  background: #8bc34a;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
`;

export default S;
