export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://www.linkedin.com/dms/C4E04AQFUBzYSNY2Z4A/profile-originalphoto-shrink_900_1200/0?m=AQKL4gSmwB5epwAAAXF-dm4G4DPLQqm4Xj6SnCcRS6hJ_BscW8G2SnZtbg&e=1587051022&v=beta&t=JIU0ZW6_hPD6Dn67dWQveRwl9Q4WNuLuuzjeNJlbb9Q'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }