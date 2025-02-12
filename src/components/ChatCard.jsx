import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
export const ChatCard = ({
  showDelivered = true,
  property1,
  className,
  userId,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .post("/auth/getUserById", {
        userId,
      })
      .then((res) => {
        if (res.data) {
          setUser(res.data);
        }
      });
  }, []);

  return (
    <div
      onClick={() => navigate(`/chatWith/${userId}`)}
      className={`w-[100%] flex items-center gap-2 px-2 py-6 relative ${
        property1 === "pressed" ? "bg-[#ffecec]" : "bg-white"
      } ${className}`}
    >
      <img
        src={user?.photos[0]}
        className="relative w-[47px] h-[47px] object-cover bg-variable-collection-light-grey rounded-[80px]"
        alt=""
      />

      <div className="flex flex-col items-start grow flex-1 h-11 justify-between relative">
        <div className="flex  self-stretch mt-[-1.00px] tracking-[var(--medium-letter-spacing)] text-[length:var(--medium-font-size)] [font-style:var(--medium-font-style)] text-variable-collection-black font-[number:var(--medium-font-weight)] leading-[var(--medium-line-height)] relative">
          {user?.name}
        </div>

        <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-variable-collection-dark-grey font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
          Была в сети 5 минут назад
        </div>
      </div>

      <div className="w-[37px] flex flex-col items-end h-[42px] justify-between relative">
        <div className="font-small self-stretch mt-[-1.00px] tracking-[var(--small-letter-spacing)] text-[length:var(--small-font-size)] [font-style:var(--small-font-style)] text-variable-collection-colorgrey font-[number:var(--small-font-weight)] text-right leading-[var(--small-line-height)] relative">
          16:00
        </div>

        {showDelivered && (
          <img className="w-5 h-[15px]" src="/images/icons/delivered.svg"></img>
        )}
      </div>
    </div>
  );
};
