const logger = (store) => (next) => (action) => {
    const currentSate = store.getState()
    console.log("Current State =>", currentSate)
    console.log("Action Dispatch =>", currentSate)
    next(action)
    console.log("Updated State =>", store.getState());
}
export default logger