
import { Nav } from "./componentes/nav/nav"
import { Link } from "./componentes/link/link"
import { Titulo } from "./componentes/titulo/titulo"
export default function Home() {
  return (
   <main>
      <Nav>
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Link>Link 3</Link>
        <Link>Link 4</Link>
      </Nav>
      <Titulo>Ola esse é um titulo</Titulo>
   </main>
  )
}
