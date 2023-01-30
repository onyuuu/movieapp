
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //화면 첫 렌더링 : Mount, 재 렌더링 : update, 화면에서 사라질 때 : Unmount
  //Dependency, clean up
	const [count, setCount] = useState(1);
	const [input, setInput] = useState("");

	const clickUpdate = () => {
    setCount(count+1)
	}
	const inputUpdate = (e) => {
    //console.log(e)
    setInput(e.target.value)
	}

	/* useEffect(() => {
    console.log('렌더링 🎅🎅');
  }) */ //렌더링이 계속 일어남
	useEffect(() => {
    console.log('렌더링 🎅🎅');
	}, [count])

	useEffect(() => {
    console.log('렌더링 🎅🎅');
	}, [input])

	return (
    <div>
    	<button onClick={clickUpdate} className="btn">Update</button>
    	<span>count : {count}</span>
    	<input type="text" value={input} onChange={inputUpdate}/>
    	<span>{input}</span>
    </div>
  );
}

export default App;
