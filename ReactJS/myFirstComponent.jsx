{
  /* My Component */
}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

const container = document.getElementById("container");
ReactDOM.render(<MyComponent />, container);

{
  /* Pass Props to Stateless Component*/
}
function CurrentDate(props) {
  return (
    <div>
      <p>The current date is: {props.date}</p>{" "}
      {/* use curly bracket for props*/}
    </div>
  );
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />{" "}
        {/* use curly bracket for function, unnecessarry if just string*/}
      </div>
    );
  }
}
