if (document.querySelector('.location-select-head')) {
    document.querySelectorAll('.location-select-head').forEach(el=>{
        el.addEventListener('click', (event)=>{
            event.currentTarget.parentElement.classList.toggle('active')
        })
    })
    document.querySelectorAll('.location-select-dropdown__item').forEach((item)=>{
        item.addEventListener('click', (event)=>{
            document.querySelectorAll('.location-select').forEach(select=>{
                select.classList.remove('active')
                select.querySelector('.location').innerHTML = event.currentTarget.innerHTML
            })
        })
    })
}
if (document.querySelector('.primary-select-head')) {
    document.querySelectorAll('.primary-select-head').forEach(el=>{
        let select = el.closest('.primary-select')
        el.addEventListener('click', (event)=>{
            event.currentTarget.parentElement.classList.toggle('active')
        })
        if (el.classList.contains('js-return')) {return}
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
if (document.querySelector('.profile-menu-list.js-containers')) {
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

if (document.querySelector('.js-open-modal') || document.querySelector('.js-close-modal')) {
    document.querySelectorAll('.js-open-modal').forEach(el=>{
        el.addEventListener('click', (event)=>{
            document.getElementById(event.currentTarget.dataset.modal).classList.add('active')
            if (!event.currentTarget.classList.contains('js-enable-scroll')) {
                document.body.classList.add('no-scroll')
            }
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
    document.querySelector('.burger-open').addEventListener('click', ()=>{
        document.querySelector('.burger-menu').classList.add('active')
        document.body.classList.add('no-scroll')
    })
    document.querySelector('.burger-close').addEventListener('click', ()=>{
        document.querySelector('.burger-menu').classList.remove('active') 
        document.body.classList.add('remove')       
    })
}
if (document.querySelector('.burger-select')) {
    document.querySelector('.burger-select').addEventListener('click', (event)=>{
        event.currentTarget.classList.toggle('active')
        if (event.currentTarget.classList.contains('active')) {
            event.currentTarget.lastElementChild.classList.add('d-flex')
            event.currentTarget.lastElementChild.classList.remove('d-none')
        } else {            
            event.currentTarget.lastElementChild.classList.add('d-none')
            event.currentTarget.lastElementChild.classList.remove('d-flex')
        }
    })
    document.querySelectorAll('.drop-item').forEach(el=>{        
        let tabs = document.querySelectorAll('.profile-tabs .profile-container')

        el.addEventListener('click', (event)=>{
            document.querySelector('.burger-menu').classList.remove('active')
            document.body.classList.remove('no-scroll')
            if (document.querySelector('.profile-container.d-flex')) {
                let active = document.querySelector('.profile-container.d-flex')
                active.classList.remove('d-flex')
                active.classList.add('d-none')
            }
            tabs[+event.currentTarget.dataset.container].classList.add('d-flex')
            tabs[+event.currentTarget.dataset.container].classList.remove('d-none')
        })
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


document.querySelectorAll('.code-input').forEach(input=>{
    input.addEventListener('input', (event)=>{
        event.currentTarget.blur()
        if (event.currentTarget.nextElementSibling) {
            event.currentTarget.nextElementSibling.focus()
        }
    })
})

if (document.querySelector('.full-screen-camera')) {
    document.querySelector('.full-screen-camera').addEventListener('click', (event)=>{
        event.currentTarget.classList.toggle('active')
        event.currentTarget.closest('.modal-wrapper').classList.toggle('fullscreen')
    })
}
document.querySelectorAll('.call-modal-nav__item').forEach(el=>{
    el.addEventListener('click', (event)=>{
        if (!event.currentTarget.classList.contains('active')) {
            event.currentTarget.parentElement.querySelector('.active').classList.remove('active')
            event.currentTarget.classList.add('active')
            event.currentTarget.closest('.modal-wrapper').querySelector('.modal-block.active').classList.remove('active')
            event.currentTarget.closest('.modal-wrapper').querySelectorAll('.modal-block')[event.currentTarget.dataset.container].classList.add('active')
        }
    })
})

if (document.getElementById('show-quick-chat')) {
    document.getElementById('show-quick-chat').addEventListener('click', (event)=>{
        event.currentTarget.classList.add('hide')
    })

    document.querySelector('#chat-modal .modal-close').addEventListener('click', ()=>{
        document.getElementById('show-quick-chat').classList.remove('hide')
    })
}
document.querySelectorAll('.js-next-quiz').forEach(el=>{
    el.addEventListener('click', (event)=>{
        if (event.currentTarget.closest('.quiz-step').nextElementSibling) {
            event.currentTarget.closest('.quiz-step').classList.add('hide')
            event.currentTarget.closest('.quiz-step').nextElementSibling.classList.remove('hide')
            document.getElementById('quiz-step-iter').innerHTML = event.currentTarget.closest('.quiz-step').nextElementSibling.dataset.step
        }
    })
})
document.querySelectorAll('.js-prev-quiz').forEach(el=>{
    el.addEventListener('click', (event)=>{
        if (event.currentTarget.closest('.quiz-step').previousElementSibling) {
            event.currentTarget.closest('.quiz-step').classList.add('hide')
            event.currentTarget.closest('.quiz-step').previousElementSibling.classList.remove('hide')
            document.getElementById('quiz-step-iter').innerHTML = event.currentTarget.closest('.quiz-step').previousElementSibling.dataset.step
        }
        
    })
})
