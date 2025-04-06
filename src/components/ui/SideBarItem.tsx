export function SideBarItem({ text, icon }: { text: string; icon: any }) {
    return (
      <div className="flex items-center text-gray-800 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-44">
        <div className="pr-2">{icon}</div>
        <div className="text-sm font-medium">{text}</div>
      </div>
    );
  }
  