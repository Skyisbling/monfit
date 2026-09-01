import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Members", path: "/members" },
  { label: "Trainers", path: "/trainers" },
  { label: "Memberships", path: "/memberships" },
  { label: "Attendance", path: "/attendance" },
  { label: "Workouts", path: "/workouts" },
  { label: "Nutrition", path: "/nutrition" },
  { label: "Store", path: "/store" },
  { label: "Payments", path: "/payments" },
  { label: "Reports", path: "/reports" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <span>মন</span>FIT
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          Settings
        </NavLink>

        <div className="sidebar-user">
          <div className="user-avatar">A</div>

          <div>
            <strong>Admin</strong>
            <span>Owner</span>
          </div>
        </div>
      </div>

    </aside>
  );
}