export const saveToLocalStorage = (state: unknown) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("todosWithRedux", serializedState);
    } catch (error) {
        console.log(error);
    }
}
export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("todosWithRedux");
        if (!serializedState) return {
          todo: { todos: [] }
        };
        return { todo: { todos: JSON.parse(serializedState) } };
    } catch (error) {
        console.log(error);
    }
}