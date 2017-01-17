import React from "react";
import ReactDOM from "react-dom";
import {scryRenderedDOMComponentsWithTag,renderIntoDocument,Simulate} from "react-addons-test-utils";
import Voting from "../../src/components/Voting";
import {expect} from "chai";
import {List} from "immutable";

describe("Voting", () => {

    it("renders a pair of buttons", () => {
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(2);
        //includes the label "Voted", which is part of the button
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    });

    it("invokes a callback when a vote occurs (on button click)",()=>{
        let votedWith;
        const vote = (entry)=>{
            votedWith = entry;
            return votedWith;
        };
        const pair =["Tomb Raider","Arrested Development"]
        const component = renderIntoDocument(
            <Voting pair={pair} vote={vote}/>
        );

        const buttons = scryRenderedDOMComponentsWithTag(component,"button");
        Simulate.click(buttons[0]);
        expect(votedWith).to.equal("Tomb Raider");
    });

    it("disables the button when a user has voted",()=>{
        const pair = ["Her","The Matrix"];
        const rendered = renderIntoDocument(
            <Voting pair={pair} hasVoted="Her"/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(rendered,"button");
        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute("disabled")).to.equal(true);
        expect(buttons[1].hasAttribute("disabled")).to.equal(true);
    });

    it("labels the entry that was voted for with 'Voted' in the button",()=>{
        const rendered = renderIntoDocument(
            <Voting pair={["True Grit","The Revenant"]} hasVoted="The Revenant" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(rendered,"button");
        expect(buttons[1].textContent).to.contain("Voted");
    });

    it("displays the winner component when a vote is won",()=>{
        const rendered = renderIntoDocument(
            <Voting winner="Shanghai Noon" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(rendered,"button");
        expect(buttons.length).to.equal(0);

        const winner = ReactDOM.findDOMNode(rendered.refs.winner);
        console.log(rendered);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain("Shanghai Noon");
    });

    it('renders as a pure component', () => {
        const pair = ['Trainspotting', '28 Days Later'];
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');

        pair[0] = 'Sunshine';
        component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );
        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');
    });

    it("updates DOM when a prop changes", () => {
        const pair = List.of("Trainspotting","Sunshine");
        const container = document.createElement("div");
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, "button")[0];
        expect(firstButton.textContent).to.equal("Trainspotting");

        const newPair = pair.set(0,"21");
        component = ReactDOM.render(
            <Voting pair={newPair} />,
            container
        );
        firstButton = scryRenderedDOMComponentsWithTag(component, "button")[0];
        expect(firstButton.textContent).to.equal("21");
    });

});