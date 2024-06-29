const Form = () => {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Message:</label>
        <textarea name="message" rows="4" cols="50"></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
