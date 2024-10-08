import MyButtonPkg from '../../index'
// import "dist/style.css"
import "./App.css";

function App() {
  return (
    <>
      {/* <h4>Hello</h4> */}
      <MyButtonPkg value="Click Here" variant="secondary" size="large" type='submit' role="submit"/>
    </>
  );
}

export default App;
