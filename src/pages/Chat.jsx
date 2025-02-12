import React, { useEffect, useState } from "react";
import axios from "../axios";
import { ChatCard } from "../components/ChatCard";
import Loading from "../components/Loading";
function Chat() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const userId = localStorage.getItem("userId");
    axios
      .post("/users/getCandidates", { userId })
      .then((res) => {
        setCandidates(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки кандидатов:", err);
        setLoading(false);
      });
  }, []);

  console.log(candidates);
  return (
    <div className="flex flex-col justify-start items-center  w-[90vw]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="text-gray text-[20px] font-semibold w-[100%] mt-[70px] ">
            Чаты
          </p>
          <p class="w-[100%] mt-[40px] h-[22px] text-xl font-medium  text-[#7e6b6d]">
            Твои Мэтчи
          </p>
          <div className="flex flex-row justify-start items-start w-full overflow-x-scroll gap-2 mt-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
            {candidates &&
              candidates.map((elem) => (
                <div className="flex flex-col w-[91px] items-center gap-1 relative">
                  <div className="relative w-[81px] h-[81px] bg-[#feffff] rounded-[40px] overflow-hidden border border-solid border-[#f2dddf]">
                    <img
                      className="absolute w-[70px] h-[70px] top-[5px] left-[5px] rounded-[40px] object-cover"
                      alt="Image"
                      src={
                        elem?.photos[0] ||
                        "https://scott88lee.github.io/FMX/img/avatar.jpg"
                      }
                    />
                  </div>

                  <div className="relative w-fit  text-variable-collection-black text-[length:var(--medium-font-size)] tracking-[var(--medium-letter-spacing)] leading-[var(--medium-line-height)] whitespace-nowrap [font-style:var(--medium-font-style)]">
                    {elem.name}
                  </div>
                </div>
              ))}
          </div>
          {/* <ChatCard showDelivered={true} userId={"67a0dcf645020c260d163b19"} /> */}
          <ChatCard showDelivered={true} userId={"67a0dc3b45020c260d163b0c"} />
        </>
      )}
    </div>
  );
}

export default Chat;
