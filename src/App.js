import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '쇠청다리도요 보러 남동유수지 가기!',
      checked: true,
    },
    {
      id: 2,
      text: '박새보러 서울대 가기!',
      checked: true,
    },
    {
      id: 3,
      text: '물총새보러 방이습지 가기!',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
