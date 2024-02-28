(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();document.querySelector("#header").innerHTML=`
<header class="header">
    <div class="container nav__container">
        <a href="./index.html" class="logo">
            <span class="logo__label">Geo</span>Dez
        </a>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="#About-us" class="nav__link">
                        Про компанію
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#Geodesy-our-features" class="nav__link">
                        Наші переваги
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#Geodesy-our-services" class="nav__link">
                        Послуги та прайс
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#Our__projects" class="nav__link">
                        Наші проекти
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#Geodesy-contacts" class="nav__link">
                        Контакти
                    </a>
                </li>                   
            </ul>
        </nav>
        <ul class="contacts">
            <li class="contacts__item">
                <a href="mailto:den@klinch.ua" class="contacts__link__top">
                    <svg class="contacts__icon" width="16" height="12">
                        <use href="../public/sprite/sprite.svg#icon-envelope"></use>
                    </svg>den@klinch.ua</a>
            </li>
            <li class="contacts__item">
                <a href="tel:+380663790565" class="contacts__link__top">
                    <svg class="contacts__icon" width="10" height="16">
                        <use href="../public/sprite/sprite.svg#icon-smartphone"></use>
                    </svg>+38 066 379 05 65</a>
            </li>
        </ul>
    </div>
</header>
`;document.querySelector("#hero").innerHTML=`
<section class="hero">
    <div class="container hero_container">
        <h1 class="hero-title">
            Геологія та геодезія <br>
            для Вашого успіху
        </h1>
    </div>
</section>
`;document.querySelector("#about").innerHTML=`
<section class="about">
            <div class="container about_company" id="About-us">
                <ul class="about__us ">
                    <li class="about__us__wrapper">
                        <img class="geodesy__kfc" srcset="../public/images/kfc/kfc-244.jpg 244w,
                                ../public/images/kfc/kfc-486.jpg 486w,
                                ../public/images/kfc/kfc-730.jpg 730w,
                                ../public/images/kfc/kfc-1120.jpg 1120w"
                            sizes="(min-width:1200px) 730px, (min-width:786px) 244px, (min-width:480px) 244px, (max-width:480px) 100vw"
                            src="../public/images/kfc/kfc-244.jpg" alt="Geodesy at KFC">
                    </li>
                    <li class="about__us__wrapper">
                        <h2 class="section-title about__us__title">Про нашу компанію</h2>
                        <p class=" about__us__text">
                            Команда нашої компанії успішно реалізувала понад 1000 проектів у всіх куточках України. Наша
                            динамічна компанія, що спеціалізується на виконанні робіт з
                            геології та
                            геодезії, забезпечує високоякісні послуги для різноманітних проектів. Використовуючи
                            передові
                            технології
                            та кваліфікованих фахівців, ми проводимо геологічні дослідження та геодезичні вимірювання,
                            гарантуючи
                            точні дані для будівельних та інженерних проектів. Наш колектив відрізняється високою якістю
                            виконання
                            завдань та своєчасним наданням повної інформації, необхідної для прийняття обґрунтованих
                            рішень.
                            Ми використовуємо лише сучасне обладнання для проведення робіт, щоб забезпечити максимальну
                            точність та надійність результатів.
                            Ми
                            завжди готові до викликів у сфері геологічних та топографічних робіт, надаючи найвищий
                            рівень
                            професійних послуг та сприяючи успішному втіленню проектів клієнтів.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
`;document.querySelector("#job").innerHTML=`
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
`;document.querySelector("#features").innerHTML=`
<section class="features">
    <div class="container features__container" id="Geodesy-our-features">
        <h2 class="section-title primary__features">Наші переваги</h2>
        <ul class="features__list">
            <li class="features__item">
                <svg class="features__icon" width="55" height="55">
                    <use href="../public/sprite/sprite.svg#icon-construction"></use>
                </svg>
                <h3 class="features__title">Високий професіоналізм</h3>
                <p class="features__text">Наш колектив експертів володіє широким спектром знань у галузі
                    геологічних
                    та
                    топографічних досліджень. Висока кваліфікація наших фахівців гарантує надійні та точні
                    результати
                    робіт. Ми впевнені в якості наших послуг, що завжди відповідає найвищим стандартам.</p>
            </li>
            <li class="features__item">
                <svg class="features__icon" width="55" height="55">
                    <use href="../public/sprite/sprite.svg#icon-land-surveyor"></use>
                </svg>
                <h3 class="features__title">Сучасне обладнання</h3>
                <p class="features__text">Наша компанія інвестує в сучасне топографічне та геологічне
                    обладнання, що
                    дозволяє забезпечити найточніші вимірювання та високоякісні дослідження в стислі терміни. Ми
                    використовуємо
                    передові
                    технології для забезпечення точності та ефективності усіх проектів.</p>
            </li>
            <li class="features__item">
                <svg class="features__icon" width="60" height="60">
                    <use href="../public/sprite/sprite.svg#icon-meeting"></use>
                </svg>
                <h3 class="features__title">Індивідуальний підхід</h3>
                <p class="features__text">Ми розуміємо, що кожен проект важливий та унікальний. Наші фахівці
                    працюють з
                    клієнтами,
                    враховуючи їхні потреби та особливості проекту. Ми пропонуємо індивідуальні рішення, які
                    відповідають конкретним вимогам та гарантують успішне виконання завдань.</p>
            </li>
            <li class="features__item">
                <svg class="features__icon" width="55" height="55">
                    <use href="../public/sprite/sprite.svg#icon-quality"></use>
                </svg>
                <h3 class="features__title">Гарантія якості</h3>
                <p class="features__text">
                    Наша компанія надає повну гарантію якості на виконані роботи. Використовуючи інноваційні
                    рішення ми пильно стежимо за кожним етапом проєкту, щоб забезпечити відмінні результати та
                    задовільнити клієнтів надавши відчуття спокою та впевненості в надійності наших послуг.</p>
            </li>
        </ul>
    </div>
</section>  
`;document.querySelector("#services").innerHTML=`
<section class="services">
    <div class="container services__container" id="Geodesy-our-services">
        <h2 class="section-title services__title">Послуги та прайс</h2>
        <table>
            <thead>
                <tr>
                    <th>Геодезичні та геологічні роботи</th>
                    <th>Ціна (грн)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Розбивка осей будівлі</th>
                    <td>1600</td>
                </tr>
                <tr>
                    <th>Винесення кордонів земельної ділянки</th>
                    <td>1500</td>
                </tr>
                <tr>
                    <th>Топозйомка 1:500</th>
                    <td>2000</td>
                </tr>
                <tr>
                    <th>1 га топозйомка 1:500 (не забудована) </th>
                    <td>1000</td>
                </tr>
                <tr>
                    <th>1 га топозйомка 1:500 (промислова зона)</th>
                    <td>4500</td>
                </tr>
                <tr>
                    <th>1 км топозйомка для лінійних споруд</th>
                    <td>4000</td>
                </tr>
                <tr>
                    <th>Геологія ділянки під розміщення приватного житлового будинку</th>
                    <td>від 5000</td>
                </tr>
                <tr>
                    <th>Геологія ділянки промислового призначення</th>
                    <td>від 10000</td>
                </tr>
            </tbody>
        </table>
    </div>
</section> 
`;document.querySelector("#projects").innerHTML=`
<section class="projects">
    <div class="container projects__container" id="Our__projects">
        <h1 class="section-title main__projects__title">Наші проекти</h1>
        <ul class="projects__list card-set list">
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="../public/images/amazon/amazon-244.jpg 244w,
                        ../public/images/amazon/amazon-486.jpg 486w,
                        ../public/images/amazon/amazon-730.jpg 730w,
                        ../public/images/amazon/amazon-1120.jpg 1120w"
                        sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                        src="../public/images/amazon/amazon-244.jpg" alt="Total station Amazon">                               
                        <div class="projects__text">
                            <p>
                                Нивелювання підлог з метою розрахунку обсягу матеріалів для
                                виконнаня робіт, встановлення відмітки на рівні підлог.
                            </p>
                        </div>
                    </div>
                    <div class="projects__card">
                        <h2 class="projects__title">
                            Офіс Amazon
                        </h2>
                        <p class="projects__name">
                            м. Дніпро
                        </p>
                    </div>
                </div>
            </li>
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="../public/images/building/Building-244.jpg 244w,
                        ../public/images/building/Building-486.jpg 486w,
                        ../public/images/building/Building-730.jpg 730w,
                        ../public/images/building/Building-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="../public/images/building/Building-244.jpg"
                            alt="Total station against the background of a building">
                        <div class="projects__text">
                            <p>
                                Контроль якості виконання робіт за допомогою вимірювання та аналізу відхилень
                                від проектних параметрів.
                            </p>
                        </div>
                    </div>
                    <div class="projects__card">
                        <h2 class="projects__title">
                            ТОВ "Автодор"
                        </h2>
                        <p class="projects__name">
                            м. Дніпро
                        </p>
                    </div>
                </div>
            </li>
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="../public/images/eco/Eco-244.jpg 244w,
                        ../public/images/eco/Eco-486.jpg 486w,
                        ../public/images/eco/Eco-730.jpg 730w,
                        ../public/images/eco/Eco-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="../public/images/eco/Eco-244.jpg" alt="Solar panel">
                        <div class="projects__text">
                            <p>
                                Визначення місць, оптимального, розташування сонячних панелей
                                для максимального ефективного збору сонячної енергії.
                            </p>
                        </div>
                    </div>
                    <div class="projects__card">
                        <h2 class="projects__title">
                            SOLAR Українські системи
                        </h2>
                        <p class="projects__name">
                            Новомосковський район Дніпропетровська область
                        </p>
                    </div>
                </div>
            </li>
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="../public/images/factory/factory-244.jpg 244w,
                        ../public/images/factory/factory-486.jpg 486w,
                        ../public/images/factory/factory-730.jpg 730w,
                        ../public/images/factory/factory-1120.jpg 1120w"
                        sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                        src="../public/images/factory/factory-244.jpg" alt="Conveyor on the factory">
                        <!-- size="(min-width:1200px) 730px, (min-width:786px) 486px, (min-width:480px) 244px, (max-width:480px) 100vw" -->
                        <div class="projects__text">
                            <p>
                                Проведення геодезичних вимірювань для контролю якості будівельних
                                робіт під час будівництва лінії з виробництва цементу.
                            </p>
                        </div>
                    </div>
                    <div class="projects__card">
                        <h2 class="projects__title">
                            ПрАТ "Кривий Ріг Цемент"
                        </h2>
                        <p class="projects__name">
                            м. Кривий Ріг
                        </p>
                    </div>
                </div>
            </li>
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="../public/images/field/field-244.jpg 244w,
                        ../public/images/field/field-486.jpg 486w,
                        ../public/images/field/field-730.jpg 730w,
                        ../public/images/field/field-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="../public/images/field/field-244.jpg" alt="Field">
                        <div class="projects__text">
                            <p>
                                Винесення меж земельних ділянок в натуру із встановленням межових знаків.
                            </p>
                        </div>
                    </div>
                    <div class="projects__card">
                        <h2 class="projects__title">
                            ФГ "РОМАН"
                        </h2>
                        <p class="projects__name">
                            Царичанський район Дніпропетровська осласть
                        </p>
                    </div>
                </div>
            </li>
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="../public/images/opera/opera-244.jpg 244w,
                        ../public/images/opera/opera-486.jpg 486w,
                        ../public/images/opera/opera-730.jpg 730w,
                        ../public/images/opera/opera-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="../public/images/opera/opera-244.jpg" alt="Fittings">
                        <div class="projects__text">
                            <p>
                                Контроль рівня висоти заливки фундаменту, відповідно до проектної документації.
                            </p>
                        </div>
                    </div>
                    <div class="projects__card">
                        <h2 class="projects__title">ТОВ "ВЕРТЕКС ГРУПП"</h2>
                        <p class="projects__name">м. Дніпро</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</section>
`;document.querySelector("#footer").innerHTML=`
<footer class="footer">
    <div class="container footer__container" id="Geodesy-contacts">
        <div class="wrapper footer__item1">
            <a href="./index.html" class="logo-down">Geo<span class="down-white">Dez</span></a>
            <p class="slogan__text">Геологія та геодезія</p>
            <p class="slogan__text">для Вашого успіху</p>
        </div>
        <div class="wrapper footer__item2">
            <address class="footer-address">
                <ul class="bottom list">
                    <li class="bottom-box contacts__box">
                        <p class="footer-text contacts__text">КОНТАКТИ</p>
                    </li>
                    <li class="bottom-box">
                        <p class="link town">м.Дніпро, вулиця Січеславська Набережна, 29А
                        </p>
                    </li>
                    <li class="bottom-box">
                        <a href="mailto:den@klinch.ua" class="link__footer">den@klinch.ua</a>
                    </li>
                    <li class="bottom-box">
                        <a href="tel:+380663790565" class="link__footer">+38 066 379 05 65</a>
                    </li>
                </ul>
            </address>
        </div>
        <div class="wrapper footer__item3">
            <ul class="work list">
                <li class="work-box">
                    <p class="footer-text work__text">ГРАФІК РОБОТИ</p>
                </li>
                <li class="work-box">
                    <p class="footer-text work__item">ПН-СБ: 8.00 - 20.00</p>
                </li>
                <li class="work-box">
                    <p class="footer-text work__item">Вихідний: неділя</p>
                </li>
            </ul>
        </div>
        <div class="footer-item join">
            <p class="footer-text join-up">ДОЛУЧАЙТЕСЬ</p>
            <ul class="social-media">
                <li class="social-item">
                    <a href="https://www.instagram.com/geodez_one/" class="social-link"><svg class="icon-foot"
                            width="20" height="20">
                            <use href="../public/sprite/sprite.svg#icon-instagram"></use>
                        </svg></a>
                </li>
                <li class="social-item">
                    <a href="https://t.me/d_kulinich" class="social-link"><svg class="icon-foot" width="20"
                            height="20">
                            <use href="../public/sprite/sprite.svg#icon-telegram"></use>
                        </svg></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer-reserved">
        <div class="footer-down-bottom">
            <p class="footer-comment">Copyright &copy; 2024 GEODEZ</p>
        </div>
    </div>
</footer>
`;
