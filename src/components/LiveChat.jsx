import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../utils/chatSlice"
import ChatMessage from "./ChatMessage"

const LiveChat = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  // const [messages, setMessages] = useState([])
  const chatMessages = useSelector((store) => store.chat.messages)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: "Hardik Ganatra",
          message: `Virat will score ${Math.floor(Math.random() * 100)} today`,
          id: Math.random(),
        })
      )
    }, 1500)

    return () => {
      clearInterval(interval)
    }
  }, [dispatch])

  console.log("Messages")

  return (
    <>
      <div className="flex flex-col">
        <div className="h-[510px] border border-black bg-slate-100 rounded-lg overflow-y-auto hover:overflow-scroll overscroll-contain flex flex-col-reverse w-96">
          {chatMessages.map((message) => (
            <ChatMessage name={message.name} message={message.message} />
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(
              addMessage({
                name: "GANATRA",
                message: input,
                id: Math.random(),
              })
            )
            setInput("")
          }}
        >
          <input
            type="text"
            className="border-2 border-gray-600 w-96 mt-2"
            value={input}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  )
}

export default LiveChat
