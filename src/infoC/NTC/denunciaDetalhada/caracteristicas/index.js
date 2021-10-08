


export default function Index(props) {
  console.log(props);
  return (
    <div>
      <h1> Características ({props.location.state.nome}) </h1>
    </div>
  )
}