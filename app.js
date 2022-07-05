const app = Vue.createApp({
    data() {
        return {
            items: [
                {
                    img: "image-emily.jpg",
                    desc: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
                    name: "Emily R.",
                    title: "Marketing Director"
                },
                {
                    img: "image-thomas.jpg",
                    desc: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
                    name: "Thomas S.",
                    title: "Chief Operating Officer"
                },
                {
                    img: "image-jennie.jpg",
                    desc: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
                    name: "Jennie F.",
                    title: " Business Owner"
                },
            ],
            images:[
                {
                    url: 'image-gallery-milkbottles.jpg',
                    alt: 'Milk bottles',
                },
                {
                    url:'image-gallery-orange.jpg',
                    alt:'Orange'
                },
                {
                    url:'image-gallery-cone.jpg',
                    alt:'Cone'
                },
                {
                    url:'image-gallery-sugar-cubes.jpg',
                    alt:'Sugercubes'
                }
            ],
            windowWidth: window.innerWidth,
            menuOpen: false
        }
    },
    methods: {
        goToNextSection(){
            element = document.getElementById('about');
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop
              });
        },
        toggleBurgerMenu(){
            this.menuOpen=!this.menuOpen
        }
    }
});
app.mount('#app');
AOS.init();