import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {getContent} from "../Resources/jokeContent"

import {useCookies} from 'react-cookie'
import React,{useState} from 'react'

function Content() {

  const [cookie, setCookie, removeCookie] = useCookies(["jokeSeen"]);
  // Tạo mảng rỗng nếu chưa có dữ liệu ban đâu
  let jokeSeen = cookie?.jokeSeen || []
  const [joke,setJoke] = useState(getContent(jokeSeen));

  const votingFunnyJoke = () => {
    // Đây là tham chiếu, không phải tham trị
    ++ joke.voteFunny
    jokeSeen = [...jokeSeen,joke.id]
    // MaxAge tính theo second (không phải milisecond)
    setCookie("jokeSeen",jokeSeen,{
      maxAge: 3600
    })
    setJoke (getContent(jokeSeen))
  }

  const votingNotFunnyJoke = () => {
    ++joke.voteNotFunny;
    jokeSeen = [...jokeSeen,joke.id]
    // MaxAge tính theo second (không phải milisecond)
    setCookie("jokeSeen",jokeSeen,{
      maxAge: 3600
    })
    setJoke (getContent(jokeSeen))
  }

  const removeCookieContent = () => {
    removeCookie('jokeSeen')
    jokeSeen = [];
    setJoke (getContent(jokeSeen))
  }

  return (
    <div className="container-fluid bg-light py-5">
        <div className="container">
            <p className="mb-4">
                {joke?.content || "That's all the jokes for today! Come back another day!"}
            </p>
            <div className="text-center">
              {joke?.content &&
                (
                <>
                  <button className="btn btn-primary m-3" onClick={votingFunnyJoke}>This is Funny!</button>
                  <button className="btn btn-success m-3 " onClick={votingNotFunnyJoke}>This is not funny</button>
                  <button className="btn btn-warning m-3" onClick={e => alert(joke.voteFunny)}>Funny Voted (Testing Purpose)</button>
                  <button className="btn btn-warning m-3" onClick={e => alert(joke.voteNotFunny)}>Not Funny Voted (Testing Purpose)</button>
                </>
                )
              }
              <button className="btn btn-danger m-3" onClick={removeCookieContent}>Remove Cookie (Testing Purpose)</button>
            </div>
        </div>
    </div>
  )
}

export default Content