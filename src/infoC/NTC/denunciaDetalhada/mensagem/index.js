



export default function Index(props) {
  console.log(props);

  return (
    <div>
      <h1> Mensagem ({props.location.state.nome}) </h1>
    </div>
  )
}