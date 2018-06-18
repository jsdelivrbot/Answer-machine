import React from "react"
import Related from "./Related"

const Answer = (props) => {
    return (
        <div className="answer">
            {props.answer.Image !== "" && <div className="scroll-vertical">
                <img className="big" src={props.answer.Image} alt={props.answer.Heading}></img> 
            </div>}
            <h1>{props.answer.Heading}</h1>
            <h6>{props.answer.AbstractSource}</h6>
            <p>{props.answer.Abstract}</p>
            {props.answer.AbstractURL !== "" && <a href={props.answer.AbstractURL}>Link</a>}
            {props.answer.RelatedTopics.length > 0 &&
                <div>
                    <hr></hr>
                    <h6>Other links</h6>
                    {props.answer.RelatedTopics.map(item => <Related related={item}/>)}
                </div>
            }
        </div>
    );
}

export default Answer;