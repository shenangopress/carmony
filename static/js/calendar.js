document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar')
	var calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: [ 'dayGrid', 'timeGrid' ],
		defaultView: 'dayGridMonth',
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		},
		events: '/events/index.json'
	})
	calendar.render()
})

