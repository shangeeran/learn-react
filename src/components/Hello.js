// Functional components

const name = "Shangeeran"
const a = 15
const displayMessage = () => {
    return "I need a help!";
}

function Hello() {
    return <h1>It says : {displayMessage()}</h1>
}

// Methode 1
// function Hello() {
//     return <h1>Hello World! {name}</h1>,
//     <h2>Total is {a + 10}</h2>
// };

// Methode 1 (ES6)
// const Hello = ()=> <h1>Hello medam</h1>

export default Hello;