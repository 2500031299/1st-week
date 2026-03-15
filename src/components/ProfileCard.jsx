function ProfileCard({ name, role }) {
  return (
    <div className="card">
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Role:</strong> {role}
      </p>
    </div>
  );
}

export default ProfileCard;