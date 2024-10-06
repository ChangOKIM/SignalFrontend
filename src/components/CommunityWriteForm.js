import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './CommunityWriteForm.css';

const CommunityWriteForm = () => {
  const [category, setCategory] = useState('20대 고민');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 사용

  const handleSubmit = (e) => {
    e.preventDefault();

    // 작성한 게시글 데이터를 저장
    const newPost = {
      id: Date.now(), // 임시로 ID를 현재 시간으로 생성
      category,
      title,
      createdAt: new Date().toISOString().split('T')[0], // 작성일시
      viewCount: 0, // 기본 조회수
      likeCount: 0, // 기본 좋아요 수
      commentCount: 0, // 기본 댓글 수
    };

    // 데이터를 가지고 목록 페이지로 이동 (category에 맞는 페이지로)
    // 고민과 정보를 나누는 로직이 추가로 필요할듯 !!!!!!!!!!@!@!@
    navigate(`/community/gomin/${category}`, { state: { newPost } });
  };

  return (
    <form className="write-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <button className="back-button" onClick={() => window.history.back()}>
          &larr;
        </button>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
          <option value="10">10대 고민</option>
          <option value="20">20대 고민</option>
          <option value="30">30대 고민</option>
          <option value="40">40대 고민</option>
          <option value="gomsin">곰신 고민</option>
          <option value="CC">CC 고민</option>
          <option value="office">사내연애 고민</option>
          <option value="date-places">데이트 장소 추천</option>
          <option value="gifts">기념일 선물 추천</option>
          <option value="travel">커플 여행지 추천</option>
        </select>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          placeholder="제목"
        />
      </div>
      <textarea
        className="content-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      ></textarea>
      <div className="form-footer">
        <button type="submit" className="submit-button">
          작성하기
        </button>
      </div>
    </form>
  );
};

export default CommunityWriteForm;
