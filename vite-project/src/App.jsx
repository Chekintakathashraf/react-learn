
// import Header from './components/Header'
import ChildComponent from './components/ChildComponent'
import Students from './components/Students'
import './css/App.css'
function App() {

  return (
    <>
      

      {/* <Header/> */}
      <Students name="abcd" age = {35} isMarried = {true} />
      <Students name="xys" age = {23} isMarried = {false} />
      <Students name="iuk" age = {12} isMarried = {false} />

      <ChildComponent >
        <p>hhhhhhhhhhhhhhh</p>
        <p>oooooooooooooooo</p>
      </ChildComponent >
    </>
  )
}

export default App
