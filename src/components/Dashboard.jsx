import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Dashboard;
