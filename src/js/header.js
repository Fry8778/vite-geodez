document.querySelector('#header').innerHTML =  `
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
                        <use href="./images/sprite.svg#icon-envelope"></use>
                    </svg>den@klinch.ua</a>
            </li>
            <li class="contacts__item">
                <a href="tel:+380663790565" class="contacts__link__top">
                    <svg class="contacts__icon" width="10" height="16">
                        <use href="./images/sprite.svg#icon-smartphone"></use>
                    </svg>+38 066 379 05 65</a>
            </li>
        </ul>
    </div>
</header>
`