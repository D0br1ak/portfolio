
const cityToggle = document.getElementById('cityToggle');
const cityList = document.getElementById('cityList');
const citySelect = document.getElementById('city-select');
const cityDropdown = document.getElementById('cityDropdown');


function collectCitiesFromHTML() {

  const options = Array.from(citySelect.options);

  const cities = options
    .map(o => o.value || o.textContent.trim())
    .filter(v => v && v !== '')
    .filter((v, i, a) => a.indexOf(v) === i);
  return cities;
}


function renderCityListFromHTML() {
  const cities = collectCitiesFromHTML();
  cityList.innerHTML = '';
  cities.forEach(city => {
    const item = document.createElement('div');
    item.className = 'city-item';
    item.setAttribute('role', 'option');
    item.textContent = city;
    item.tabIndex = 0;

    item.addEventListener('click', () => {
      selectCity(city);
      closeList();
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCity(city);
        closeList();
      }
    });

    cityList.appendChild(item);
  });
  return cities;
}

function openList() {
  cityList.style.display = 'block';
  cityToggle.setAttribute('aria-expanded', 'true');
  cityDropdown.classList.add('open');
  const first = cityList.querySelector('.city-item');
  if (first) first.focus();
}

function closeList() {
  cityList.style.display = 'none';
  cityToggle.setAttribute('aria-expanded', 'false');
  cityDropdown.classList.remove('open');
}

function selectCity(city) {
  cityToggle.textContent = city;
  citySelect.value = city;
  citySelect.dispatchEvent(new Event('change', { bubbles: true }));
}


document.addEventListener('DOMContentLoaded', () => {

  renderCityListFromHTML();

  cityToggle.textContent = 'Выберите город';
});


cityToggle.addEventListener('click', () => {
  const isOpen = cityList.style.display === 'block';
  if (isOpen) closeList();
  else openList();
});

document.addEventListener('mousedown', (e) => {
  if (!cityDropdown.contains(e.target)) closeList();
});

cityToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openList();
  } else if (e.key === 'Escape') {
    closeList();
  }
});

function refreshCitiesFromHTML() {
  renderCityListFromHTML();
}

// Бургер
(function () {
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__menu-link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1024) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }
})()
// modal
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const communicationBtn = document.querySelector(".hero__communication-btn");
const footerCommunicationBtn = document.querySelector(".footer__communication-btn");


function openModal(e) {
  if (e) {
    e.preventDefault(); 
  }
  modal.classList.add("active");
  document.body.style.overflow = 'hidden';
}


function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = '';
}


if (openBtn) {
  openBtn.addEventListener("click", openModal);
}

if (communicationBtn) {
  communicationBtn.addEventListener("click", openModal);
}

if (footerCommunicationBtn) {
  footerCommunicationBtn.addEventListener("click", openModal);
}


if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
// слайдер

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.cases__slider', {
        slidesPerView: 1, 
        spaceBetween: 15,
        
        navigation: {
            nextEl: '.cases__next',
            prevEl: '.cases__prev',
        },
        
        breakpoints: {
            
            601: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 24
            }
        }
    });
});
// слайдер2

document.addEventListener('DOMContentLoaded', function() {
    const marketplaceSwiper = new Swiper('.marketplace__slider', {
        slidesPerView: 1.2, 
        spaceBetween: 15,
        
        navigation: {
            nextEl: '.marketplace__next',
            prevEl: '.marketplace__prev',
        },
        
        breakpoints: {
            
            601: {
                slidesPerView: 2.2,
                spaceBetween: 24
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 24
            }
        }
    });
});

// accordion
document.addEventListener('DOMContentLoaded', function() {
  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(accordionList => {
    accordionList.addEventListener('click', (e) => {
      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return;
      
      e.preventDefault();
      
      const accordionItem = accordionControl.closest('.accordion-list__item');
      const accordionContent = accordionItem.querySelector('.accordion-list__content');
      const isOpened = accordionItem.classList.contains('accordion-list__item--opened');
      const openedItem = accordionList.querySelector('.accordion-list__item--opened');

      if (openedItem && openedItem !== accordionItem) {
        openedItem.classList.remove('accordion-list__item--opened');
        const openedContent = openedItem.querySelector('.accordion-list__content');
        openedContent.style.maxHeight = null;
      }
  
      if (!isOpened) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        accordionItem.classList.add('accordion-list__item--opened');
      } else {
        accordionContent.style.maxHeight = null;
        accordionItem.classList.remove('accordion-list__item--opened');
      }
    });
  });
});

