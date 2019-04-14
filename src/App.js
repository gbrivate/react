import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Hello} from "./Hello";

const CardList = props => (
    <div> {props.profiles.map(profile =>
        <Card key={profile.id} profile={profile}/>)}
        {/* or using spread => <Card key={profile.id} {...profile}/>)}*/}
    </div>
);

const Card = props => {
    const profile = props.profile;
    return (
        <div className="github-profile">
            <img src={profile.avatar_url}/>
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
    );
}

const UserName = props => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (props.reset) {
            setUserName('');
            props.onChange('');
        } else {
            props.onChange(userName);
        }
    });

    return (
        <input
            type="text"
            value={userName}
            onChange={event => setUserName(event.target.value)}
            placeholder="GitHub username"
            autoFocus
            required
        />
    )
}


const Fetch = url => {
    return axios.get(url);
};

const Form = props => {

    const [userName, setUserName] = useState('');
    const [reset, setReset] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await Fetch(`https://api.github.com/users/${userName}`);
        setReset(true);
        props.onSubmit(resp.data);
        setReset(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <UserName onChange={setUserName} reset={reset}/>
            <button>Add card</button>
            <button onClick={props.cleanList} type={'button'}>Reset</button>
        </form>
    );
}

const App = props => {
    const [profiles, setProfiles] = useState([]);

    const addNewProfile = (newData) => {
        setProfiles([...profiles, newData]);
    };

    const cleanList = () => {
      setProfiles([]);
    };


    return (
        <div>
            <div className="header">{props.title}</div>
            <Form onSubmit={addNewProfile} cleanList={cleanList}/>
            <CardList profiles={profiles}/>
            <div>
                <Hello/>
            </div>
        </div>
    );
}


export default App;
