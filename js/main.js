if (document.querySelector('.location-select-head')) {
    document.querySelector('.location-select-head').addEventListener('click', (event)=>{
        event.currentTarget.parentElement.classList.toggle('active')
    })
    document.querySelectorAll('.location-select-dropdown__item').forEach((item)=>{
        item.addEventListener('click', (event)=>{
            let select = event.currentTarget.closest('.location-select')
            select.classList.remove('active')
            select.querySelector('.location').innerHTML = event.currentTarget.innerHTML
        })
    })
}

if (document.querySelector('.js-swap-active')) {
    document.querySelectorAll('.js-swap-active').forEach(container=>{
        let elements = Array.from(container.children)
        elements.forEach(item=>{
            item.addEventListener('click', (event)=>{
                if (!event.currentTarget.classList.contains('active')) {
                    event.currentTarget.parentElement.querySelector('.active').classList.remove('active')
                    event.currentTarget.classList.add('active')
                }
            })
        })
    })
}

if (document.querySelector('.js-open-modal')) {
    document.querySelectorAll('.js-open-modal').forEach(el=>{
        el.addEventListener('click', (event)=>{
            document.getElementById(event.currentTarget.dataset.modal).classList.add('active')
            document.body.classList.add('no-scroll')
        })
    })
    document.querySelectorAll('.js-close-modal').forEach(el=>{
        el.addEventListener('click', (event)=>{
            event.currentTarget.closest('.modal-wrapper').classList.remove('active')
            document.body.classList.remove('no-scroll')
        })
    })
    document.querySelectorAll('.modal-wrapper').forEach(el=>{
        el.addEventListener('click', (event)=>{
            if (event.target.classList.contains('modal-wrapper')) {
                event.currentTarget.classList.remove('active')
                document.body.classList.remove('no-scroll')
            }
        })
    })
}
