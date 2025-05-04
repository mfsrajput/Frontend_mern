import { Button, ListGroup, Form } from 'react-bootstrap';
import { Pencil, Trash, Check, X } from 'react-bootstrap-icons';

export default function TodoList({
  toDos,
  startEdit,
  deleteToDo,
  editingId,
  setEditingId,
  saveToDo,
  text,
  setText
}) {
  return (
    <ListGroup>
      {toDos.map((todo) => (
        <ListGroup.Item
          key={todo._id}
          className="d-flex justify-content-between align-items-center"
        >
          {editingId === todo._id ? (
            <>
              <Form.Control
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveToDo();
                  if (e.key === 'Escape') setEditingId(null);
                }}
                autoFocus
                className="me-3"
              />
              <div className="d-flex">
                <Button variant="link" onClick={saveToDo} className="text-success me-2">
                  <Check size={25} />
                </Button>
                <Button variant="link" onClick={() => setEditingId(null)} className="text-danger">
                  <X size={25} />
                </Button>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
