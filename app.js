// This is div>h1
const h1 = React.createElement("h1", {}, "This H1 created using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);



/* below code is -  
       <div id="d1" xyz="kjusdf">
               <div id="d2">
                       <h1>

                       </h1>
               </div>
       </div>
       all this is..inside root div
*/
const heading1 = React.createElement("div", { id: "d1", xyz: "kjusdf" },
        React.createElement("div", { id: "d2" },
                React.createElement("h1", {}, " this is basically div > div > h1")
        )
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);



/*
        <div id="d1" xyz="kjusdf"></div>
                <div id="d2">
                        <h1></h1>
                        <h1></h1>
                </div>
        </div>
*/

const heading2 = React.createElement("div", { id: "d1", xyz: "kjusdf" },
        React.createElement("div",
                { id: "d2" },
                [React.createElement("h1", {}, " this is basically div > div > h1*2"), 
                React.createElement("h1", {}, " this is basically div > div > h1*2")]

        )
);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);



/*
<div id="d1" ></div>
                <div id="c1">
                        <h1></h1>
                        <h1></h1>
                </div>
                <div id="c2"></div>
                        <h1></h1>
                        <h1></h1>
                </div>
        </div>
*/

const heading3 = React.createElement("div", { id: "p1"},
        [
                React.createElement("div",
                { id: "c1" },
                        [
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2"), 
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2")
                        ])
                ,
                React.createElement("div",
                        { id: "c2" },
                        [
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2"), 
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2")
                        ])
        ]
        
);
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(heading3);