// Модалка 2
document.addEventListener('DOMContentLoaded', function() {

  const modal = document.getElementById('service__modal');
  
  const openHeroBtn = document.getElementById('openServiceBtn');
  

  const openServiceBtn = document.getElementById('openServiceModal');
  const openHeroBtnByClass = document.querySelector('.hero__communication-btn');
  
  
  const closeBtn = document.getElementById('closeModalService');
  const closeReasonsBtn = document.querySelector('.close__reasons-btn');
  

  function openModal(event) {

    if (event) {
      event.preventDefault();
    }
    modal.style.display = 'flex';
  }
  function closeModal() {
    modal.style.display = 'none';
  }
  
  if (openHeroBtn) {
    openHeroBtn.addEventListener('click', openModal);
  }
  if (openServiceBtn) {
    openServiceBtn.addEventListener('click', openModal);
  }
  if (openHeroBtnByClass && !openHeroBtn) {
    openHeroBtnByClass.addEventListener('click', openModal);
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});


// Модалка услуг
document.addEventListener('DOMContentLoaded', function() {

  const formBtn = document.querySelector('.service__form-btn');
  const reasonsBlock = document.querySelector('.services__modal-reasons');
  const closeReasonBtn = document.querySelector('.close__reasons-btn'); 
  const servicesList = document.querySelector('.services__modal-list');
  const checkboxes = document.querySelectorAll('.services__modal-reasons-item input[type="checkbox"]');
  const modalCloseBtn = document.getElementById('closeModalService');

  let selectedItems = [];
  
  const initialItems = document.querySelectorAll('.services__modal-list .services__modal-item');
  initialItems.forEach(item => {
    const text = item.textContent.replace('SERM', '').trim();
    if (text) {
      selectedItems.push({
        text: text,
        value: text
      });
    }
  });

  function updateSelectedItems() {
    if (!servicesList) return;
    
    servicesList.innerHTML = '';
    
    selectedItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'services__modal-item';
      li.innerHTML = `
        ${item.text} 
        <a href="#" class="services__modal--closeBtn" data-value="${item.value}">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16.000000" height="16.000000" fill="none">
            <rect width="16.000000" height="16.000000" x="0.000000" y="0.000000" />
            <path d="M1 1L15 15M15 1L1 15" stroke="rgb(21,21,21)" stroke-linecap="round" stroke-width="1.000000" />
          </svg>
        </a>
      `;
      servicesList.appendChild(li);
    });
    
    if (selectedItems.length === 0) {
      const li = document.createElement('li');
      li.className = 'services__modal-item';
      li.textContent = 'Ничего не выбрано';
      li.style.opacity = '0.5';
      li.style.justifyContent = 'center';
      servicesList.appendChild(li);
    }
    
    addRemoveHandlers();
  }
  
  function addRemoveHandlers() {
    document.querySelectorAll('.services__modal--closeBtn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const valueToRemove = this.dataset.value;
        
        selectedItems = selectedItems.filter(item => item.value !== valueToRemove);
        
        const checkbox = Array.from(checkboxes).find(cb => cb.value === valueToRemove);
        if (checkbox) {
          checkbox.checked = false;
        }
        
        updateSelectedItems();
      });
    });
  }
  
  if (formBtn) {
    formBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      reasonsBlock.classList.add('active');
    });
  }
  
  if (closeReasonBtn) {
    closeReasonBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      reasonsBlock.classList.remove('active');
    });
  }
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function(e) {
      const modalOverlay = document.getElementById('service__modal');
      if (modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  }
  
  checkboxes.forEach((checkbox, index) => {
    const parentItem = checkbox.closest('.services__modal-reasons-item');
    if (!parentItem) return;
    
    const itemText = parentItem.textContent.trim();
    checkbox.value = itemText || `item-${index}`;
    
    if (checkbox.id === 'agree') {
      checkbox.id = `agree-${index}`;
    }
    
    checkbox.addEventListener('change', function(e) {
      e.stopPropagation();
      const itemText = this.closest('.services__modal-reasons-item').textContent.trim();
      const itemValue = this.value;
      
      if (this.checked) {
        selectedItems.push({
          text: itemText,
          value: itemValue
        });
      } else {
        selectedItems = selectedItems.filter(item => item.value !== itemValue);
      }
      
      updateSelectedItems();
    });
  });
  
  updateSelectedItems();
 
  document.addEventListener('click', function(e) {
    if (reasonsBlock && 
        reasonsBlock.classList.contains('active') && 
        !reasonsBlock.contains(e.target) && 
        formBtn && !formBtn.contains(e.target)) {
      reasonsBlock.classList.remove('active');
    }
  });
});
// Услуги
  document.addEventListener('DOMContentLoaded', function() {

    const servicesSection = document.querySelector('.services__section');
    const allServiceCards = document.querySelectorAll('.child-services');
    const mobileButton = document.querySelector('.servises__mobile--btn');
    
    if (!servicesSection || !mobileButton || allServiceCards.length === 0) return;

    const MOBILE_BREAKPOINT = 735;
  
    function isMobileWidth() {
      return window.innerWidth <= MOBILE_BREAKPOINT;
    }
    function resetToInitialState() {
      allServiceCards.forEach((card, index) => {
        if (index < 4) {
          card.style.display = 'flex'; 
        } else {
          card.style.display = 'none';
        }
      });
      mobileButton.textContent = 'Смотреть ещё услуги';
    }
    

    function showAllCards() {
      allServiceCards.forEach(card => {
        card.style.display = 'flex'; 
      });
      mobileButton.textContent = 'Скрыть';
    }
    

    let isExpanded = false;
    

    function applyResponsiveState() {
      if (isMobileWidth()) {

        if (!isExpanded) {
          resetToInitialState();
        } else {
          showAllCards();
        }
        mobileButton.style.display = 'inline-block'; 
      } else {

        allServiceCards.forEach(card => {
          card.style.display = 'flex'; 
        });
        mobileButton.style.display = 'none';

        isExpanded = false;
      }
    }
    
    applyResponsiveState();

    mobileButton.addEventListener('click', function(e) {
      e.preventDefault(); 
      
      if (!isMobileWidth()) return; 
      
      if (isExpanded) {
        resetToInitialState();
        isExpanded = false;
      } else {
        showAllCards();
        isExpanded = true;
      }
    });
    
    window.addEventListener('resize', function() {
      applyResponsiveState();
    });
  });

  const movingSlider = document.getElementById('movingSlider');
  const movingValue = document.getElementById('movingValue');
  const movingLargeValue = document.getElementById('movingLargeValue');

  function updateMovingValue() {
    const val = movingSlider.value;
    movingValue.textContent = val;
    movingLargeValue.textContent = val;

    const min = movingSlider.min;
    const max = movingSlider.max;
    const percent = (val - min) / (max - min) * 100;
    
 
    const valueWidth = movingValue.offsetWidth;
    const sliderWidth = movingSlider.offsetWidth;
    const offset = (percent / 100) * sliderWidth - valueWidth / 2;
  
    const maxOffset = sliderWidth - valueWidth;
    const boundedOffset = Math.min(Math.max(offset, 0), maxOffset);
    
    movingValue.style.left = boundedOffset + 'px';
    movingValue.style.transform = 'none';
  }

  movingSlider.addEventListener('input', updateMovingValue);
  
  window.addEventListener('load', () => {
    updateMovingValue();
  });
  
  window.addEventListener('resize', updateMovingValue);
  
  updateMovingValue();

