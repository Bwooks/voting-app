import React from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import {List,Map} from "immutable";
import Results from "../../src/components/Results";
import {Simulate,renderIntoDocument,scryRenderedDOMComponentsWithClass} from "react-addons-test-utils";

describe("Results",()=>{
    it("shows a tally of votes for each entry",()=>{
        const pair = List.of("Shawshank Redemption","Inception");
        const tally = Map({
            "Shawshank Redemption":5,
            "Inception":5
        });
        const component = renderIntoDocument(
            <Results pair={pair} tally={tally} />
        );
        const entries = scryRenderedDOMComponentsWithClass(component,"entry");
        const [entry1,entry2] = entries.map((entry)=>entry.textContent);
        expect(entries.length).to.equal(2);
        expect(entry1).to.contain("Shawshank");
        expect(entry2).to.contain("Inception");
        expect(entry1).to.contain("5");
        expect(entry2).to.contain("5");
    });

    it("invokes the next callback when next button is clicked",()=>{
        let nextInvoked = false;
        const next = ()=> nextInvoked = true;
        const pair = List.of("True Detective","Westworld");
        const tally = Map({
            "True Detective":3,
            "Westworld":8
        });
        const component = renderIntoDocument(
            <Results pair={pair} tally={tally} next={next} />
        );
        Simulate.click(ReactDOM.findDOMNode(component.refs.next));
        expect(nextInvoked).to.equal(true);
    });

    it("displays the winner when a vote is finished",()=>{
        const winner = "2001:A Spacetime Odyssey";
        const component = renderIntoDocument(
            <Results winner={winner} />
        );
        const win = ReactDOM.findDOMNode(component.refs.winner);
        expect(win.textContent).to.contain("2001");
    });

});