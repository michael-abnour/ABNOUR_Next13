import Link from "next/link";
import React from "react";
import { useState } from "react";

const BodyOfChat = ({ open, setOpen }) => {
  const [answerId, setAnswerId] = useState(0);
  const [conversation, setConversation] = useState([]);

  const [ask, setAsk] = useState([
    {
      id: 1,
      question: "Information about Abnour",
      answerId: 1,
    },
    {
      id: 2,
      question: "Special feature we offer",
      answerId: 2,
    },

    {
      id: 3,
      question: "Join our team",
      answerId: 3,
    },
  ]);
  const [answer, setAnswer] = useState([
    {
      id: 1,
      answer:
        "We are a professional agency with several services that focused on quality and innovations for your business.",
      askId: 1,
    },
    {
      id: 2,
      answer:
        "We work to reach the best possible quality in the shortest time and reach the goal you want in the field of software.",
    },
    {
      id: 3,
      answer:
        "Welcome aboard, we are so excited you’ll join our team, so please fill the form in career page, we can’t waiting until meet you!",
    },
  ]);

  const [newAnswer, setNewAnswer] = useState([]);

  const handelDelete = (item, index) => {
    console.log(item, "item");

    setConversation((prev) => [
      ...prev,
      { message: item.question, sender: "person" },
      {
        message: answer.filter((res) => res.id === item.answerId)[0].answer,
        sender: "bot",
      },
    ]);
    ask.splice(index, 1);
    // console.log(conversation , "conversation");
  };

  //   console.log(conversation, "conversation");

  return (
    <>
      <div className="">
        <div className="chatBotBody d-flex flex-column justify-content-between">
          <div className="HeadOfChatBody d-flex align-items-center">
            <div className="botImg mx-3">
              <img src="./img/newPhoto/Bot.png" alt="bot" className="w-100" />
            </div>
            <div className="ChatInfo">
              <h6>ChatBot</h6>
              <span>online</span>
            </div>

            <div
              className="closeBot"
              onClick={() => {
                setOpen(false);
              }}
            >
              <i class="fa-solid fa-xmark fa-xl "></i>
            </div>
          </div>

          <div className="chatBotBodyMassage h-100">
            <div className="messageOfBot p-3">
              <div className="headMessage d-flex align-items-start ">
                <div className="  me-2">
                  <img src="./img/newPhoto/BotMessage.png" alt="img-fluid" />
                </div>

                <div className="">
                  <span>Abnour chat bot</span>
                  <div className="bg-white p-2 rounded-3 shadow-sm oneMessage">
                    <p>
                      Hi, my team is offline now, I’m here to help you with
                      these things.{" "}
                    </p>
                  </div>
                </div>
              </div>

              {conversation.map((item, index) => (
                <div className="headMessage d-flex align-items-end  mt-3 ">
                  {item.sender === "person" ? (
                    <>
                      <div className=" ms-auto">
                        <div className="bg-info p-2 rounded-3 shadow-sm oneMessage">
                          <p className="text-white">{item.message}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="headMessage d-flex align-items-start mt-0 ">
                      {item.sender === "bot" ? (
                        <>
                          <div className="  me-2">
                            <img
                              src="./img/newPhoto/BotMessage.png"
                              alt="img-fluid"
                            />
                          </div>{" "}
                          <div className="">
                            <span>Abnour chat bot</span>
                            {item.message ===
                            "Welcome aboard, we are so excited you’ll join our team, so please fill the form in career page, we can’t waiting until meet you!" ? (
                              <div className="bg-white p-2 rounded-3 shadow-sm oneMessage">
                                <p>
                                  Welcome aboard, we are so excited you’ll join
                                  our team, so please fill the form in{" "}
                                  <Link href={"/OurCarrers"} className="navigateToCareer">career page</Link>{" "}
                                  , we can’t waiting until meet you!
                                </p>
                              </div>
                            ) : (
                              <div className="bg-white p-2 rounded-3 shadow-sm oneMessage">
                                <p>{item.message}</p>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        ""
                      )}{" "}
                    </div>
                  )}{" "}
                </div>
              ))}
              {/* 
              {conversation.map((item, index) => (
                <div className="headMessage d-flex align-items-start ">
                  {item.sender === "bot" ? (
                    <>
                      <div className="  me-2">
                        <img
                          src="./img/newPhoto/BotMessage.png"
                          alt="img-fluid"
                        />
                      </div>{" "}
                      <div className="">
                        <span>Abnour chat bot</span>
                        <div className="bg-white p-2 rounded-3 shadow-sm oneMessage">
                          <p>{item.message}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}{" "}
                </div>
              ))} */}

              {ask.map((item, index) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className=" mt-2 askBot"
                      onClick={() => {
                        setAnswerId(item.answerId);
                        handelDelete(item, index);
                      }}
                    >
                      <h6>{item.question}</h6>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="footerOfChat d-flex justify-content-center align-items-center">
            <img
              src="./img/newPhoto/logoBot.png"
              alt=""
              className="w-50  m-auto "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyOfChat;
