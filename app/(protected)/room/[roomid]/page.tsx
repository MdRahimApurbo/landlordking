import ChatBoard from "@/components/board/ChatBoard";
import GameBoard from "@/components/board/GameBoard";

const page = () => {
  return (
    <div className="flex flex-row p-4 gap-4">
      <div className="flex-1">
        <div className="bg-[#29203f] p-4 rounded-lg">
          <ChatBoard />
        </div>
      </div>
      <div className="">
        <GameBoard />
      </div>
      <div className="flex-1">List</div>
    </div>
  );
};

export default page;
