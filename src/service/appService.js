'use strict';

angular
    .module('webcrew')
    .service('menuItemsList', ['$q', menuItemsList])
    .service('contactOptions', ['$q', contactOptions])
    .service('servicesItemsList', ['$q', servicesItemsList]);

function menuItemsList($q) {
    var items = [
        {
            name: 'главная',
            id: 'main',
            icon: 'home'
        },
        {
            name: 'услуги',
            id: 'services',
            icon: 'code'
        },
        {
            name: 'о нас',
            id: 'about',
            icon: 'apps'
        },
        {
            name: 'контакты',
            id: 'contacts',
            icon: 'phone'
        }


    ];

    // Promise-based API
    return {
        loadAllItems: function () {
            // Simulate async nature of real remote calls
            return $q.when(items);
        }
    };
}

function servicesItemsList($q) {

    var cItems = [
        {
            icon: 'code',
            id: 'development',
            name: 'Разработка сайтов',
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
            description: 'Мы разрабатываем проекты любой сложности - от одностраничных лендингов (landing page) и сайтов-визиток до сложных корпоративных порталов и интернет-магазинов.' +
            'Наши проекты могут быть разработаны как на основе популярных CMS и фрейморков, так и написанны с нуля, все сайты верстаются по методу Mobile first -  ' +
            'такие сайты смотрятся хорошо и смарт-часах, и на FullHD мониторах '
        },
        {
            icon: 'build',
            id: 'support',
            name: 'Поддержка существующих проектов',
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
            description: 'Если у Вас уже есть свой проект, но, по какой-то причине, разработчик не может его поддерживать, этим с радостью займемся мы. Мы умеем работать как с популярными' +
            ' CMS и фреймворками, так и с самописными сайты. В рамках поддержки мы возьмем на себя заботы по исправлению' +
            ' багов, поддержке хостинга, доработке новых модулей и функционала, рефакторингу кода и многое другое'
        },
        {
            icon: 'trending_up',
            id: 'seo',
            name: 'SEO/Контекстная реклама',
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
            //
            description: 'Даже самый лучший в мире сайт так и останется на задворках Интернета без качественной рекламы и SEO продвижения. Мы умеем не только грамотно настраивать рекламные кампании в Google и Yandex, ' +
            'но и продвигать сайты другими способами: продвижение поведенческими факторами, ссылками, продвижение в социальных сетях. Мы всегда в тренде всех последних новостей в алгоритмах ранжирования ' +
            'и выдачи поисковиков Google и Яндекс и с нами Ваш сайт не попадет в бан ПС'
        },
        {
            icon: 'copyright',
            id: 'copywrite',
            name: 'Копирайтинг',
            description: 'Любому сайту требуется уникальный и интересный контент - хороший текст может не только побудить посетителя Вашего ресурса к действию и привлечь новых клиентов, ' +
            ' но и позитивно скажется на ранжировании Вашего сайта в выдаче поисковых систем. Наши копирайтеры знают, как писать по-настоящему интересные, для людей и поисковых роботов, тексты, ' +
            ' которые не будут "водой" со вставками ключевых слов. Тексты, заказанные у нас, написаны на высшем уровне и проходят несколько проверок на разных антиплагиаторах, ведь мы понимаем, ' +
            ' что важна не только информация, но и способ её подачи и уникальность'
        }
    ];

    return {
        loadAllCItems: function () {
            // Simulate async nature of real remote calls
            return $q.when(cItems);
        }
    };
}

function contactOptions($q) {
    var options = [
        {
            name: 'telegram',
            icon: 'src/img/telegram.png',
            link: 'http://telegram.me/webcrew'
        },
        {
            name: 'skype',
            icon: 'src/img/skype.png',
            link: 'skype:webcrew?call'
        },
        {
            name: 'whatsapp',
            icon: 'src/img/whatsapp.png',
            link: 'whatsapp://send?abid=webcrew&text=Добрый день'
        }
    ];

    return {
        loadAllContacts: function() {
            return $q.when(options);
        }
    };
}
