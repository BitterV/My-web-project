import styles from './style.module.css';


const ChatBlock =(props) =>{

  return(  <div className={styles.chat}>
    <h1 className={styles.Chattitle}>Chat</h1>
    {props.chatData.map((el,i)=>{
       return(
         <div key={i} className={styles.chat_item}>
             {i + 1}. {el}
         </div>
       );
    })}
</div>
  );
};

export default ChatBlock;