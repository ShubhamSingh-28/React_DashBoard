import { BiBug } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
import { FiRadio } from "react-icons/fi";

export default function RightSideBar() {
  const data = [
    {
      id: 0,
      icon: <BiBug className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-lg" />,
      text: "You fixed a bug",
      time: "Just now",
    },
    {
      id: 1,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-lg" />,
      text: "New user registered.",
      time: "59 minutes ago",
    },
    {
      id: 2,
      icon: <BiBug className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-lg" />,
      text: "You fixed a bug",
      time: "12 hours ago",
    },
    {
      id: 3,
      icon: <FiRadio className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-lg" />,
      text: "Andi Lane subscribed to you.",
      time: "Today, 11:59 AM",
    },
  ];

  const Activities=[
    {
      id: 0,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Changed the style.",
      time: "Just now",
    },
    {
      id: 1,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Submitted a bug.",
      time: "12 hours ago",
    },
    {
      id: 2,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Modified a data in Page X.",
      time: "Today, 11:59 AM",
    },
    {
      id: 3,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Deleted a page in Project X.",
      time: "Feb 2, 2025",
    },
  ];

  const contacts = [
    {
      id: 0,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Notalli Craig",
    },
    {
      id: 1,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Drew Cano",
    },
    {
      id: 2,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Andi Lane",
    },
    {
      id: 3,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Koray Okumus",
    },
    {
      id: 4,
      icon: <LuUserRound className="bg-[#b9e1f7] w-6 h-6 p-1 rounded-full" />,
      text: "Kate Morrison",
    },
  ];

  return (
    // hide on small and md screens, show on large screens and up
    <aside className="hidden lg:block lg:w-72 font-semibold border-l-1 text-xs border-gray-300 pt-4 pl-5 space-y-4 overflow-y-auto">
      <div>
        <h3 className="mb-3">Notifications</h3>
              {data.map((item) => (
                <div key={item.id} className="gap-3 flex mb-3">
                  {item.icon}
                  <div className="flex flex-col ">
                    <span>{item.text}</span>
                    <span className="text-gray-400 ">{item.time}</span>
                  </div>
                </div>
              ))}
      </div>

      <div>
        <h3 className="mb-2">Activities</h3>
              {Activities.map((item) => (
                <div key={item.id} className="gap-3 flex mb-3">
                  {item.icon}
                  <div className="flex flex-col ">
                    <span>{item.text}</span>
                    <span className="text-gray-400 ">{item.time}</span>
                  </div>
                </div>
              ))}
      </div>

      <div>
        <h3 className="mb-2">Contacts</h3>
              {contacts.map((item) => (
                <div key={item.id} className="gap-1 flex mb-3">
                  {item.icon}
                    <span>{item.text}</span>
                </div>
              ))}
      </div> 
      
    </aside>
  )
}
