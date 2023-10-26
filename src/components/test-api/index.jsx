import { useEffect, useState } from 'react';
import styles from './style.module.css';


const Test = () =>{
const[teamData,setTeamData]=useState([]);
const[isLoad, setIsLoad] =useState(true)


useEffect(()=>{

    const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e010a2b702msh3e4bbe15937f45dp11fb0ejsnd86a294bd964',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    };

    fetch(url,options)
    .then(res=>res.json())
    .then((res)=>{setTeamData(res.data)
    setIsLoad(false);
    });
    
    
},[])
    return(
        <div className={styles.cont}>
             <div className={styles.teamcaption}>Nba players:</div>
             {isLoad && <div>Loading data...</div>}
             {teamData.map((el,i) =>{
                return(
                    <div key={el.id} className={styles.teamlist}>
                       {i+1}. {el.first_name}   {el.last_name} {}
                          <img src="https://www.svgrepo.com/show/498933/trash.svg" alt="" style={{width :'15px', height:'15px'}}
                       onClick={()=> {
                        setTeamData
                        (teamData.filter((filterElem => el.id !== filterElem.id)))
                       }}
                       />
                        
                    </div>
                )
             })}
        </div>
    )
}

export default Test;