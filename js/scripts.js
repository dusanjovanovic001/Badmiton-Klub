
(function ($) {
    "use strict";

    $(window).on('scroll load', function () {
        if ($(".navbar").offset().top > 60) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })


    function toggleDropdown(e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);
    $("input, textarea").keyup(function () {
        if ($(this).val() != '') {
            $(this).addClass('notEmpty');
        } else {
            $(this).removeClass('notEmpty');
        }
    });
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

    $(".button, a, button").mouseup(function () {
        $(this).blur();
    });

})(jQuery);

$(document).ready(function () {

    const url= window.location.pathname
    const prefiksImages = '/Badmiton-Klub/images/'

    let navItems = [
        { name: "Početna", url: "index.html#header" },
        { name: "O nama", url: "index.html#about" },
        { name: "Tereni", url: "index.html#tereni" },
        { name: "Kontakt", url: "index.html#contact" },
        { name: "O Autoru", url: "autor.html" },
        { name: "Dokumentacija", url: "dokumentacija.pdf" },
    ]

    let menuIcons = ['<i class="fab fa-facebook-f fa-stack-1x bg-success"></i>', '<i class="fab fa-twitter fa-stack-1x bg-success"></i>', '<i class="fab fa-instagram fa-stack-1x bg-success"></i>', '<i class="fab fa-youtube fa-stack-1x bg-success"></i>', '<i class="fab fa-linkedin fa-stack-1x bg-success"></i>']
    let menuIconsHref = ['http://www.facebook.com', 'http://www.twitter.com'];
    let menuLogo = {
        text: "Badmiton Club", href: "index.html", src: `${prefiksImages}logo1.png`
    }
    generisiLogo('.logo-image')
    generisiNavigaciju(".navMenu");
    generisiIkoniceNavigacije(".navMenu");
    generisiIkoniceNavigacije(".social-container")

    function generisiLogo(element) {
        let parent = document.querySelector(element);
        let link = document.createElement("a");
        link.href = menuLogo.href;
        link.classList.add("navbar-brand");

        let logo = document.createElement("img");
        logo.src = menuLogo.src;
        logo.alt = menuLogo.text;
        link.appendChild(logo);

        let text = document.createElement("span");
        text.textContent = menuLogo.text;
        text.classList.add("text-success", "logo-text");
        link.appendChild(text);

        parent.appendChild(link);


    }


    function generisiNavigaciju(element) {

        let parent = document.querySelector(element);
        let ul = document.createElement('ul');
        ul.classList.add("navbar-nav", "ml-auto");
        navItems.forEach((el) => {
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.textContent = el.name;
            link.href = el.url;
            li.classList.add("nav-item");
            link.classList.add("nav-link", "page-scroll");
            li.appendChild(link);
            ul.appendChild(li);
        })
        parent.appendChild(ul);
    }

    function generisiIkoniceNavigacije(element) {
        let parent = document.querySelector(element);
        let iconContainer = document.createElement("span");
        iconContainer.classList.add("nav-item", 'social-icons');

        menuIcons.forEach((el, index) => {

            let span = document.createElement("span");
            span.classList.add("fa-stack");
            let link = document.createElement("a");
            link.href = menuIconsHref[index];
            link.innerHTML = el;
            span.appendChild(link);
            iconContainer.appendChild(span);
        })
        parent.appendChild(iconContainer);
    }

    let naslov = ['Badminton Klub: <i class="shadowG">Pokret, Zabava, Uspeh za Sve!</i>'];
    let naslovBtn = [`<a class="btn btn-success page-scroll" href="index.html#about">O nama</a>`, `<a class="btn-outline-lg page-scroll" href="index.html#contact"><i class="fas fa-user"></i>Kontakirajte nas</a>`
    ]

    const show = document.querySelector("#showcase");
    let naslovH1 = document.createElement("h1");
    naslovH1.classList.add("h1-large");
    naslovH1.innerHTML = naslov[0];
    show.appendChild(naslovH1);
    let dicC = document.createElement("div");

    naslovBtn.forEach(el => {

        dicC.innerHTML += el;


    })

    show.appendChild(dicC);

    if (url == "/Badmiton-Klub/" || url.includes("/Badmiton-Klub/index.html")) {
        const podNaslov = ['Ljubitelji sporta i zabave', 'U našem klubu volimo spajati ljude kroz sport i rekreaciju. Od prvog udarca do usavršavanja tehnike, sa članovima smo na svakom koraku - od treninga, preko turnira, do zajedničkih proslava.'];
        const timeYears = ['2023 - Sada ', '2020 - 2023', '2018 - 2020', '2016 - 2018'];
        const timeHeadings = ['Treneri i Instruktori Badmitona', 'Organizatori Turnira i Takmičenja', 'Škola Badmitona za Početnike', 'Klub Ljubitelja Badmitona'];
        const timeText = ['Svesrdno radimo na razvijanju veština članova kroz individualne i grupne treninge.', 'Sa ponosom organizujemo turnire različitih nivoa, omogućavajući članovima da testiraju svoje sposobnosti i uživaju u takmičenju.', 'Uveli smo program škole badmintona kako bismo uveli nove igrače u svet ovog sjajnog sporta.', 'Skupili smo se kao zajednica entuzijasta, organizujući prve amaterske mečeve i stvarajući temelje za naš klub.']
        const first = document.querySelector("#about .first");
        const second = document.querySelector("#about .second");
        const third = document.querySelector("#about .third");
        let hedTime = document.createElement("h2");
        hedTime.textContent = podNaslov[0];
        let pTime = document.createElement("p");
        pTime.textContent = podNaslov[1];
        first.appendChild(hedTime);
        first.appendChild(pTime);
        generateTimeTable(second, 0, 2);
        generateTimeTable(third, 2, 4);



        function generateTimeTable(element, start, end) {



            for (let i = start; i < end; i++) {
                let divContainer = document.createElement("div");
                let div = document.createElement("div");
                div.classList.add("time");
                let h6 = document.createElement("h6");
                let p = document.createElement("p");
                div.textContent = timeYears[i];
                h6.textContent = timeHeadings[i];
                p.textContent = timeText[i];
                divContainer.appendChild(div);
                divContainer.appendChild(h6);
                divContainer.appendChild(p);
                element.appendChild(divContainer);
            }
        }

        let hedTereni = ['Naše usluge', 'Naša škola badmintona nudi programe za sve uzraste i nivoe, uključujući grupne i individualne časove sa iskusnim trenerima. Pored rekreativnog igranja i takmičenja, nudimo i prilagođene programe za tim bilding i sportske događaje na razlicitim podlogama.']
        let tereniSlike = ['napolju.webp', 'unutra.webp', 'pesak.webp'];
        let nasloTerena = ['Spoljni tereni', 'Zatvoreni tereni', 'Tereni na pesku'];
        let opisTereni = ['Teren za badminton na otvorenom pruža svežinu i prostor za igru na čistom vazduhu, omogućavajući uživanje u prirodi, ali je izazovniji zbog vremenskih uslova poput vetra, koji može uticati na pravac i brzinu loptice, čineći igru dinamičnijom i zahtevnijom za igrače', 'Zatvoreni teren za badminton pruža stabilne uslove za igru bez uticaja vremenskih faktora poput vetra i kiše, omogućavajući igračima preciznost i kontrolu nad svakim udarcem, dok specijalizovana podloga smanjuje opterećenje na zglobove i doprinosi sigurnosti i udobnosti tokom igre.', 'Teren za badminton na pesku donosi dodatnu fizičku zahtevnost, jer mekana i neravna podloga otežava kretanje i skokove, što zahteva veću snagu i izdržljivost. Igranje na pesku pruža jedinstven doživljaj i opuštenu atmosferu, idealno za rekreaciju na plaži uz sportsku zabavu.'];

        const terenDiv = document.querySelector(".tereni");
        const tereniCont = document.querySelector(".tereniContainer");
        let naslovTer = document.createElement("h2");
        naslovTer.classList.add("h2-heading");
        naslovTer.textContent = hedTereni[0];
        let partereni = document.createElement("p");
        partereni.classList.add("p-heading");
        partereni.textContent = hedTereni[1];
        terenDiv.appendChild(naslovTer);
        terenDiv.appendChild(partereni);



        for (let i = 0; i < tereniSlike.length; i++) {

            let div1 = document.createElement("div");
            div1.classList.add("col-lg-4");
            let div2 = document.createElement("div");
            div2.classList.add("text-box");
            let slika = document.createElement("img");
            let aa = document.createElement("a");
            aa.href = '/Badmiton-Klub/images/' + tereniSlike[i];
            aa.dataset.lightbox = "gallery";
            aa.dataset.title = nasloTerena[i];
            slika.src = '/Badmiton-Klub/images/' + tereniSlike[i];
            slika.classList.add("img-thumbnail");
            slika.alt = nasloTerena[i];
            let h4Nasl = document.createElement("h4");
            h4Nasl.textContent = nasloTerena[i];
            let pTer = document.createElement("p");
            pTer.classList.add("textJ");
            let skraceno = opisTereni[i].substring(0, 180);
            pTer.innerHTML = skraceno + '...<a href="#">[Više]</a>';
            aa.appendChild(slika);
            div2.appendChild(aa);
            div2.appendChild(h4Nasl);
            div2.appendChild(pTer);
            div1.appendChild(div2);
            tereniCont.appendChild(div1);

        }

        const gameArea = document.querySelector(".area-1");
        gameArea.style.backgroundImage = "url('/Badmiton-Klub/images/utakmica.jpg')";

        const textContent = ['Zasto trenirati sa nama']
        const vestine = ['Komunikacija', 'Adaptabilnost', 'Problem-solving']
        const vestineText = ['Igrači moraju stalno komunicirati o strategijama, kretanju i raspodeli uloga na terenu.Učenje poštovanja protivnika i sudija kroz fer-plej.', 'Igrači se moraju brzo prilagođavati promenama u igri, kao što su različiti stilovi protivnika, promene tempa igre ili neočekivani potezi. Razvijanje strategija u realnom vremenu.', 'Rešavanje problema omogućava igračima da brzo analiziraju situaciju, identifikuju izazove i pronađu odgovarajuće rešenje. Ovo je ključno kako u sportu, tako i u svakodnevnom životu i karijeri.']

        const area2 = document.querySelector(".area-2-content");
        const text_cont = document.createElement("div");
        const h2text = document.createElement("h2");
        h2text.textContent = textContent[0];
        h2text.classList.add("text-center", "pb-5");
        text_cont.appendChild(h2text);


        for (let i = 0; i < vestine.length; i++) {

            let h5 = document.createElement("h5");
            h5.textContent = vestine[i];
            let p = document.createElement("p");
            p.textContent = vestineText[i];

            p.addEventListener("mouseover", () => {

                p.style.color = "green";
            })


            p.addEventListener("mouseout", () => {

                p.style.color = "black";
            })

            text_cont.appendChild(h5);
            text_cont.appendChild(p);
        }

        area2.appendChild(text_cont);

        $('.contactD').html("<h2>Kontakt forma</h2>");

        let reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]+(\s[A-ZŠĐČĆŽ][a-zšđčćž]+)+$/;
        let reEmail = /^[a-z0-9]{3,}([\.][a-z0-9\-\$\*\_]+)*[\@](gmail.com|hotmail.com|edu.rs)$/;
        let rePhone = /^\+381(6[0-9]|[1-5])[0-9]{6,7}$/;
        const reText = /^(\b\w+\b\W*){5,}$/;

        $('#cname').blur(function () {
            validateRegEx(reName, '#cname', 'Ime i Prezime', 'Dusan Jovanović');
        })

        $('#cemail').blur(function () {
            validateRegEx(reEmail, '#cemail', 'Email', 'dusanjovanovic001@gmail.com');
        })
        $('#cphone').blur(function () {
            validateRegEx(rePhone, '#cphone', 'Telefon', '+381691234567');
        })

        $('#cmessage').blur(function () {
            validateRegEx(reText, '#cmessage', 'Poruke', 'Mora da ima najmanje 5 reci');
        })


        function validateRegEx(regEx, element, requiredText, exampleText) {
            if ($(element).val() == 0) {
                $(element).addClass('error');
                $(element).next().text(requiredText + ' je obavezno.');
                error++;
                return;
            }
            if (!$(element).val().match(regEx)) {
                $(element).addClass('error');
                $(element).next().html('Pogrešan format. Primer: ' + exampleText);
                error++;
            }

            else {
                $(element).removeClass('error');
                $(element).addClass('success');
                $(element).next().text('');
            }
        }

        var error = 0;

        $('#potvrda').click(validateOnSubmit);

        function validateOnSubmit(e) {
            e.preventDefault();

            error = 0;
            validateRegEx(reName, '#cname', 'Ime i Prezime', 'Dusan Jovanović');
            validateRegEx(reEmail, '#cemail', 'Email', 'dusanjovanovic001@gmail.com');
            validateRegEx(rePhone, '#cphone', 'Telefon', '+381691234567');
            validateRegEx(reText, '#cmessage', 'Poruke', 'Mora da ima najmanje 5 reci');


            if (error == 0) {

                let messS = document.querySelector(".messageS");
                messS.textContent = 'Poruka poslata';
                messS.classList.add('successSubmit');
                $('#contactForm')[0].reset();




            }

        }
    }

    $('.author').html('<p class="p-small">Copyright © <a class="no-line" href="#your-link">Dusan Jovanovic</a> <a href="dokumentacija.pdf"> Dokumentacija</a>  </p> ');

    if (url.includes("/Badmiton-Klub/autor.html")) {
        const div = $('#about');
        const aboutA = $('<div>');
        aboutA.html('<h2 class="second-heading"><span class="text-success">O</span> Autoru</h2>');

        const info = ['Zovem se Dušan Jovanović. Rođen sam 25.12.2001 godine u Kruševcu. Živim u Pančevu.', 'U slobodno vreme volim da igram video igrice.', 'Indeks: 97/20'];
        const pictureDiv = $('<div>');
        const aboutdiv = $('<div>');

        pictureDiv.css("background-image", "url('/Badmiton-Klub/images/slika_autora.jpg')");
        pictureDiv.addClass("autorImg");

        $.each(info, function (index, value) {

            let p = $('<p>');
            p.text(value);
            p.addClass("infoAutor");
            aboutdiv.append(p);
        })
        aboutdiv.addClass("infoDiv");
        const autD = $('<div>');
        autD.addClass("about");
        autD.append(pictureDiv);
        autD.append(aboutdiv);

        $('#autor').append(aboutA);
        $('#autor').append(autD);






    }












})
