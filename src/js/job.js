document.querySelector('#job').innerHTML =  `
<section class="job">
    <div class="container job__container">
        <h2 class="section-title how__job__title">Як ми працюємо</h2>
        <ul class="job__list">
            <li class="job__item">
                <svg class="icon-job" width="50" height="50">
                    <use href="../public/sprite/sprite.svg#icon-call"></use>
                </svg>
                <div class="job_wrapper">
                    <h2 class="job__title">Етап замовлення</h2>
                    <p class="job__text">Приймаємо дзвінок клієнта.<br>
                        Учочнюємо деталі замовлення.<br>
                        Визначаємо ціну.</p>
                </div>
                <p class="job__number">1</p>
            </li>
            <li class="job__item">
                <svg class="icon-job" width="50" height="50">
                    <use href="../public/sprite/sprite.svg#icon-surveying"></use>
                </svg>
                <div class="job_wrapper">
                    <h2 class="job__title">Етап польовий</h2>
                    <p class="job__text">
                        Проведення геодезичних вимірюваннь або<br>
                        буріння та відбір зразків. <br>
                        Отримання передплати. </p>
                </div>
                <p class="job__number">2</p>
            </li>
            <li class="job__item">
                <svg class="icon-job" width="50" height="50">
                    <use href="../public/sprite/sprite.svg#icon-laboratory"></use>
                </svg>
                <div class="job_wrapper">
                    <h2 class="job__title">Етап лабораторний</h2>
                    <p class="job__text">Аналіз отриманих геодезичних вимірювань.<br>
                        Проведення лабораторних досліджень зразків. </p>
                </div>
                <p class="job__number">3</p>
            </li>
            <li class="job__item">
                <svg class="icon-job" width="50" height="50">
                    <use href="../public/sprite/sprite.svg#icon-contract"></use>
                </svg>
                <div class="job_wrapper">
                    <h2 class="job__title">Етап камеральний</h2>
                    <p class="job__text">Розробка геодезичного звіту<br>
                        або технічний звіту з геологічних розвідок. </p>
                </div>
                <p class="job__number">4</p>

            </li>                   
            <li class="job__item">
                <svg class="icon-job" width="50" height="50">
                    <use href="../public/sprite/sprite.svg#icon-paper"></use>
                </svg>
                <div class="job_wrapper">
                    <h2 class="job__title">Етап звіту</h2>
                    <p class="job__text">Передача матеріалів клієнту.<br>
                        Отримання кінцевої суми оплати. </p>
                </div>
                <p class="job__number number__five">5</p>
            </li>
        </ul>
    </div>
</section>
`