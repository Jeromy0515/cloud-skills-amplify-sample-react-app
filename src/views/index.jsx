import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

const Index = props => {
    const [text,setText] = useState('');

    return (
        <div>
            <form id="actionForm">
                <input type="text" placeholder="이름" id="nameInput"/>
                <button type="button" id="requestButton" onClick={() => {
                    const name = document.getElementById('nameInput').value;

                    axios
                        .post('https://k40z59nxri.execute-api.ap-northeast-2.amazonaws.com/staging/Amplify_Request_Fuction',{name: name})
                        .then((response)=>{
                            console.log(response)
                            setText(response.data)
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                }}>Request Lambda</button>
                <h1>{text}</h1>
            </form>
        </div>
    );
}

export default Index;
