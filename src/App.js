

const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]);
}

const App = () => {
    return React.createElement(
        'div',
        { id: "app-id" }, //attributes or props data
        [
            React.createElement('h1', {}, 'Adopt me soon'),//children
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'Dog',
                breed: 'Havanese'
            }), 
            React.createElement(Pet, {
                name: 'Pepper',
                animal: 'Bird',
                breed: 'Cockatiel'
            }),
            React.createElement(Pet, {
                name: 'Doink',
                animal: 'Cat',
                breed: 'Mixed'
            }),
        ])
}

//1. This is a new way to write code in React 18, 
// In React 18, render was replaced by createRoot using root.render()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

//2. Other way using ReactDOM.render(), Notice we have to use React.createElement again on App
// THis is old, does not support concurrency features of React 18 , but works
// ReactDOM.render(React.createElement(App), document.getElementById('root'));


//3. Old way - obsolete in  React 18
// ReactDOM.render(<App />, document.getElementById('root') );
