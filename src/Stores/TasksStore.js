import { decorate, observable} from "mobx";
import moment from "moment";


class TasksStore {

    idCounter = 1;
    labelOptions = ["New Feature", "Defect","Invalid","Emergency Repair"];
    pendingTasks = [];
    todayTasks = [];
    futureTasks = [];
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
        if (due && due.isAfter(moment(),"day")) {
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
        this.futureTasks = this.futureTasks.filter(item => item.id !== taskId);
        this.pendingTasks = this.pendingTasks.filter(item => item.id !== taskId);
        this.updateLocalStorage();
    };

    checkTask = taskId => {
        let task = this.pendingTasks.find(item => item.id === taskId);
        this.pendingTasks = this.pendingTasks.filter (item => item.id !== taskId);
        this.todayTasks = this.todayTasks.filter (item => item.id !== taskId);
        this.futureTasks = this.futureTasks.filter(item => item.id !== taskId)

        this.doneTasks.push(task);
        this.updateLocalStorage();

    }

    updateLocalStorage = () => {
        let tasks = JSON.stringify({
            todayTasks: this.todayTasks,
            futureTasks: this.futureTasks,
            pendingTasks: this.pendingTasks,
            done: this.doneTasks,
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
            tasks.futureTasks.forEach(task => {
                if (task.due) task.due = moment (task.due)
            });

            tasks.pendingTasks.forEach(task => {
               if (task.due)  task.due = moment (task.due)
            });

            this.todayTasks = tasks.todayTasks;
            this.futureTasks = tasks.futureTasks;
            this.pendingTasks = tasks.pendingTasks;
            this.doneTasks = tasks.done;
            this.labelOptions = tasks.labels;
            this.idCounter = tasks.idCounter;
        }
    };

}

decorate(TasksStore, {
    todayTasks: observable,
    futureTasks: observable
});

const tasksStore = new TasksStore();

export default tasksStore;
