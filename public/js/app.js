console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.getElementById('message-1')
const msg2 = document.getElementById('message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    msg1.textContent = 'Chargement ...'
    fetch(`/weather?address=${encodeURIComponent(location)}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
           msg2.textContent = data.error
        } else {
            msg1.textContent = data.location
            msg2.textContent = data.forecast
        }
    })
})
})
