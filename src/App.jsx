import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Hare" age={30} isStudent={false} />
      <Student name="jane" age={40} isStudent={true} />
      <Student name="KAda" age={40} isStudent={false} />
      <Student name="bala" age={40} isStudent={true} />
      <Student></Student>
    </>
  );
}
export default App;
