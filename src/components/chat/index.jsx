import { useState } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';
import ChatBlock from './chat';
import Comment from './comment';

const Chat =() =>{
const[chatData,setChatData]=useLocalStorage('chat', []);
const[inputValue,setInputValue]=useState('');
const[showDialogReg,setShowDialogReg] =useState(false)

const[userName]=useLocalStorage('USER')

const changeChat =()=>{
 
if(userName){
 setChatData([...chatData, `${userName ? userName: 'Anonymous'} : ${inputValue}`]);
  setInputValue('')
} else{
    setShowDialogReg(true)
    setInputValue('')
}

};
    return (
        <div>
           
   <ChatBlock chatData={chatData}/>
   <Comment inputValue={inputValue} 
            setInputValue={setInputValue} 
            changeChat={changeChat} 
            setChatData={setChatData}
            showDialogReg={showDialogReg}/>

        </div>
    );
};

export default Chat;