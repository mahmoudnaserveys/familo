import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-header text-white w-48 min-h-screen p-4 space-y-4">
      <Link to="/" className="block">خانه</Link>
      <Link to="/" className="block">کارهای من</Link>
      <Link to="/calendar" className="block">تقویم خانوادگی</Link>
      <Link to="/settings" className="block">تنظیمات</Link>
    </div>
  );
}
