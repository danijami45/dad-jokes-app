
import  React, {useEffect, useState} from "react";
import axios from "axios";

export default function Joke(){

    //1st parameter is the state variable. in this case it is joke
    //2nd parameter is the function that we call to update that variable. setJoke
    //useState isa hook
    const [joke, setJoke] = useState('');

    //call fetchjoke function when componenet loads
    useEffect(()=>{
        // axios
        // .get('https://icanhazdadjoke.com/', {headers:{Accept: 'application/json'}})
        // .then(res => setJoke(res.data))
        // .catch(err => console.log(err))
        fetchJoke()
    }, []);

    //get a joke from api and set joke state
    const fetchJoke = () => {
        axios
        .get('https://icanhazdadjoke.com/', {headers:{Accept: 'application/json'}})
        .then(res => setJoke(res.data))
        .catch(err => console.log(err))
    }

    return(
        
        <div className="container w-50 ">
        <div className="card m-5">
            <h4 className="card-header">Dad Joke</h4>
            <div className="card-body">
                
                <p className="card-text">{joke.joke}</p>
                <a className="btn btn-primary text-white" onClick={fetchJoke}>Get Another Joke</a>
            </div>
        </div>
        </div>
    )
}