alert(" mari kita bermain angka \n Pilih angka 1-10 \n kamu punya 3 kesempatan \n ");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for ( let nyawa = 3;nyawa >= 1; nyawa --) {


const tebakanUser = prompt("tulis angkamu disini")

if (tebakanUser == angkaBenar) {
    alert(` KERENNNNN \n bener dek jawabannya ${angkaBenar}`);
    break;
} else if (tebakanUser > angkaBenar) {
    alert(` kebanyakan dek \n ${nyawa - 1} kesempatan `);
} else if (tebakanUser < angkaBenar) {
    alert(` kurang dek, tambah lagi \n  ${nyawa - 1} kesempatan`);
}

if (nyawa == 1) {
    alert(`WAHH GAME OVER \n yang benar itu ${angkaBenar}`);
}
   
}