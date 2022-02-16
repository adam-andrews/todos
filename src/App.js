import React, { useState } from 'react';
function App() {
	const [todos, setTodos] = useState(['Hello', 'Jasons']);
	const [input, setInput] = useState('');

	const addToDo = (e) => {
    e.preventDefault();
		setTodos([...todos, input]);
		setInput('');
	};
	return (
		<div className="App">
			<h1>Todos</h1>
			<form>
				<input
					value={input}
					type="text"
					onChange={(e) => setInput(e.target.value)}
				></input>
				<button onClick={addToDo}>Add</button>
			</form>
			<h1>Add todos</h1>
			{todos.map((todo) => (
				<p>{todo}</p>
			))}
		</div>
	);
}

export default App;
