import React, { Component } from 'react';
import {Header} from 'semantic-ui-react'
const we = [
  {
  id: `tony`,
  name: `Tony Soprano`,
  description: `Tony, prácticamente, maneja todo el norte de Nueva
 Jersey, antes y después de ser jefe de su familia. La relación entre
 Tony y su tío, Corrado John Soprano, Jr. (mejor conocido como Junior
 Soprano), fue muy afectiva durante años, siendo el que introdujo en el
 mundo del baseball, pero que a lo largo de los años, Tony abandonaría,
 cosa que Junior le recriminaría más tarde reiteradas veces. La relación
 entre los dos entró en recesión a causa de temas de negocios, cuando,
 exactamente, Tony frustra las intenciones de su tío de asesinar a Pussy
 Malanga. Posteriormente, Chris Moltisanti (sobrino político de Tony) y
 Brendan Filone (miembro no oficial de la familia del crimen) deciden
 atracar mercancías de una compañía de transportes vinculadas con Junior
 Soprano. Ante esta controversia, Junior Soprano decide asesinar a
 Brendan Filone, sin embargo Tony Soprano decide no contratacar, e
 incluso acordando que a causa de la muerte de Jackie Aprile, Sr (jefe de
 facto de la Familia del Crimen DiMeo), acuerda que su tío sea el nuevo
 jefe de la familia. A causa de todo esto, Junior Soprano y la propia
 madre de Tony, Livia Soprano, conspiran para asesinarle.`
  },
  {
  id: `bob`,
  name: `Bob Esponja`,
  description: `Bob Esponja (en inglés, SpongeBob SquarePants) es una
 serie de televisión de dibujos animados estadounidense. Actualmente es
 una de las series Nicktoons más vistas de Nickelodeon. En 2007 fue
 calificada por la revista TIME como uno de los programas de televisión
 más grandes de la historia. A pesar de que su canal original es
 Nickelodeon, Bob Esponja se transmite actualmente en canales de todo el
 mundo. Fue creado por el artista, animador y biólogo marino, Stephen
 Hillenburg, y es producida por su compañía, United Plankton Pictures.`
  },
  {
  id: `forrest`,
  name: `Forrest Gump`,
  description: `Mientras espera sentado en una parada de autobús, Forrest
 Gump comienza a relatar la historia de su vida a diversos extraños que
 se sientan junto a él. Su narración comienza por la infancia, cuando
 tuvo que llevar unos aparatos ortopédicos en las piernas que provocaron
 el acoso y la burla de otros niños. Él vivía con su madre en una casa en
 el campo en la que alquilaban habitaciones. Allí Forrest enseñó a uno de
 los huéspedes, un joven Elvis Presley, a bailar de una forma peculiar
 que luego este haría mundialmente famosa. En el bus escolar durante su
 primer día de clase Forrest conoce a Jenny, de la que se enamora
 inmediatamente y de la que se hace su mejor amigo. También en su
 infancia Forrest descubre que es capaz de correr muy rápido, una
 habilidad que impresiona al entrenador de fútbol americano Bear Bryant y
 que le permite ingresar, a pesar de su leve retraso mental, en la
 Universidad de Alabama. Allí es testigo de la Parada en la Puerta de la
 Escuela que protagonizó George Wallace en 1963. En esa época también es
 seleccionado por el equipo All-America de fútbol y conoce en persona en
 la Casa Blanca al presidente John F. Kennedy.`
  },
 ];
class Bio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }
  componentWillMount() {
    let id = this.props.match.params.id
    if (this.props.match.params.id) {
      let currentElement = we.find((element => {
        return element.id === id
      }))
      if (currentElement) {
        this.setState({
          name: currentElement.name,
          description: currentElement.description
        })
      }
    }
  }
  render() {
    return (
      <div>
      <h1>{this.state.name}</h1>
      <p>{this.state.description}</p>
      </div>
    );
  }
}

export default Bio;