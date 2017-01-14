/**
 * Created by Owner on 1/13/2017.
 */
import React from "react";

const Voting = (props) => {

        return (
            <div>
                {
                props.pair.map((entry) => {
                    return (<button key={entry}>{entry}</button>);
                })
                }
            </div>
        );
};

export default Voting;