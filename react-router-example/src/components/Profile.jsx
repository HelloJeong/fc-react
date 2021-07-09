// export default function Profile(props) {
//   const { id } = props.match.params;
//   return (
//     <div>
//       <h1>Profile 페이지</h1>
//       {id && <p>id는 {id}입니다.</p>}
//     </div>
//   );
// }

import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <h1>Profile 페이지</h1>
      {id && <p>id는 {id}입니다.</p>}
    </div>
  );
}
