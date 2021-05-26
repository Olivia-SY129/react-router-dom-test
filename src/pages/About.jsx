import queryString from 'query-string';

export default function About(props) {
  const search = props.location.search;
  console.log(search);
  // const obj = new URLSearchParams(search);
  // console.log(obj.get('name'));
  const query = queryString.parse(search);
  console.log(query);
  return <div>
    <h2>About</h2>
    {query.name && <p>name 은 {query.name} 입니다.</p>}
    </div>;
}