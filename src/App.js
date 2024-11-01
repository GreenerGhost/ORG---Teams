import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiORG from './components/MiORG';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';

function App() {

  // Estados para controlar el estado inicial del formulario, se inicializa en falso
    const [showForm, setShowForm] = useState( false );

    // Se inicializará la lista como un arreglo con un objeto predeterminado, pues se estarán agregando elementos de forma constante
    const [collaborators, setCollaborators] = useState([
      {
        id: uuid(),
        name: 'Edgar Cruz',
        position: 'Frontend Developer',
        photo: 'https://github.com/greenerghost.png',
        team: 'Front End',
        fav: true,
      },
      {
        id: uuid(),
        name: 'Harland Lohora',
        position: 'Instructor',
        photo: 'https://github.com/harlandlohora.png',
        team: 'Front End',
        fav: true,
      },
      {
        id: uuid(),
        name: 'Genesys Rondón',
        position: 'Desarrolladora de software e instructora',
        photo: 'https://github.com/genesysaluralatam.png',
        team: 'Programación',
        fav: false,
      },
      {
        id: uuid(),
        name: 'Jeanmarie Quijada',
        position: 'Instructora en Alura Latam',
        photo: 'https://github.com/JeanmarieAluraLatam.png',
        team: 'UX y Diseño',
        fav: false,
      },
      {
        id: uuid(),
        name: 'Christian Velasco',
        position: 'Head de Alura e Instructor',
        photo: 'https://github.com/christianpva.png',
        team: 'Programación',
        fav: true,
      },
      {
        id: uuid(),
        name: 'Jose Gonzales',
        position: 'Dev FullStack',
        photo: 'https://github.com/JoseDarioGonzalezCha.png',
        team: 'Innovación y Gestión',
        fav: false,
      },
    ]);

    // Se inicializará la lista como un arreglo predeterminado de equipos
    const [teams, setTeams] = useState([
      {
        id: uuid(),
        title: "Programación",
        primaryColor: "#57C278",
        secondaryColor: "#D9F7E9"
      },

      {
        id: uuid(),
        title: "Front End",
        primaryColor: "#82CFFA",
        secondaryColor: "#E8F8FF"
      },

      {
        id: uuid(),
        title: "Data Science",
        primaryColor: "#A6D157",
        secondaryColor: "#F9F8E2"
      },

      {
        id: uuid(),
        title: "DevOps",
        primaryColor: "#E06B69",
        secondaryColor: "#FDE7E8"
      },

      {
        id: uuid(),
        title: "UX y Diseño",
        primaryColor: "#DB6EBF",
        secondaryColor: "#FAE9F5"
      },

      {
        id: uuid(),
        title: "Móvil",
        primaryColor: "#FFBA05",
        secondaryColor: "#FFF5D9"
      },

      {
        id: uuid(),
        title: "Innovación y Gestión",
        primaryColor: "#FF8A29",
        secondaryColor: "#FFEEDF"
      }
    ]);

    // Mostrar formulario
    const changeShowForm = () => {
      setShowForm(!showForm);  // Se cambia el estado de showForm al contrario del actual
    };

    // Registrar colaboradores
    const collaboratorRecord = ( collaborator ) => {
      // Aquí se registra el colaborador en la lista de colaboradores

      // Spread operator -> Se realiza la propagación de las propiedades de un objeto a otro, es decir, fusiona o clona objetos a un nuevo objeto
      setCollaborators( [...collaborators, {...collaborator, id: uuid() } ] );
    }

    // Eliminar colaboradores
    const collaboratorDelete = (id) => {
      // Aquí se elimina el colaborador de la lista de colaboradores utilizando su id
      console.log("Se ha eliminado colaborador", id);
      // Filtrar la lista de colaboradores para quedarse con aquellos que no tengan el id que se quiere eliminar, y luego se establece la nueva lista de colaboradores
      const updatedCollaborators = collaborators.filter( ( collaborator ) => collaborator.id !== id );
      
      setCollaborators(updatedCollaborators);
    };

    // Actualización de equipos
    const updateColor = (color, id) => {
      // Aquí se actualiza el color del equipo dependiendo de su identificador
      console.log("Se ha actualizado color de equipo: ", color, id);
      const updatedTeams = teams.map((team) => {
        if (team.id === id) {
          team.primaryColor = color;
        }
        return team;
      })

      setTeams(updatedTeams);
    };

    // Crear equipo
    const createTeam = (newTeam) => {
      // Aquí se crea el equipo en la lista de equipos y se añade un identificador
      setTeams( [...teams, {...newTeam, id: uuid() } ] );
    };

    // Función like 
    const likeCollaborator = (id) => {
      // Aquí se actualiza el estado de favorito del colaborador dependiendo de su identificador
      console.log("Se ha dado like al colaborador: ", id);
      const updateLikeStatus = collaborators.map( (collaborator) => { 
        if (collaborator.id === id) {
          collaborator.fav = !collaborator.fav;
        }
        return collaborator;
      } )

      setCollaborators(updateLikeStatus);
    }


    return (
      <div>
        {/* { Header() }  // Si se realiza de esta forma, en la extensión de navegador para visualizar componentes, no se podrá visualizar, en cambio si se pueden ver si se utiliza el llamado de la siguiente forma */}
        <Header/>
        {
          // Ternario --> conditions ? seMuestra : noSeMuestra
          //showForm ? <Form /> : <div></div>  // Se muestra el formulario si showForm es true, de lo contrario no se muestra

          // condition && seMuestra
          showForm && <Form 
            teams={ teams.map( ( team ) => team.title ) } // Se envía el arreglo de los equipos con el método map
            collaboratorRecord={ collaboratorRecord } // Se envía la función para crear equipo
            createTeam={ createTeam }  // Se envía la función para crear equipo
          />
        }
        <MiORG changeShowForm={ changeShowForm }/>
        {
          teams.map( ( team ) => <Team 
            data={ team } 
            key={ team.title }
            collaborators={ collaborators.filter( collaborator => collaborator.team === team.title ) }  // Se envía la lista de colaboradores a cada equipo filtrando por el titulo del equipo
            collaboratorDelete={ collaboratorDelete } // Se envía la función para borrar colaborador 
            updateColor={ updateColor }  // Se envía la función para actualizar el color del equipo al padre App
            likeCollaborator={ likeCollaborator }  // Se envía la función para dar like a un colaborador 
          /> )
        }
        <Footer/>
      </div>
    );
}

export default App;
