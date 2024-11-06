import ChatBoard from "@/components/board/chat-board";
import GameBoard from "@/components/board/game-board";
import ModalBoard from "@/components/board/ModalBoard";
const page = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 h-full overflow-hidden bg-black">
      <div className="flex-1  flex flex-col gap-4">
        <div className="bg-[#29203f] p-4 rounded-lg flex-1">Join Link</div>
        <div className="bg-[#29203f] p-4 rounded-lg h-[80%]">
          <ChatBoard />
          <ModalBoard />
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
