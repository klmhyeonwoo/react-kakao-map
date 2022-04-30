import React, { useState } from 'react';
import './App.css';
import KakaoMap from './KakaoMap'

function App() {

  const [text, setText] = useState('')
  const [result, setResult] = useState('제주 카카오')
  const [count, setCount] = useState(0)

  const onChange = (e) => {
    setText(e.target.value);
  }
  const submit = (e) => {
    setText(text)
    setResult(text)
    setText('')
    setCount(1)
  }

  return (
    <>
    <div className="section-1">
      <KakaoMap value={result} count={count}/>
      <input className="input" onChange={onChange} placeholder="찾고자하는 장소를 입력해주세요 :-)" value={text}></input> <br />
      <button type="submit" className="btn" onClick={submit}>지도 출력하기</button>
    </div>
    </>
  );
}

export default App;
