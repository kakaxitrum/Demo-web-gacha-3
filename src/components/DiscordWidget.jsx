import React, { useEffect, useState, useMemo } from "react";

const CustomDiscordWidget = ({ serverId }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(false);
  
  // Fixed member count that never changes
  const memberOnlineCount = useMemo(() => {
    return Math.floor(Math.random() * 500) + 1000;
  }, []); // Empty dependency array ensures this only runs once

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const res = await fetch(
          `https://discord.com/api/guilds/${serverId}/widget.json`,
        );
        if (!res.ok) throw new Error("Không thể tải widget");
        const data = await res.json();
        setMembers(data.members || []);
      } catch (err) {
        console.error("Lỗi:", err);
        setError(true);
      }
    };

    fetchDiscordData();
  }, [serverId]);

  return (
    <div>
      <div className='group bg-[#22134d] rounded-xl p-6 shadow-xl w-full max-w-4xl mx-auto'>
        <h2 className='text-[#34dbc5] text-xl font-bold mb-4'>
          🎮 Thành viên đang online
        </h2>
        <p className='text-[#ebb133] mb-4'>
          <span className='text-[#ffffff]'>Số lượng thành viên online: </span>{" "}
          <span className='text-[#e4d12d] font-semibold'>
            {memberOnlineCount}
          </span>
        </p>

        {error ? (
          <p className='text-red-400'>Không thể tải dữ liệu từ Discord</p>
        ) : (
          <>
            {/* Scrollbar style inline */}
            <style>{`
            .scroll-wrapper::-webkit-scrollbar {
              width: 6px;
            }

            .scroll-wrapper::-webkit-scrollbar-track {
              background: transparent;
            }

            .scroll-wrapper::-webkit-scrollbar-thumb {
              background-color: transparent;
              border-radius: 10px;
              transition: background-color 0.3s ease;
            }

            .group:hover .scroll-wrapper::-webkit-scrollbar-thumb {
              background-color: #7289da;
            }

            /* Firefox */
            .scroll-wrapper {
              scrollbar-width: thin;
              scrollbar-color: transparent transparent;
              transition: scrollbar-color 0.3s ease;
            }

            .group:hover .scroll-wrapper {
              scrollbar-color: #7289da transparent;
            }
          `}</style>

            <div
              className='scroll-wrapper flex flex-wrap gap-5 overflow-y-auto'
              style={{
                maxHeight: "180px",
                overflowX: "hidden",
              }}
            >
              {members.map((member) => (
                <div
                  key={member.id}
                  className='flex flex-col items-center w-20 ml-2'
                >
                  <img
                    src={member.avatar_url}
                    alt={member.username}
                    className='w-12 h-12 rounded-full border-2 border-green-500'
                  />
                  <span className='text-white text-[10px] mt-1 truncate text-center leading-tight'>
                    {member.username}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <a 
        href="https://discord.gg/gachaking" 
        target="_blank" 
        rel="noopener noreferrer"
        className='block text-center bg-[#c0238c] hover:bg-[#d02a99] pb-2 w-full max-w-sm rounded-3xl mx-auto mt-4 transition-colors duration-200 cursor-pointer'
      >
        <h1 className='text-[#ffffff] text-lg font-semibold mt-4 text-center pt-2'>
          {"THAM GIA DISCORD"}
        </h1>
      </a>
    </div>
  );
};

export default CustomDiscordWidget;
