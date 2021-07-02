export default function Profile(props) {
  const { id } = props.match.params;
  return (
    <div>
      <h1>Profile 페이지</h1>
      {id && <p>id는 {id}입니다.</p>}
    </div>
  );
}
