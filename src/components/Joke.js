import { React } from "react";

export default function Joke(){
    return(
        
        <div className="container w-50">
        <div className="card">
            <h4 className="card-header">Dad Joke</h4>
            <div className="card-body">
                
                <p className="card-text">Some example Joke.</p>
                <a href="#" className="btn btn-primary">Get Another Joke</a>
            </div>
        </div>
        </div>
    )
}