console.log("Hello from the options page")

const nameInput = document.getElementById ("name-input")
const saveBtn = document.getElementById("save-btn")

const timeInput = document.getElementById("time-input")

saveBtn.addEventListener("click", () => {
    // console.log(nameInput.value)
    const theName=nameInput.value
    const notificationTime = timeInput.value
    chrome.storage.sync.set({
        theName, notificationTime}, () => {
        console.log(`Name is set to ${theName}`)
        console.log(`Time is set to ${notificationTime}`)
    })
})

chrome.storage.sync.get(["theName", "notificationTime"], (result) => {
    console.log(result)
    nameInput.value = result.theName ?? "???"
    timeInput.calue = result.notificationTime ?? 1000
})