// ============================================
// ИСПРАВЛЕННЫЙ КОД КВИЗА
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const quizItems = document.querySelectorAll('.quiz__item');
  let currentIndex = 0;

  // Показываем первый слайд при загрузке
  if (quizItems.length > 0) {
    quizItems[0].classList.add('quiz__item--active');
  }

  function showSlide(index) {
    // Убираем класс у всех слайдов (БЕЗ ТОЧКИ!)
    quizItems.forEach(item => {
      item.classList.remove('quiz__item--active');
    });
    // Добавляем класс нужному слайду (БЕЗ ТОЧКИ!)
    quizItems[index].classList.add('quiz__item--active');
    currentIndex = index;
  }

  const quizList = document.querySelector('.quiz__list');
  if (quizList) {
    quizList.addEventListener('click', function(e) {
      const target = e.target.closest('a');
      if (!target) return;

      // Кнопка "Далее"
      if (target.classList.contains('next-btn')) {
        e.preventDefault();
        if (currentIndex < quizItems.length - 1) {
          showSlide(currentIndex + 1);
        } else {
          console.log('Форма отправлена');
        }
      }

      // Кнопка "Назад"
      if (target.classList.contains('prev-btn')) {
        e.preventDefault();
        if (currentIndex > 0) {
          showSlide(currentIndex - 1);
        }
      }

      // Кнопка "Отправить"
      if (target.classList.contains('submit-btn')) {
        e.preventDefault();
        console.log('Самая последняя кнопка: отправка данных');
        // Здесь можно добавить логику отправки формы
      }
    });
  }
});