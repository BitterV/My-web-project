import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Comment = (props) => {
  const handleCommentSubmit = () => {
    // Проверяем, что inputValue не пустой перед отправкой
    if (props.inputValue.trim() !== '') {
      props.changeChat();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.textcomment}
        placeholder="Write comment"
        value={props.inputValue}
        onChange={(e) => {
          props.setInputValue(e.target.value);
        }}
      />

      <button onClick={handleCommentSubmit} className={styles.chatbtn}>
        Send message
      </button>
      <button onClick={() => props.setChatData([])} className={styles.chatbtn}>
        Delete
      </button>

      {props.showDialogReg && (
        <div>
          You don't sign in yet
          <br />
          <Link to="/">Sign in</Link>
        </div>
      )}
    </div>
  );
};

export default Comment;