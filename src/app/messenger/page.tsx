"use client";

import { useEffect, useRef, useState } from "react";

interface User {
  username: string;
  unread_count: string;
}

export default function Page() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [recipient, setRecipient] = useState("");
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") ?? ""
  );
  const [isConnected, setIsConnected] = useState(false);

  const socket = useRef<WebSocket>();

  useEffect(() => {
    let ws = `ws://localhost:8080/ws`;
    socket.current = new WebSocket(ws);

    socket.current.onopen = () => {
      console.log("Connected to WebSocket server");
      socket.current!.send(JSON.stringify({ sender: username }));
      setIsConnected(true);
    };

    socket.current.onmessage = (event) => {
      console.log("Got message: ", event.data);
      const data = JSON.parse(event.data);
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setChatHistory((prevState) => [...prevState, event.data]);
      }
    };

    socket.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.current.onclose = () => {
      console.log("Disconnected from WebSocket server");
      setIsConnected(false);
    };

    return () => {
      socket.current!.close();
    };
  }, []);

  const send = () => {
    if (message.trim() === "") {
      return;
    }

    console.log("Sending msg: ", message);

    if (isConnected && socket.current!.readyState === WebSocket.OPEN) {
      socket.current!.send(
        JSON.stringify({
          sender: username,
          recipient: recipient,
          request_type: 2,
          message: message,
        })
      );
      setMessage("");
    } else {
      console.error("WebSocket is not open. Unable to send message.");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex h-3/4 w-ful justify-center items-center w-full px-44 gap-x-4">
        <div className="flex flex-col justify-center items-center h-full w-4/5 gap-y-2">
          {isConnected && recipient && (
            <div className="text-white font-bold self-start pl-5">{`connecting with ${recipient}`}</div>
          )}
          <ChatHistory
            username={username}
            messages={chatHistory}
            recipient={recipient}
          />
          <input
            type="text"
            className="w-full py-3 px-5"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                send();
              }
            }}
            disabled={!isConnected || !recipient}
          />
          {!isConnected && (
            <div className="text-white">Connecting to WebSocket server...</div>
          )}
        </div>
        <div className="bg-white w-44 h-full items-center py-10">
          {users.map((user, i) => {
            return (
              <div
                key={i}
                className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-sky-200 focus:bg-sky-200"
                onClick={() => {
                  setRecipient(user.username);
                  setChatHistory([]);

                  console.log(username, user);
                  socket.current!.send(
                    JSON.stringify({
                      sender: username,
                      recipient: user.username,
                      request_type: 1,
                    })
                  );
                }}
              >
                <div className="flex-none w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1 overflow-hidden whitespace-nowrap">
                  <p className="truncate">{user.username} </p>
                </div>
                {recipient !== user.username && <p>{user.unread_count}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface Message {
  sender: string;
  recipient: string;
  message: string;
}

function ChatHistory({
  username,
  recipient,
  messages,
}: {
  username: string;
  recipient: string;
  messages: string[];
}) {
  const scroll = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="overflow-y-auto h-full w-full bg-white flex flex-col mx-auto px-10">
      {messages.map((message, i) => {
        const msg: Message = JSON.parse(message);

        if (
          msg &&
          ((msg.sender == username && msg.recipient === recipient) ||
            (msg.recipient == username && msg.sender === recipient))
        ) {
          return (
            <div
              key={i}
              className={`${
                msg.sender == username ? "text-right" : ""
              } text-lg`}
            >
              <div className="text-lg text-indigo-500">{msg.sender}</div>
              <p className="mt-1 text-lg text-gray-600">{msg.message}</p>
            </div>
          );
        }
      })}
      <div ref={scroll}></div>
    </div>
  );
}
