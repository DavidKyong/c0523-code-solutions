export default function RegistrationFormUncontrolled() {
  function handleSumbit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const state = Object.fromEntries(formData.entries());

    console.log(state);
  }
  return (
    <form onSubmit={handleSumbit}>
      <label>
        Username
        <input name="username" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
