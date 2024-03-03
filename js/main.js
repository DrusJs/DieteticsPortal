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
if (document.querySelector('.primary-select-head')) {
    document.querySelectorAll('.primary-select-head').forEach(el=>{
        let select = el.closest('.primary-select')
        el.addEventListener('click', (event)=>{
            event.currentTarget.parentElement.classList.toggle('active')
        })
        select.querySelectorAll('.primary-select-dropdown__item').forEach((item)=>{
            item.addEventListener('click', (event)=>{            
                select.classList.remove('active')
                select.querySelector('.primary-select-head__value').innerHTML = event.currentTarget.innerHTML
            })
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
if (document.querySelector('.js-swap-table')) {
    let elements = Array.from(document.querySelector('.js-swap-table').children)
    let tabs = Array.from(document.querySelector('.tables-tabs').children)
    elements.forEach(item=>{
        item.addEventListener('click', (event)=>{
            if (!event.currentTarget.classList.contains('active')) {
                event.currentTarget.parentElement.querySelector('.active').classList.remove('active')
                event.currentTarget.classList.add('active')
                if (document.querySelector('.tables-tabs .active-table')) {
                    document.querySelector('.tables-tabs .active-table').classList.remove('active-table')
                }
                tabs[+event.currentTarget.dataset.table].classList.add('active-table')
            }
        })
    })
}
if (document.querySelector('.profile-menu-list')) {
    let elements = Array.from(document.querySelector('.profile-menu-list').children)
    let tabs = document.querySelectorAll('.profile-container')
    elements.forEach(el=>{
        el.addEventListener('click', (event)=>{
            if (!event.currentTarget.classList.contains('active')) {
                event.currentTarget.parentElement.querySelector('.active').classList.remove('active')
                event.currentTarget.classList.add('active')
                if (document.querySelector('.profile-container.d-flex')) {
                    let active = document.querySelector('.profile-container.d-flex')
                    active.classList.remove('d-flex')
                    active.classList.add('d-none')
                }
                tabs[+event.currentTarget.dataset.container].classList.add('d-flex')
                tabs[+event.currentTarget.dataset.container].classList.remove('d-none')
            }

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
        el.addEventListener('mousedown', (event)=>{
            if (event.target.classList.contains('modal-wrapper')) {
                event.currentTarget.classList.remove('active')
                document.body.classList.remove('no-scroll')
            }
        })
    })
}
if (document.querySelector('.favorite-button')) {
    document.querySelectorAll('.favorite-button').forEach(el=>{
        el.addEventListener('click', (event)=>{
            event.currentTarget.classList.toggle('active')
        })
    })
}
if (document.querySelector('.burger-button')) {
    document.querySelector('.burger-open').addEventListener('click', (event)=>{
        document.querySelector('.burger-menu').classList.add('active')
    })
    document.querySelector('.burger-close').addEventListener('click', (event)=>{
        document.querySelector('.burger-menu').classList.remove('active')        
    })
}

function nextStep(el) {
    let block = el.closest('.container')
    block.classList.remove('d-flex')
    block.classList.add('d-none')
    block.nextElementSibling.classList.add('d-flex')
    block.nextElementSibling.classList.remove('d-none')
}
function prevStep(el) {
    let block = el.closest('.container')
    block.classList.remove('d-flex')
    block.classList.add('d-none')
    block.previousElementSibling.classList.add('d-flex')
    block.previousElementSibling.classList.remove('d-none')
}

if (document.querySelector('.review-scroll')) {
    const slider = document.querySelector('.review-scroll')
    let isDown = false
    let startX
    let scrollLeft
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active')
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active')
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX);
      slider.scrollLeft = scrollLeft - walk
    })
}
