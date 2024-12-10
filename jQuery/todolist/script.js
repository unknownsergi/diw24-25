const TASKSJSON = [
	{
		id: 1,
		title: "Learn JavaScript",
		completed: true,
		priority: "High",
	},
	{
		id: 2,
		title: "Learn React",
		completed: false,
		priority: "Medium",
	},
	{
		id: 3,
		title: "Learn Node",
		completed: false,
		priority: "Low",
	},
];

$(document).ready(function () {
	const tasks = loadTasksFromLocalStorage();

	if (tasks.length === 0) {
		$.each(TASKSJSON, function (_, task) {
			tasks.push(task);
			appendTask(task);
		});

		localStorage.setItem("tasks", JSON.stringify(TASKSJSON));
	} else {
		$.each(tasks, function (_, task) {
			appendTask(task);
		});
	}
});

function appendTask(task) {
	$("#todo-list").append(`<li>${task.title} - ${task.priority}</li>`);
}

function loadTasksFromLocalStorage() {
	return JSON.parse(localStorage.getItem("tasks")) || [];
}
