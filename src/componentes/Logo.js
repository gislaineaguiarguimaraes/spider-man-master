import '../styles/componentes/Logo.css'

function Logo(props) {
  
  return (
    <div className= 'logo'>
      <img src={props.logo} alt={`Spiderman (${props.year})`} title={`Spiderman (${props.year})`}/>
    </div>
  )
}

export default Logo