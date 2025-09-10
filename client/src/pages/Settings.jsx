import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function Settings() {
  const [members, setMembers] = useState(['پدر', 'مادر', 'فرزند']);
  const [name, setName] = useState('');

  const addMember = () => {
    if (name) {
      setMembers([...members, name]);
      setName('');
    }
  };

  const removeMember = (m) => {
    setMembers(members.filter((x) => x !== m));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 space-y-4 flex-1">
        <h2 className="text-2xl">تنظیمات خانواده</h2>
        <div>
          <h3 className="mb-2">اعضا</h3>
          <ul className="space-y-1">
            {members.map((m) => (
              <li key={m} className="flex justify-between bg-highlight p-2 rounded">
                <span>{m}</span>
                <button onClick={() => removeMember(m)}>حذف</button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 space-x-reverse mt-2">
            <input className="border p-2 flex-1" placeholder="نام عضو" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="bg-primary text-white px-4" onClick={addMember}>افزودن</button>
          </div>
        </div>
      </div>
    </div>
  );
}
