import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todoControllers.js';
import { login, register, loginRequired } from '../controllers/userControllers.js';


const routes = (app) => {
    //todo routes
    app.route('/todos')
        .get(loginRequired, getTodos)
        .post(loginRequired, createTodo);

    app.route('/todo/:id')
        .put(updateTodo)
        .get(getTodo)
        .delete(deleteTodo);

    //auth routes
    app.route('/auth/register')
        .post(register);

    app.route('/auth/login')
        .post(login);
}


export default routes;