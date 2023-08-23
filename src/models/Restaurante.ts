class Restaurante {
  title: string
  category: string
  description: string
  image: string
  infos: string
  id: number

  constructor(
    title: string,
    category: string,
    description: string,
    image: string,
    infos: string,
    id: number
  ) {
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.id = id
  }
}

export default Restaurante
