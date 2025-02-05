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

let tasks = [];

function loadTasksFromLocalStorage() {
	const tasks = localStorage.getItem("tasks");
	return tasks ? JSON.parse(tasks) : [];
}

function saveTasksToLocalStorage(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function appendTask(task) {
	const taskItem = `<li>${task.title} - ${task.priority}</li>`;
	$("#taskList").append(taskItem);
}

$(document).ready(function () {
	tasks = loadTasksFromLocalStorage();

	if (tasks.length === 0) {
		$.each(TASKSJSON, function (_, task) {
			tasks.push(task);
			appendTask(task);
		});

		saveTasksToLocalStorage(TASKSJSON);
	} else {
		$.each(tasks, function (_, task) {
			appendTask(task);
		});
	}

	$("#addButton").click(function () {
		const newTask = {
			id: tasks.length + 1,
			title: $("#taskTitle").val(),
			completed: false,
			priority: $("#taskPriority").val(),
		};

		tasks.push(newTask);
		appendTask(newTask);
		saveTasksToLocalStorage(tasks);
	});
});
