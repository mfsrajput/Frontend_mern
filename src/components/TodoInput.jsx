

import { Button, Form, InputGroup } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';

export default function TodoInput({ text, setText, saveToDo, handleKeyDown }) {
  return (
    <InputGroup className="mb-4">
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your task and hit Enter"
      />
      <Button variant="primary" onClick={saveToDo}>
        <PlusCircle size={20} />
      </Button>
    </InputGroup>
  );
}