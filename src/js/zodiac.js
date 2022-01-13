window.onresize = function() {
    console.log('test');
}
var app = new Vue({
    el: '#zodiac',
    data: {
        test: 'test',
        visible : {
            nordi: false,
            skandi: true
        },
        classStyle: {
            nordi: '',
            skandi: 'type__style--active',
            black: 'type__style--active'
        },
        constellation: {
            'name': 'Водолей',
            'title': 'Воздух',
            'tag': 'Энергичный • решительный • независимый',
            'date': '21 янв - 18 фев'
        },
        zadiacInfo: {
            imageUrl: 'https://www.posterica.ru/img/zodiac/aqr-dark.svg',
            bgColor: '#353635',
            urlMonogram: 'https://www.posterica.ru/img/zodiac-monogram/aqr-dark.svg',
            nameColor: 'rgb(178, 179, 179)',
            textColor: 'rgb(254, 254, 254)',
            colorTheme: 'dark'
        },
        zadiac: 'aqr',
        zadiacArray: [
            {
                name: 'Водолей',
                date: '21 янв - 18 фев',
                title: 'aqr'
            },
            {
                name: 'Близнецы',
                date: '21 май - 20 июн',
                title: 'gem'
            },
            {
                name: 'Козерог ',
                date: '22 дек - 20 янв ',
                title: 'cap'
            },
            {
                name: 'Рыбы',
                date: '19 фев - 19 мар',
                title: 'psc'
            },
            {
                name: 'Овен',
                date: '20 мар - 19 апр ',
                title: 'ari'
            },
            {
                name: 'Телец',
                date: '20 апр - 20 май ',
                title: 'tau'
            }
        ],
        zadiacSearchValue: "",
        zadiacSearch: false
    },
    computed: {
        todosByTitle() {
            return this.zadiacArray.filter(item => item.name.toLowerCase().indexOf(this.zadiacSearchValue.toLowerCase()) !== -1)
        },
    },
    methods: {
        switchingButtons: function(group) {
            if(group == 'skandi') {
                this.visible.nordi = false;
                this.classStyle.nordi = '';
                this.visible.skandi = true;
                this.classStyle.skandi = 'type__style--active';
            } else if(group == 'nordi') {
                this.visible.nordi = true;
                this.classStyle.nordi = 'type__style--active';
                this.visible.skandi = false;
                this.classStyle.skandi = '';
            }
        },
        changeStyle: function(colorTheme, bgColor, nameColor, textColor) {
            this.zadiacInfo.colorTheme = colorTheme;
            this.zadiacInfo.imageUrl = `https://www.posterica.ru/img/zodiac/${this.zadiac}-${colorTheme}.svg`;
            this.zadiacInfo.bgColor = bgColor;
            this.zadiacInfo.urlMonogram = `https://www.posterica.ru/img/zodiac-monogram/${this.zadiac}-${colorTheme}.svg`;
            this.zadiacInfo.nameColor = nameColor;
            this.zadiacInfo.textColor = textColor;
        },
        zadiacSearchBoolean: function() {
            if(this.zadiacSearchValue)
                this.zadiacSearch = true;
            else
                this.zadiacSearch = false;
        },
        changeZadiac: function(zadiac, name, date) {
            this.zadiac = zadiac;
            this.constellation.name = name
            this.constellation.date = date
            this.zadiacInfo.imageUrl = `https://www.posterica.ru/img/zodiac/${zadiac}-${this.zadiacInfo.colorTheme}.svg`
            this.zadiacInfo.urlMonogram = `https://www.posterica.ru/img/zodiac-monogram/${zadiac}-${this.zadiacInfo.colorTheme}.svg`;
        }
    }
})