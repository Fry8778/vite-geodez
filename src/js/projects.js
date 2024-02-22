document.querySelector('#projects').innerHTML =  `
<section class="projects">
    <div class="container projects__container" id="Our__projects">
        <h1 class="section-title main__projects__title">Наші проекти</h1>
        <ul class="projects__list card-set list">
            <li class="card-item">
                <div class="link projects__link">
                    <div class="projects__wrapper">
                        <img srcset="./images/amazon-244.jpg 244w,
                        ./images/amazon-486.jpg 486w,
                        ./images/amazon-730.jpg 730w,
                        ./images/amazon-1120.jpg 1120w"
                        sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                        src="./images/amazon-244.jpg" alt="Total station Amazon">                               
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
                        <img srcset="./images/Building-244.jpg 244w,
                        ./images/Building-486.jpg 486w,
                        ./images/Building-730.jpg 730w,
                        ./images/Building-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="./images/Building-244.jpg"
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
                        <img srcset="./images/Eco-244.jpg 244w,
                        ./images/Eco-486.jpg 486w,
                        ./images/Eco-730.jpg 730w,
                        ./images/Eco-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="./images/Eco-244.jpg" alt="Solar panel">
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
                        <img srcset="./images/factory-244.jpg 244w,
                        ./images/factory-486.jpg 486w,
                        ./images/factory-730.jpg 730w,
                        ./images/factory-1120.jpg 1120w"
                        sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                        src="./images/factory-244.jpg" alt="Conveyor on the factory">
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
                        <img srcset="./images/field-244.jpg 244w,
                        ./images/field-486.jpg 486w,
                        ./images/field-730.jpg 730w,
                        ./images/field-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="./images/field-244.jpg" alt="Field">
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
                        <img srcset="./images/opera-244.jpg 244w,
                        ./images/opera-486.jpg 486w,
                        ./images/opera-730.jpg 730w,
                        ./images/opera-1120.jpg 1120w"
                           sizes="(min-width:1200px) 1120px, (min-width:786px) 730px, (min-width:480px) 486px, (max-width:480px) 100vw"
                            src="./images/opera-244.jpg" alt="Fittings">
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
`