import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import PaymentSummary from "./PaymentSummary";
import S from "./style";

const Payment = () => {
  const { schoolId } = useParams();

  // 더미(나중에 API로 교체)
  const school = useMemo(
    () => ({
      id: Number(schoolId),
      name: "강천초결운분교장",
      address: "경기도 여주시 강천면 마감로117-14",
    }),
    [schoolId]
  );

  // ✅ reserve undefined 방지
  const [reserve, setReserve] = useState({
    reserveType: "PARKING", // "PLACE" | "PARKING"
    startDate: "12월 23일",
    endDate: "",
    price: 50000,
    deposit: 0,
  });

  const [user, setUser] = useState({
    name: "홍길동",
    email: "hgd12345@gmail.com",
    phone: "010-2222-4444",
  });

  const [payType, setPayType] = useState("TOSS"); // GENERAL | TOSS | KAKAO

  const totalPrice = useMemo(() => Number(reserve.price || 0), [reserve.price]);

  const onClickPay = () => {
    // TODO: PortOne 연결
    alert(`결제: schoolId=${schoolId}, type=${payType}, amount=${totalPrice}`);
  };

  return (
    <S.Page>
      <S.Grid>
        <S.Left>
          <PaymentForm
            user={user}
            setUser={setUser}
            reserve={reserve}
            setReserve={setReserve}
            payType={payType}
            setPayType={setPayType}
          />
        </S.Left>

        <S.Right>
          <PaymentSummary
            school={school}
            reserve={reserve}
            totalPrice={totalPrice}
            onClickPay={onClickPay}
          />
        </S.Right>
      </S.Grid>
    </S.Page>
  );
};

export default Payment;
