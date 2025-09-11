import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Task({ addTask }) {
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('پدر');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const saveTask = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      assignee,
      priority,
      dueDate,
      desc,
      status: 'todo',
    });
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl">ایجاد کار جدید</h2>
      <form onSubmit={saveTask} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="عنوان کار" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <select className="w-full p-2 border rounded" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
          <option>پدر</option>
          <option>مادر</option>
          <option>فرزند</option>
          <option>عضو دیگر</option>
        </select>
        <select className="w-full p-2 border rounded" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">کم</option>
          <option value="medium">متوسط</option>
          <option value="high">زیاد</option>
        </select>
        <input type="date" className="w-full p-2 border rounded" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <textarea className="w-full p-2 border rounded" placeholder="توضیحات" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <div className="flex space-x-2 space-x-reverse">
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">ذخیره</button>
          <button type="button" onClick={() => navigate('/')} className="bg-gray-300 px-4 py-2 rounded">انصراف</button>
        </div>
      </form>
    </div>
  );
}
