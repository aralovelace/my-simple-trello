import { decorate, observable} from "mobx";
import moment from "moment";


class TasksStore {

    idCounter = 1;
    labelOptions = ["New Feature", "Defect","Invalid","Emergency Repair"];
    pendingTasks = [];
    todayTasks = [];
    futureTasks = [];
    tomorrowTasks = [];
    doneTasks = [];


    addTask = (title, details, due,labels) => {
        let newTask = {
            title: title,
            details: details,
            due: due,
            labels: labels,
            id: this.idCounter
        };
        this.idCounter++;
        this.pendingTasks.push(newTask);
        console.log(due.diff(moment(),"day"));
        if (due &&
            (due.diff(moment(), 'day') === 1)
        ) {
            let tasks = this.tomorrowTasks;
            tasks.push(newTask);
            this.tomorrowTasks = tasks

        } else if (due && due.isAfter(moment(),"day")) {
            let tasks = this.futureTasks;
            tasks.push(newTask);
            this.futureTasks = tasks

        } else {
            let tasks = this.todayTasks;
            tasks.push(newTask);
            this.todayTasks = tasks;
        }
        this.updateLocalStorage();
    };

    deleteTask = taskId => {
        this.todayTasks = this.todayTasks.filter(item => item.id !== taskId);
        this.tomorrowTasks = this.tomorrowTasks.filter(item => item.id !== taskId);
        this.futureTasks = this.futureTasks.filter(item => item.id !== taskId);
        this.pendingTasks = this.pendingTasks.filter(item => item.id !== taskId);
        this.doneTasks = this.doneTasks.filter(item => item.id !== taskId);
        this.updateLocalStorage();
    };

    checkTask = taskId => {
        let task = this.pendingTasks.find(item => item.id === taskId);
        this.pendingTasks = this.pendingTasks.filter (item => item.id !== taskId);
        this.tomorrowTasks = this.tomorrowTasks.filter(item => item.id !== taskId);
        this.todayTasks = this.todayTasks.filter (item => item.id !== taskId);
        this.futureTasks = this.futureTasks.filter(item => item.id !== taskId)
        this.doneTasks.push(task);
        this.updateLocalStorage();

    }

    updateLocalStorage = () => {
        let tasks = JSON.stringify({
            todayTasks: this.todayTasks,
            tomorrowTasks: this.tomorrowTasks,
            futureTasks: this.futureTasks,
            pendingTasks: this.pendingTasks,
            doneTasks: this.doneTasks,
            labels: this.labelOptions,
            idCounter: this.idCounter
        });
        localStorage.setItem("tasks",tasks);
    }

    retrieveFromLocalStorage = () => {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks)
        {
            tasks.todayTasks.forEach(task => {
                if (task.due) task.due = moment(task.due);
            });
            tasks.tomorrowTasks.forEach(task => {
                if (task.due) task.due = moment(task.due);
            });
            tasks.futureTasks.forEach(task => {
                if (task.due) task.due = moment (task.due)
            });
            tasks.pendingTasks.forEach(task => {
               if (task.due)  task.due = moment (task.due)
            });
            tasks.doneTasks.forEach(task => {
                if (task.due)  task.due = moment (task.due)
            });

            this.todayTasks = tasks.todayTasks;
            this.tomorrowTasks = tasks.tomorrowTasks;
            this.futureTasks = tasks.futureTasks;
            this.pendingTasks = tasks.pendingTasks;
            this.doneTasks = tasks.doneTasks;
            this.labelOptions = tasks.labels;
            this.idCounter = tasks.idCounter;
        }
    };

}

decorate(TasksStore, {
    todayTasks: observable,
    futureTasks: observable,
    doneTasks: observable,
    tomorrowTasks: observable
});

const tasksStore = new TasksStore();

export default tasksStore;
