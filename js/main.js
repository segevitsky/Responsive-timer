let timer = document.getElementById('timer')
let toggleB = document.getElementById('toggleB')
let reset = document.getElementById('resetB')

let watch = new StopWatch(timer);


toggleB.addEventListener('click', () => {
    if (watch.isOn) {
        watch.stop()
        toggleB.innerText = 'start'
    } else {
        toggleB.innerText = 'stop'
        watch.start()
    }
})


reset.addEventListener('click', () => {
    watch.reset()
}) 

console.log('moshe!')