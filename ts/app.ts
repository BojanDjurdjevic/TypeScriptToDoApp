import { AppState } from "./AppState"
import { ToDoForm } from "./components/ToDoForm"
import { CompletedTasks, ScheduledTask, Task, UnscheduledTask } from "./components/ToDoTask"

const divApp = <HTMLDivElement>document.querySelector("#app")

const forma = new ToDoForm()
forma.addTo(divApp)
const naslov = <HTMLHeadingElement>document.createElement("h1")
naslov.innerHTML = "MY TASKS"
divApp.append(naslov)
const podDiv = <HTMLDivElement>document.createElement("div")
podDiv.classList.add("pod_div")
divApp.append(podDiv)

const unscheduled = new UnscheduledTask("")
AppState.state.subscribe(unscheduled)
unscheduled.addTo(podDiv)
const scheduled = new ScheduledTask("", "")
AppState.state.subscribe2(scheduled)
scheduled.addTo(podDiv)
const completed = new CompletedTasks("")
AppState.state.mark(completed)
completed.addTo(podDiv)

function firstDiv() {
    unscheduled.addClass("showup")
}
function secondDiv() {
    scheduled.addClass("showup")
}
function thirdDiv() {
    completed.addClass("showup")
}

window.addEventListener("load", () => {
    setTimeout(firstDiv, 1900)
    setTimeout(secondDiv, 2900)
    setTimeout(thirdDiv, 3900)
})