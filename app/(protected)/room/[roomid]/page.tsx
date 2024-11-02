import ChatBoard from "@/components/board/ChatBoard";
import GameBoard from "@/components/board/GameBoard";

const page = () => {
  return (
    <div className="flex flex-row p-4 gap-4 h-full">
      <div className="flex-1 h-[900px] flex flex-col gap-4">
        <div className="bg-[#29203f] p-4 rounded-lg flex-1">
          Join Link
        </div>
        <div className="bg-[#29203f] p-4 rounded-lg h-[80%]">
          <ChatBoard />
        </div>
      </div>
      <div className="h-full">
        <GameBoard />
      </div>
      <div className="flex-1 h-full">List</div>
    </div>
  );
};

export default page;
