export default function Header() {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-4 text-black">To Do List App</h1>
      <ul className="flex justify-center space-x-6">
        <li className="task-state-btn active">All</li>
        <li className="task-state-btn">Done</li>
        <li className="task-state-btn">Not Done</li>
      </ul>
    </div>
  );
}
