// Define schedule
new Vue({
  el: '#schedule',
  data() {
    return {
      schedule: [
        {
          day: 'Monday',
          subjects: [
            {
              time: '8:30 - 9:10',
              subject: 'Час на класа',
            },
            {
              time: '9:20 - 10:00',
              subject: 'УП-КМ / УП-ЗПУ',
            },
            {
              time: '10:10 - 10:50',
              subject: 'УП-КМ / УП-ЗПУ',
            },
            {
              time: '11:00 - 11:40',
              subject: 'УП-ЗПУ / УП-КМ',
            },
            {
              time: '12:00 - 12:40',
              subject: 'УП-ЗПУ / УП-КМ',
            },
            {
              time: '12:50 - 13:30',
              subject: 'КА',
            },
            {
              time: '13:35 - 14:15',
              subject: 'КМ',
            },
          ],
        },
        {
          day: 'Tuesday',
          subjects: [
            {
              time: '8:30 - 9:10',
              subject: 'Руски език',
            },
            {
              time: '9:20 - 10:00',
              subject: 'Гр. Образование',
            },
            {
              time: '10:10 - 10:50',
              subject: 'Български език',
            },
            {
              time: '11:00 - 11:40',
              subject: 'Български език',
            },
            {
              time: '12:00 - 12:40',
              subject: 'ЗПУ',
            },
            {
              time: '12:50 - 13:30',
              subject: 'КМ',
            },
            {
              time: '13:35 - 14:15',
              subject: '30 мин почивка / СВОБОДЕН',
            },
            {
              time: '2 часа',
              subject: 'УП-КА / СВОБОДЕН',
            },
          ],
        },
        {
          day: 'Wednesday',
          subjects: [
            {
              time: '8:30 - 9:10',
              subject: 'Физическо',
            },
            {
              time: '9:20 - 10:00',
              subject: 'Руски език',
            },
            {
              time: '10:10 - 10:50',
              subject: 'Математика',
            },
            {
              time: '11:00 - 11:40',
              subject: 'КА',
            },
            {
              time: '12:00 - 12:40',
              subject: 'Английски',
            },
            {
              time: '12:50 - 13:30',
              subject: 'СВОБОДЕН / УП-КА',
            },
            {
              time: '13:35 - 14:15',
              subject: 'СВОБОДЕН / УП-КА',
            },
          ],
        },
        {
          day: 'Thursday',
          subjects: [
            {
              time: '8:30 - 9:10',
              subject: 'Английски',
            },
            {
              time: '9:20 - 10:00',
              subject: 'ЗПУ',
            },
            {
              time: '10:10 - 10:50',
              subject: 'Математика',
            },
            {
              time: '11:00 - 11:40',
              subject: 'УП-ОС / УП-Ка',
            },
            {
              time: '12:00 - 12:40',
              subject: 'УП-ОС / УП-Ка',
            },
            {
              time: '12:50 - 13:30',
              subject: 'УП-КА / УП-ОС',
            },
            {
              time: '13:35 - 14:15',
              subject: 'УП-КА / УП-ОС',
            },
          ],
        },
        {
          day: 'Friday',
          subjects: [
            {
              time: '8:30 - 9:10',
              subject: 'ППП / УП-Схем.',
            },
            {
              time: '9:20 - 10:00',
              subject: 'ППП / УП-Схем.',
            },
            {
              time: '10:10 - 10:50',
              subject: 'УП-Схем. / ППП',
            },
            {
              time: '11:00 - 11:40',
              subject: 'УП-Схем. / ППП',
            },
            {
              time: '12:00 - 12:40',
              subject: 'Български език',
            },
            {
              time: '12:50 - 13:30',
              subject: 'Физическо',
            },
          ],
        },
      ],
    };
  },
  created: function () {
    fetch('./schedule.json')
      .then((response) => response.json())
      .then((data) => {
        this.schedule = data.schedule;
      });
  },
});
