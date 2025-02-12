// styles.js
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #4a90e2, #8e44ad)",
    padding: "20px"
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    transition: "transform 0.3s ease-in-out"
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s"
  },
  button: {
    padding: "12px",
    background: "#4a90e2",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out, transform 0.2s"
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
    background: "#d4edda",
    color: "#155724",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #c3e6cb"
  },
  amount: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#28a745"
  }
};

export default styles;
