function StatusPanel({ status, changeStatus }) {

  return (
    <div className="card">

      <h2>Status Panel</h2>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <button onClick={changeStatus}>
        Toggle Status
      </button>

    </div>
  );
}

export default StatusPanel;