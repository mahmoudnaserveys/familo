import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TaskBoard from '../components/TaskBoard';

export default function Dashboard({ user, tasks }) {
  const navigate = useNavigate();
  const pending = tasks.filter((t) => t.status !== 'done').length;
  const done = tasks.filter((t) => t.status === 'done').length;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 space-y-4">
        <h2 className="text-2xl">سلام {user.name}، امروز چه کاری برای خانواده داری؟</h2>
        <div className="flex space-x-4 space-x-reverse">
          <div>کارهای در انتظار: {pending}</div>
          <div>کارهای انجام‌شده: {done}</div>
        </div>
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={() => navigate('/task')}
        >
          ➕ ایجاد کار جدید
        </button>
        <TaskBoard tasks={tasks} />
      </div>
    </div>
  );
}
