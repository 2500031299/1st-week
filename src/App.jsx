import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import StatusPanel from "./components/StatusPanel";
import userData from "./data/userData";
import "./App.css";

function App() {

  const [user, setUser] = useState(userData);

  const toggleStatus = () => {
    setUser({
      ...user,
      status: user.status === "Active" ? "Inactive" : "Active"
    });
  };

  return (
    <div className="container">
      <h1>Profile Dashboard</h1>

      <ProfileCard
        name={user.name}
        role={user.role}
      />

      <StatusPanel
        status={user.status}
        changeStatus={toggleStatus}
      />

    </div>
  );
}

export default App;