'use strict';

angular
    .module('webcrew')
    .service('menuItemsList', ['$q', menuItemsList])
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
        },
        {
            icon: 'build',
            id: 'support',
            name: 'Поддержка существующих проектов',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
        },
        {
            icon: 'trending_up',
            id: 'seo',
            name: 'SEO/Контекстная реклама',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
        },
        {
            icon: 'copyright',
            id: 'copywrite',
            name: 'Копирайтинг',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit mi. Integer id laoreet eros. Sed lobortis augue suscipit consequat placerat. Aenean consequat magna vitae ex accumsan iaculis. Sed cursus a purus sed ornare. Nulla facilisi. Nunc malesuada dui sed orci ornare, vitae consequat ante pulvinar. Vestibulum sollicitudin dui velit, ut bibendum dui dignissim a. In scelerisque quis mi id consectetur. In enim arcu, auctor nec vulputate eget, tempus ac neque. Donec sit amet fermentum arcu. Vivamus nibh metus, varius et augue posuere, tristique interdum magna. Duis pharetra nisi eu lectus dictum porta. Fusce venenatis magna a urna maximus dapibus. Phasellus ornare molestie ligula ut commodo.'
        }
    ];

    return {
        loadAllCItems: function () {
            // Simulate async nature of real remote calls
            return $q.when(cItems);
        }
    };
}
