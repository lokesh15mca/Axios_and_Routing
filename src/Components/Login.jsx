export const Login = () => {
  function submit() {
    localStorage.setItem("user_id", "1234");
  }
  return (
    <>
      Please Login
      <button onClick={submit}>Submit</button>
    </>
  );
};
