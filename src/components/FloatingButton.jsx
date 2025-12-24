import React, { useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const FloatingButton = () => {
  const navigate = useNavigate();

  const currentUser = useSelector(state => state.user?.currentUser);
  const userId = currentUser?.id;
  const token = localStorage.getItem("accessToken");

  const [open, setOpen] = useState(false);
  const [placeList, setPlaceList] = useState([]);

  /* 달력 버튼 */
  const toggleMenu = () => {
    setOpen(prev => !prev);
    setPlaceList([]);
  };

  /* 행사 버튼 (쿠키 방식 유지 – 이미 잘 됨) */
  const handleEventClick = async () => {
    if (!userId) return;

    try {
      const res = await fetch(
        `${BACKEND_URL}/reservations/my/${userId}`,
        { credentials: "include" }
      );

      if (!res.ok) return;

      const json = await res.json();
      const list = Array.isArray(json.data) ? json.data : [];

      if (list.length > 0) {
        navigate("/movie/reservation");
      }
    } catch (e) {
      console.error(e);
    }
  };

  /* 주차 버튼 (JWT 방식으로 수정) */
  const handleParkingClick = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/private/schools/parking/reserves`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) return;

      const json = await res.json();
      const reserveId = json.data;

      if (reserveId) {
        navigate(`/complete/${reserveId}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  /* 학교 버튼 (JWT 방식으로 수정) */
  const handleSchoolClick = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/private/schools/place/reserves`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) return;

      const json = await res.json();
      const list = Array.isArray(json.data) ? json.data : [];

      if (list.length === 0) return;

      setPlaceList(list); // [reserveId, reserveId]
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.FloatingWrapper>

      {/* 학교 장소 가로 플로팅 */}
      {placeList.length > 0 && (
        <S.SchoolFloationButton>
          {placeList.map((reserveId, index) => (
            <S.SchoolFloationButton1
              key={reserveId}
              onClick={() => navigate(`/complete/${reserveId}`)}
            >
              {index + 1}
            </S.SchoolFloationButton1>
          ))}
        </S.SchoolFloationButton>
      )}

      {/* 서브 플로팅 버튼 */}
      {open && (
        <S.SubFloatingButton>

          <S.SubFloatingButton3 onClick={handleSchoolClick}>
            <img src="/assets/images/schooll.png" alt="학교" />
          </S.SubFloatingButton3>

          <S.SubFloatingButton2 onClick={handleEventClick}>
            <img src="/assets/images/event.png" alt="행사" />
          </S.SubFloatingButton2>

          <S.SubFloatingButton1 onClick={handleParkingClick}>
            <img src="/assets/images/car.png" alt="자동차" />
          </S.SubFloatingButton1>

        </S.SubFloatingButton>
      )}

      {/* 달력 버튼 */}
      <S.FloatingButton onClick={toggleMenu}>
        <img src="/assets/images/calender.png" alt="달력" />
      </S.FloatingButton>

    </S.FloatingWrapper>
  );
};

export default FloatingButton;
