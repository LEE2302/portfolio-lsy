import { FaUser, FaPhone } from "react-icons/fa6"
import { MdCalendarToday } from "react-icons/md"
import { IoIosMail } from "react-icons/io"

function Info() {
  const infoArrTop = [
    { name: "이름", value: "이세영", icon: <FaUser size="35" /> },
    { name: "생년월일", value: "00.09.04", icon: <MdCalendarToday size="35" /> },
    { name: "이메일", value: "dlsy031@gmail.com", icon: <IoIosMail size="35" /> },
    { name: "전화번호", value: "010-2504-2302", icon: <FaPhone size="35" /> },
  ]

  return (
    <div className="w-full flex flex-col ">
      <div className="lg:flex lg:flex-row md:flex-col md:justify-center">
        {infoArrTop.map(el => (
          <ul key={el.name} className="flex-1 flex items-center justify-center">
            <li className="mr-3">{el.icon}</li>
            <li className="w-40">
              <div className="text-2xl font-bold">{el.name}</div>
              <div className="text-xl">{el.value}</div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Info
