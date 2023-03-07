import '../styles/componentes/Galerry.css'

function Gallery(photos) {
  console.log(photos.pictures)
  return (
    <div className='gallery'>
      <ul>
        {photos.pictures.map((img, index) =>(
          <li key={index}>
            <img src={img} alt=" "/>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Gallery