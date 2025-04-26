import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const API_BASE = `${import.meta.env.VITE_BACKEND_URL}/api`;

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const showAlert = (message, variant = 'success') => {
    setAlert({ show: true, message, variant });
    setTimeout(() => setAlert({ show: false, message: '', variant: '' }), 2500);
  };

  const getToDos = async () => {
    const res = await axios.get(`${API_BASE}/get`);
    setToDos(res.data);
  };

  const saveToDo = async () => {
    if (!text.trim()) return;

    if (editingId) {
      await axios.put(`${API_BASE}/update/${editingId}`, { toDo: text });
      showAlert('Task updated successfully!', 'info');
      setEditingId(null);
    } else {
      await axios.post(`${API_BASE}/save`, { toDo: text });
      showAlert('Task added successfully!', 'success');
    }

    setText('');
    getToDos();
  };

  const deleteToDo = async (id) => {
    await axios.delete(`${API_BASE}/delete/${id}`);
    showAlert('Task deleted successfully!', 'danger');
    getToDos();
  };

  const startEdit = (todo) => {
    setText(todo.toDo);
    setEditingId(todo._id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') saveToDo();
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="bg-white p-4 rounded shadow-lg w-100" style={{ maxWidth: '500px' }}>
          <h1 className="text-center text-primary mb-4">📝 To-Do List</h1>

          {alert.show && (
            <Alert
              variant={alert.variant}
              dismissible
              onClose={() => setAlert({ ...alert, show: false })}
            >
              {alert.message}
            </Alert>
          )}

          <TodoInput text={text} setText={setText} saveToDo={saveToDo} handleKeyDown={handleKeyDown} />
          <TodoList toDos={toDos} startEdit={startEdit} deleteToDo={deleteToDo} />
        </div>
      </div>

      <Footer />
    </>
  );
}
