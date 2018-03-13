import React from 'react';
import {Header, List} from 'semantic-ui-react'
import {Switch, Route, Link} from 'react-router-dom'
import Bio from './people/Bio'
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
const AboutUs = (props) => {
  return (
    <div>
      <Header as='h2' textAlign='center'>
        Acerca de Nosotros
      </Header>
      <p>Dessert sesame snaps cupcake. Pie chocolate bar tiramisu jelly beans. Lemon drops powder wafer topping wafer cake tiramisu chocolate cake topping. Muffin donut cake fruitcake chupa chups danish lemon drops soufflé. Candy macaroon cheesecake. Icing icing gummi bears pastry danish pudding halvah cookie. Marzipan liquorice liquorice marzipan cheesecake sweet roll jelly. Jelly bonbon croissant pie jelly beans dragée wafer croissant. Sweet lemon drops chocolate cake tart croissant dragée soufflé marshmallow cake. Chocolate danish brownie cupcake jelly-o jelly beans icing gummies. Jelly beans wafer macaroon soufflé candy carrot cake. Danish cupcake apple pie gingerbread chocolate cake pastry croissant. Dragée candy canes muffin bear claw gingerbread candy ice cream cupcake.</p>
      <List>
        {we.map(person => (
          <List.Item key={person.id}>
            <Link to={`${props.match.path}/${person.id}`}>{person.name}</Link>
          </List.Item>
        ))}
      </List>
      <Switch>
        <Route exact path='/about/:id' component={Bio} />
      </Switch>
    </div>
  );
};

export default AboutUs;