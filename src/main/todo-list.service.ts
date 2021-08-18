import { IHttpService } from "angular";
import { Todo } from "./models/todo";

export default class TodoListService {
    static $inject = ['$http'];

    public todos: Todo[] = [{
        id: 1,
        userId: 234234,
        title: 'Todo 1',
        completed: true
    }, {
        id: 2,
        userId: 123213,
        title: 'Todo 2',
        completed: false
    }, {
        id: 3,
        userId: 986757,
        title: 'Todo 3',
        completed: true
    }];

    constructor(
        private $http: IHttpService
    ) { }

    public getTodos() {
        return this.todos;
    }

    public addTodo(todo: { title: string, completed: boolean }) {
        let { id, userId } = this.todos[this.todos.length - 1];
        this.todos.push({
            ...todo,
            id: ++id,
            userId: ++userId
        });
    }

    public updateTodo(todoToBeUpdated: Todo) {
        this.todos = this.todos.map((todo: Todo) => {
            return todo.id === todoToBeUpdated.id ? {
                ...todo,
                ...todoToBeUpdated
            } : todo;
        });
    }

    public deleteTodo(id: number) {
        this.todos = [...this.todos.filter(todo => todo.id !== id)];
    }
}