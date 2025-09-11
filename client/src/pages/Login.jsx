import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister && password !== confirm) return;
    onLogin(email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-center text-xl mb-4">
          به فمیلو خوش آمدید؛ خانه‌ای برای مدیریت کارهای خانواده!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="email" placeholder="ایمیل" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="رمز عبور" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {isRegister && (
            <input type="password" placeholder="تأیید رمز عبور" className="w-full p-2 border rounded" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          )}
          <button type="submit" className="w-full bg-primary text-white py-2 rounded">
            {isRegister ? 'ثبت‌نام' : 'ورود'}
          </button>
        </form>
        <button onClick={() => setIsRegister(!isRegister)} className="mt-4 w-full text-header">
          {isRegister ? 'حساب دارید؟ ورود' : 'حساب ندارید؟ ثبت‌نام'}
        </button>
        <button className="mt-2 w-full bg-red-500 text-white py-2 rounded">ورود با گوگل</button>
      </div>
    </div>
  );
}
