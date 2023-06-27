export default function RegistrationFormUncontrolled() {
  function handleSumbit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch({ method: event.target.method, body: formData });

    const state = Object.fromEntries(formData.entries());

    console.log(state);
  }
  return (
    <form onSubmit={handleSumbit}>
      <label>
        Username<input name="username" required></input>
      </label>
      <label>
        Password<input name="password" type="password" required></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
