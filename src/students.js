var students = [{
    "id" : 1,
    "pib" : "Кульченко Ярослав",
    "zdav" : true,
    "group" : "RPZ 17 2/9",
    "src": "https://orig00.deviantart.net/ee08/f/2009/073/e/d/free_red_panda_icon_100x100_by_supertuffpinkpuff.png"
},
{
    "id" : 2,
    "pib" : "Бабанський Ярослав",
    "zdav" : false,
    "group" : "RPZ 17 1/9",
    "src": "https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464"
},
{
    "id" : 3,
    "pib" : "Щербань Ярослав",
    "zdav" : true,
    "group" : "RPZ 17 2/9",
    "src": "https://vignette.wikia.nocookie.net/adventuretime/images/9/99/AT_Icons_100x100_Jake.jpg/revision/latest?cb=20120919222926&path-prefix=ar"
}
]

new Vue({
     el: '#app',
     data: {
         students: [],
         search:'',
         student: {"pib": "", "zdav": false, "group": ""}
     },	 
     mounted: function(){
         this.students = students;
     },
     methods: {
        deleteStudent(studId) {
            this.students = this.students.filter(elem => {
                return elem.id != studId;
            });
        },
        addStudent() {
            this.student.id = this.students.length+1;
            this.students.push(JSON.parse(JSON.stringify(this.student)));
        }
     },
  
 });