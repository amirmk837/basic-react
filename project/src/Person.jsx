const Person = ({ name, Family, Birth, City, handleDelete }) => {
  return (
    <div>
      <ul id="test3">
        <li>
          <strong>name : </strong>
          {name}
        </li>
        <li>
          <strong>Family : </strong>
          {Family}
        </li>
        <li>
          <strong>Birth : </strong>
          {Birth}
        </li>
        <li>
          <strong>city : </strong>
          {City}
        </li>
        <li>
          <button onClick={handleDelete}>delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Person;
