import { useState } from "react";

import "./app.scss";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <CustomSelect></CustomSelect>
        <h1>React Blog</h1>
        <button
          className="write-btn"
          onClick={() => {
            setModal(!modal);
          }}
        >
          WRITE
        </button>
      </div>

      <div className="post-list">
        <PostCard></PostCard>
      </div>

      <WriteModal></WriteModal>
    </div>
  );

  //셀렉트
  function CustomSelect() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="select">
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
          Filter
        </div>
        <div className={`select-list ${isOpen ? "open" : ""}`}>
          <div>title</div>
          <div>date</div>
        </div>
      </div>
    );
  }

  //글내용
  function PostCard() {
    const [star, setStar] = useState(false);
    return (
      <div className="post-card">
        <div className="card-top">
          <div className="text">
            <p className="title">제목입니당</p>
            <p className="content">글내용 입니당</p>
          </div>
          <button className="star" onClick={() => setStar(!star)}>
            <img src={!star ? "/star-off.png" : "./star-ac.png"} alt="" />
          </button>
        </div>

        <div className="card-bottom">
          <p className="data">2025.02.28</p>

          <div className="button-wrap">
            <button className="delete-btn">삭제</button>
            <button className="edit-btn">수정</button>
          </div>
        </div>
      </div>
    );
  }

  //글쓰기 모달
  function WriteModal() {
    return (
      <div className="Modal">
        <div className="modal-inner">
          <h3>TITLE</h3>
          <input type="text" placeholder="제목을 입력하세요" />

          <h3>CONTENT</h3>
          <textarea placeholder="글 내용을 입력하세요" name="" id=""></textarea>
        </div>

        <button className="save">Save</button>
      </div>
    );
  }
}

export default App;
