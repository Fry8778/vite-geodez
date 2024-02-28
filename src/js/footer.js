document.querySelector('#footer').innerHTML =  `
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
`