import { Button, ListGroup } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

export default function TodoList({ toDos, startEdit, deleteToDo }) {
  return (
    <ListGroup>
      {toDos.map((todo) => (
        <ListGroup.Item key={todo._id} className="d-flex justify-content-between align-items-center">
          <span>{todo.toDo}</span>
          <div>
            <Button
              variant="link"
              onClick={() => startEdit(todo)}
              className="text-primary me-2"
              title="Edit"
            >
              <Pencil size={20} />
            </Button>
            <Button
              variant="link"
              onClick={() => deleteToDo(todo._id)}
              className="text-danger"
              title="Delete"
            >
              <Trash size={20} />
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}