document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
        {
            title: 'Curso Java',
            start: '2023-07-19',
            end:'2023-08-03'
        },
        {
            title: 'Curso HTML',
            start: '2023-07-29',
            end:'2023-08-09'
        },
        {
            title: 'Curso JavaScript',
            start: '2023-09-04',
            end:'2023-09-18'
        },
        {
            title: 'Curso Css',
            start: '2023-08-10',
            end:'2023-08-24'
        },
        {
            title: 'Curso Python',
            start: '2023-08-14',
            end:'2023-08-28'
        },
        {
            title: 'Curso C++',
            start: '2023-08-28',
            end:'2023-09-11'
        }
        ]
    }); 

    calendar.render();
  });