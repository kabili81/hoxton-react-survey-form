import Header from "./components/Header";
import Main from "./components/Main";

/*
The components were built around the assumption that this is what your initial state would look like.
If you need to do any changes - make sure you change the components & props to match.

  const initialForm = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: []
  };
*/

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
