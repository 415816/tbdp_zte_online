const butt = document.querySelector('.generate');
const result = document.querySelector('.result');
const clos = document.querySelector('.clos');
let score;
document.querySelector('body').oncontextmenu = () => {
    return false
};
let q2;
let q3;
let q4;
let q5;
let q06;
let q7;
let q8;
let q9;
let q10;
let q11;
let q012;
let q212;
let q312;
let q412;
let q13;
let q14;
const qt = [
    [0.0000035, 0, 0.00000332, 0, 0.0000015, 0, 0.00000745, 0, 0.0000029, 0],
    [0.0000078, 0.0000025, 0.0000021, 0.0000042, 0, 0.0000083, 0.0000049, 0.0000036, 0, 0],
    [0.0000012, 0, 0.0000023, 0.0000034, 0.0000098, 0, 0.0000091, 0.0000025, 0.0000065, 0],
    [0, 0.00000035, 0.00000096, 0.00000033, 0, 0.00000018, 0, 0, 0.00000059, 0.00000034],
    [0, 0, 0.00000004, 0.00000015, 0.00000009, 0, 0.00000092, 0.00000086, 0.00000041, 0],
    [0.00000055, 0.00000065, 0, 0, 0.00000015, 0.00000025, 0, 0.00000032, 0, 0.00000039],
    [0, 0.00000032, 0, 0.00000015, 0, 0.00000067, 0, 0.00000081, 0, 0.00000004],
    [0.00000015, 0, 0.00000051, 0, 0.00000024, 0.00000042, 0.00000089, 0, 0.00000072, 0.00000027],
    [0, 0.0000021, 0.0000082, 0.0000029, 0, 0.0000063, 0, 0.000005, 0.0000083, 0],
    [0, 0.0000027, 0, 0.0000039, 0, 0.0000076, 0, 0.0000026, 0, 0.0000042]
];
const qts = [
    [0.099, 0.062, 0.025, 0.049, 0.067, 0.113, 0.072, 0.056, 0.009, 0.013],
    [0.057, 0.041, 0.058, 0.025, 0.151, 0.13, 0.018, 0.054, 0.023, 0.074],
    [0.039, 0.049, 0.05, 0.061, 0.018, 0.009, 0.128, 0.016, 0.098, 0.121],
    [0.122, 0.04, 0.141, 0.042, 0.073, 0.021, 0.073, 0.05, 0.121, 0.01],
    [0.016, 0.051, 0.144, 0.079, 0.002, 0.036, 0.08, 0.005, 0.103, 0.122],
    [0.117, 0.01, 0.072, 0.083, 0.023, 0.083, 0.016, 0.193, 0.003, 0.257],
    [0.074, 0.068, 0.027, 0.005, 0.04, 0.048, 0.081, 0.005, 0.047, 0.082],
    [0.024, 0.032, 0.04, 0.047, 0.027, 0.047, 0.019, 0.024, 0.067, 0.086],
    [0.046, 0.06, 0.013, 0.148, 0.006, 0.066, 0.086, 0.048, 0.025, 0.025],
    [0.008, 0.027, 0.014, 0.017, 0.028, 0.007, 0.012, 0.022, 0.022, 0.013]
];
const lambda1 = [6.71, 3.18, 1.16, 3.72, 4.25, 0.82, 4.74, 0.70, 8.40, 0.59];
const lambda2 = [0.0000246, 0.0000825, 0.0000279, 0.0000481, 0.0000149, 0.0000874, 0.0000287, 0.0000772, 0.0000976, 0.0000492];
const Tu = [0.028, 0.091, 0.036, 0.071, 0.032, 0.066, 0.084, 0.030, 0.016, 0.046];
const k = [0.0086, 0.0020, 0.0027, 0.0067, 0.0032, 0.0016, 0.0037, 0.0042, 0.0008, 0.0047];
const mu2 = [0.8, 1.5, 1.4, 2.0, 0.9, 0.6, 1.7, 1.2, 1.9, 1.3];
let j;
let i;
let m;
let z;
let c;
let P2;
let sigma1;
let tauAO;
let UrRisk;
let FIO = document.querySelector('.inp0');
let block = document.querySelector('.block');
let mess = document.querySelector('.mess');
let tex = document.querySelector('.tex');
let ball;
let passClos = document.querySelector('.passClos');
let passAnsw = document.querySelector('.passAnsw');
const btnCalcStart = document.querySelector('.calcStart');
const calcInp = document.querySelectorAll('.calcInp');
const calcSumm = document.querySelector('.calcSumm');
const calcSubtraction = document.querySelector('.calcSubtraction');
const calcMultipl = document.querySelector('.calcMultipl');
const calcDevide = document.querySelector('.calcDevide');
const calculator = document.querySelector('.calculator-container');
const showCalculator = document.querySelector('.showCalculator');
const showMU1 = document.querySelector('.showMU1');
const showMU2 = document.querySelector('.showMU2');
const MU1Container = document.querySelector('.MU1-container');
const MU2Container = document.querySelector('.MU2-container');

let time = 30 * 60;
let r = document.getElementById('r');
let tmp = time;


btnCalcStart.onclick = () => {
    calcSumm.innerHTML = parseFloat(
        (
            parseFloat(calcInp[0].value.replace(",", ".")) +
            parseFloat(calcInp[1].value.replace(",", "."))
        ).toFixed(12)
    );
    calcSubtraction.innerHTML = parseFloat(
        (
            parseFloat(calcInp[2].value.replace(",", ".")) -
            parseFloat(calcInp[3].value.replace(",", "."))
        ).toFixed(12)
    );
    calcMultipl.innerHTML = parseFloat(
        (
            parseFloat(calcInp[4].value.replace(",", ".")) *
            parseFloat(calcInp[5].value.replace(",", "."))
        ).toFixed(12)
    );
    calcDevide.innerHTML = parseFloat(
        (
            parseFloat(calcInp[6].value.replace(",", ".")) /
            parseFloat(calcInp[7].value.replace(",", "."))
        ).toFixed(12)
    );
};
showCalculator.onclick = () => {
    calculator.classList.toggle("non");
};
showMU1.onclick = () => {
    MU1Container.classList.toggle("non");
}
showMU2.onclick = () => {
    MU2Container.classList.toggle("non");
}
butt.onclick = () => {
    if (FIO.value != 0) {
        document.querySelector(".start").style.display = "none";
        formQuest();
    }
};
result.onclick = check;


FIO.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        document.querySelector(".start").style.display = "none";
        formQuest();
    }
})
//clos.onclick = () => {
//    if (passClos.value == 12) closMess();
//}

function formQuest() {
    setInterval(function () {
        let c = tmp--
        let m = (c / 60) >> 0
        let s = (c - m * 60) + '';
        r.textContent = 'Осталось ' + m + ':' + (s.length > 1 ? '' : '0') + s;
        if (m == 0 && s == 1) check();
        tmp != 0 || (tmp = time);
    }, 1000);
    q2 = ['не', ''];
    q3 = ['не', ''];
    q4 = ['нештатных неопасных', 'работоспособных', 'опасных', 'неработоспособных', 'нештатных'];
    q5 = ['опасного', 'штатного', 'защищенного', 'незащищенного', 'нештатного неопасного'];
    q06 = ['не', ''];
    q6 = ['поражающим', 'первичным поражающим', 'вторичным поражающим', 'дестабилизирующим'];
    q7 = ['небольшому повреждению технической системы', 'незначительным травмам', 'тяжелому повреждению системы', 'небольшим травмам', 'значительному ущербу для окружающей среды', 'полной потере технической системы', 'многочисленным пострадавшим'];
    q8 = ['имитационном моделировании', 'статистической информации', 'экспертной оценке', 'всей имеющейся информации', 'математическом моделировании'];
    q9 = ['перевод объекта инфраструктуры в защищенное состояние', 'факт присутствия помощника машиниста в кабине локомотива', 'изменение структуры технического средства', 'перераспределение функций между человеком и техническим средством', 'увеличение периодичности проведения технической учебы', 'увеличение периодичности технического обслуживания объектов инфраструктуры'];
    q10 = [`<i>Q</i><sub><i>t</i></sub>(<i>S<sub>ok</sub></i><sup>${Math.floor(Math.random() * (10 - 1)) + 1}</sup>)`, `<i>P</i><sub><i>t</i></sub>(<i>S<sub>ok</sub></i><sup>${Math.floor(Math.random() * (10 - 1)) + 1}</sup>)`];
    q11 = ['<i>P</i><sub>2</sub>', '&#964;<sub>AO</sub>', '&#963;<sub>1</sub>'];
    q012 = ['безотказности'];
    q112 = [`${(Math.random() * (0.9 - 0.1) + 0.1).toFixed(2)}*10<sup>-${Math.floor(Math.random() * (7 - 1)) + 1}</sup>`];
    q212 = [Math.floor(Math.random() * (4000000 - 50)) + 50];
    q312 = ['незначительный', 'серьезный', 'критический', 'катастрофический'];
    q412 = [`${(Math.random() * (0.9 - 0.1) + 0.1).toFixed(2)}*10<sup>-${Math.floor(Math.random() * (7 - 1)) + 1}</sup>`];
    q14 = ['происходит безопасная эксплуатация объекта инфраструктуры', 'возникает опасный отказ, но его устраняют до момента использования ОИ', 'возникает опасный отказ в процессе использования ОИ', 'возникает опасный отказ и его не успевают устранить', 'процесс движения поезда постоянно находился в опасном состоянии', 'произошел опасный отказ, но поражающие факторы не возникли'];

    let s20 = document.querySelector('#s20');
    s20.innerHTML = q2[Math.floor(Math.random() * q2.length)];
    let s30 = document.querySelector('#s30');
    s30.innerHTML = q3[Math.floor(Math.random() * q3.length)];
    let s40 = document.querySelector('#s40');
    s40.innerHTML = q4[Math.floor(Math.random() * q4.length)];
    let s50 = document.querySelector('#s50');
    s50.innerHTML = q5[Math.floor(Math.random() * q5.length)];
    let s60 = document.querySelector('#s60');
    s60.innerHTML = q06[Math.floor(Math.random() * q06.length)];
    let s61 = document.querySelector('#s61');
    s61.innerHTML = q6[Math.floor(Math.random() * q6.length)];
    let s70 = document.querySelector('#s70');
    s70.innerHTML = q7[Math.floor(Math.random() * q7.length)];
    let s80 = document.querySelector('#s80');
    s80.innerHTML = q8[Math.floor(Math.random() * q8.length)];
    let s90 = document.querySelector('#s90');
    s90.innerHTML = q9[Math.floor(Math.random() * q9.length)];
    let s10 = document.querySelector('#s100');
    s100.innerHTML = Math.floor(Math.random() * (9 - 0)) + 0;
    s100.innerHTML += Math.floor(Math.random() * (9 - 0)) + 0;
    let s101 = document.querySelector('#s101');
    s101.innerHTML = q10[Math.floor(Math.random() * q10.length)];
    /*let s11 = document.querySelector('#s110');
    s110.innerHTML = Math.floor(Math.random() * (9 - 0)) + 0;
    s110.innerHTML += Math.floor(Math.random() * (9 - 0)) + 0;
    let s111 = document.querySelector('#s111');
    s111.innerHTML = q11[Math.floor(Math.random() * q11.length)];*/
    let s120 = document.querySelector('#s120');
    s120.innerHTML = q012[Math.floor(Math.random() * q012.length)];
    let s121 = document.querySelector('#s121');
    s121.innerHTML = q112[Math.floor(Math.random() * q112.length)];
    let s122 = document.querySelector('#s122');
    s122.innerHTML = q212[Math.floor(Math.random() * q212.length)];
    let s123 = document.querySelector('#s123');
    s123.innerHTML = q312[Math.floor(Math.random() * q312.length)];
    let s124 = document.querySelector('#s124');
    s124.innerHTML = q412[Math.floor(Math.random() * q412.length)];
    let s131 = document.querySelector('#s131');
    s131.innerHTML = q14[Math.floor(Math.random() * q14.length)];
}

function check() {
    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelectorAll('.inp2');
    let inp3 = document.querySelectorAll('.inp3');
    let inp4 = document.querySelectorAll('.inp4');
    let inp5 = document.querySelectorAll('.inp5');
    let inp6 = document.querySelectorAll('.inp6');
    let inp7 = document.querySelector('.inp7');
    let inp8 = document.querySelectorAll('.inp8');
    let inp9 = document.querySelectorAll('.inp9');
    let inp10 = document.querySelector('.inp10');
    let inp11 = document.querySelector('.inp11');
    let inp12 = document.querySelector('.inp12');
    let inp13 = document.querySelector('.inp13');
    score = 0;
    if (inp1.value.toUpperCase() == 'КООРДИНАТА' || inp1.value.toUpperCase() == 'МЕСТОПОЛОЖЕНИЕ') {
        score += 1;
    }
    if (s20.innerHTML == 'не' && inp2[0].checked && inp2[1].checked == false && inp2[2].checked == false && inp2[3].checked == false) {
        score += 1;
    }
    if (s20.innerHTML == '' && inp2[0].checked == false && inp2[1].checked && inp2[2].checked && inp2[3].checked) {
        score += 1;
    }
    if (s30.innerHTML == 'не' && inp3[0].checked == false && inp3[1].checked && inp3[2].checked == false && inp3[3].checked && inp3[4].checked && inp3[5].checked == false && inp3[6].checked == false && inp3[7].checked) {
        score += 1;
    }
    if (s30.innerHTML == '' && inp3[0].checked && inp3[1].checked == false && inp3[2].checked && inp3[3].checked == false && inp3[4].checked == false && inp3[5].checked && inp3[6].checked && inp3[7].checked == false) {
        score += 1;
    }
    if (s40.innerHTML == 'нештатных неопасных' && inp4[0].checked == false && inp4[1].checked == false && inp4[2].checked && inp4[3].checked && inp4[4].checked == false) {
        score += 1;
    }
    if (s40.innerHTML == 'работоспособных' && inp4[0].checked == false && inp4[1].checked && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked == false) {
        score += 1;
    }
    if (s40.innerHTML == 'опасных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked == false) {
        score += 1;
    }
    if (s40.innerHTML == 'неработоспособных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked) {
        score += 1;
    }
    if (s40.innerHTML == 'нештатных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked) {
        score += 1;
    }
    if (s50.innerHTML == 'опасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked == false && inp5[4].checked == false) {
        score += 1;
    }
    if (s50.innerHTML == 'опасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked && inp5[4].checked == false) {
        score += 1;
    }
    if (s50.innerHTML == 'штатного' && inp5[0].checked && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked && inp5[4].checked == false) {
        score += 1;
    }
    if (s50.innerHTML == 'защищенного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked == false && inp5[4].checked == false) {
        score += 1;
    }
    if (s50.innerHTML == 'незащищенного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked && inp5[4].checked == false) {
        score += 1;
    }
    if (s50.innerHTML == 'нештатного неопасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked && inp5[4].checked == false) {
        score += 1;
    }
    if (s60.innerHTML == 'не' && s61.innerHTML == 'поражающим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked == false && inp6[14].checked == false) {
        score += 1;
    }
    if (s60.innerHTML == 'не' && s61.innerHTML == 'первичным поражающим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked && inp6[3].checked && inp6[4].checked && inp6[5].checked && inp6[6].checked && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked && inp6[14].checked) {
        score += 1;
    }
    if (s60.innerHTML == 'не' && s61.innerHTML == 'вторичным поражающим' && inp6[0].checked && inp6[1].checked && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked && inp6[13].checked == false && inp6[14].checked == false) {
        score += 1;
    }
    if (s60.innerHTML == 'не' && s61.innerHTML == 'дестабилизирующим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked && inp6[14].checked) {
        score += 1;
    }
    if (s60.innerHTML == '' && s61.innerHTML == 'поражающим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked && inp6[14].checked) {
        score += 1;
    }
    if (s60.innerHTML == '' && s61.innerHTML == 'первичным поражающим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked == false && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked == false && inp6[14].checked == false) {
        score += 1;
    }
    if (s60.innerHTML == '' && s61.innerHTML == 'вторичным поражающим' && inp6[0].checked == false && inp6[1].checked == false && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked == false && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked == false && inp6[13].checked && inp6[14].checked) {
        score += 1;
    }
    if (s60.innerHTML == '' && s61.innerHTML == 'дестабилизирующим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked == false && inp6[14].checked == false) {
        score += 1;
    }
    if ((s70.innerHTML == 'небольшому повреждению технической системы') && ((inp7.value.toUpperCase() == 'НЕЗНАЧИТЕЛЬНЫЙ'))) {
        score += 2;
    }
    if ((s70.innerHTML == 'незначительным травмам') && ((inp7.value.toUpperCase() == 'НЕЗНАЧИТЕЛЬНЫЙ'))) {
        score += 2;
    }
    if ((s70.innerHTML == 'тяжелому повреждению системы') && ((inp7.value.toUpperCase() == 'НЕСУЩЕСТВЕННЫЙ'))) {
        score += 2;
    }
    if ((s70.innerHTML == 'небольшим травмам') && ((inp7.value.toUpperCase() == 'НЕСУЩЕСТВЕННЫЙ'))) {
        score += 2;
    }
    if ((s70.innerHTML == 'значительному ущербу для окружающей среды') && (inp7.value.toUpperCase() == ('КРИТИЧЕСКИЙ'))) {
        score += 2;
    }
    if ((s70.innerHTML == 'полной потере технической системы') && ((inp7.value.toUpperCase() == 'КРИТИЧЕСКИЙ'))) {
        score += 2;
    }
    if ((s70.innerHTML == 'многочисленным пострадавшим') && ((inp7.value.toUpperCase() == 'КАТАСТРОФИЧЕСКИЙ'))) {
        score += 2;
    }
    if (s80.innerHTML == 'имитационном моделировании' && inp8[0].checked && inp8[1].checked == false && inp8[2].checked) {
        score += 1;
    }
    if (s80.innerHTML == 'статистической информации' && inp8[0].checked == false && inp8[1].checked && inp8[2].checked) {
        score += 1;
    }
    if (s80.innerHTML == 'экспертной оценке' && inp8[0].checked && inp8[1].checked == false && inp8[2].checked) {
        score += 1;
    }
    if (s80.innerHTML == 'всей имеющейся информации' && inp8[0].checked == false && inp8[1].checked == false && inp8[2].checked) {
        score += 1;
    }
    if (s80.innerHTML == 'математическом моделировании' && inp8[0].checked && inp8[1].checked == false && inp8[2].checked) {
        score += 1;
    }
    if (s90.innerHTML == 'перевод объекта инфраструктуры в защищенное состояние' && inp9[0].checked && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {
        score += 1;
    }
    if (s90.innerHTML == 'факт присутствия помощника машиниста в кабине локомотива' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked && inp9[4].checked == false && inp9[5].checked == false) {
        score += 1;
    }
    if (s90.innerHTML == 'изменение структуры технического средства' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {
        score += 1;
    }
    if (s90.innerHTML == 'перераспределение функций между человеком и техническим средством' && inp9[0].checked == false && inp9[1].checked && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {
        score += 1;
    }
    if (s90.innerHTML == 'увеличение периодичности проведения технической учебы' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked) {
        score += 1;
    }
    if (s90.innerHTML == 'увеличение периодичности технического обслуживания объектов инфраструктуры' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked && inp9[5].checked == false) {
        score += 1;
    }
    j = s100.innerHTML[0];
    i = s100.innerHTML[1];
    m = s101.innerHTML[54] - 1;
    if (parseFloat(inp10.value.replace(',', '.')).toFixed(9) == (qts[j][m] * qt[i][m]).toFixed(9) && s101.innerHTML[3] == "Q") {
        score += 3;
    }
    if (+inp10.value.replace(',', '.') == (1 - (qts[j][m] * qt[i][m]).toFixed(9)) && s101.innerHTML[3] == "P") {
        score += 3;
    }
    /*z = s110.innerHTML[0];
    c = s110.innerHTML[1];
    P2 = (lambda2[z] / (lambda2[z] + mu2[z])).toFixed(6);
    sigma1 = ((lambda1[z] / (1 / Tu[c])) + (lambda2[z] / mu2[z])).toFixed(6);
    tauAO = ((Tu[c] * (k[c] / mu2[z])) / (Tu[c] + (k[c] / mu2[z]))).toFixed(6);
    if (s111.innerHTML[6] == '1' && inp11.value.replace(',', '.') == sigma1) {
        score += 3;
    }
    if (s111.innerHTML[6] == 'i' && inp11.value.replace(',', '.') == P2) {
        score += 3;
    }
    if (s111.innerHTML[6] == 'A' && inp11.value.replace(',', '.') == tauAO) {
        score += 3;
    }*/
    UrRisk = '';
    if (s120.innerHTML == 'безопасности') {
        if (+s121.innerHTML[13] >= 7) {
            UrRisk += 'М';
        } else if (+s121.innerHTML[13] >= 5) {
            UrRisk += 'К';
        } else if (+s121.innerHTML[13] >= 3) {
            UrRisk += 'Р';
        } else if (+s121.innerHTML[13] >= 1) {
            UrRisk += 'С';
        } else if (+s121.innerHTML[13] >= 0) {
            UrRisk += 'В';
        } else if (+s121.innerHTML[13] <= 1) {
            UrRisk += 'Ч';
        }
        if (s123.innerHTML == 'незначительный') {
            UrRisk += 1;
        }
        if (s123.innerHTML == 'серьезный') {
            UrRisk += 2;
        }
        if (s123.innerHTML == 'критический') {
            UrRisk += 3;
        }
        if (s123.innerHTML == 'катастрофический') {
            UrRisk += 4;
        }
    }
    if (s120.innerHTML == 'безотказности') {
        if (+s124.innerHTML[13] >= 7) {
            UrRisk += 'М';
        } else if (+s124.innerHTML[13] >= 5) {
            UrRisk += 'К';
        } else if (+s124.innerHTML[13] >= 3) {
            UrRisk += 'Р';
        } else if (+s124.innerHTML[13] >= 1) {
            UrRisk += 'С';
        } else if (+s124.innerHTML[13] >= 0) {
            UrRisk += 'В';
        } else if (+s124.innerHTML[13] <= 1) {
            UrRisk += 'Ч';
        }
        if (s122.innerHTML < 50000) {
            UrRisk += 1;
        } else if (s122.innerHTML < 200000) {
            UrRisk += 2;
        } else if (s122.innerHTML < 4000000) {
            UrRisk += 3;
        } else if (s122.innerHTML > 4000000) {
            UrRisk += 4;
        }
    }
    if (inp12.value.toUpperCase() == UrRisk) {
        score += 2;
    }
    if ((inp13.value.toUpperCase() == 'А') && s131.innerHTML == 'происходит безопасная эксплуатация объекта инфраструктуры') {
        score += 3;
    }
    if ((inp13.value.toUpperCase() == 'Г') && s131.innerHTML == 'возникает опасный отказ, но его устраняют до момента использования ОИ') {
        score += 3;
    }
    if ((inp13.value.toUpperCase() == 'В') && s131.innerHTML == 'возникает опасный отказ в процессе использования ОИ') {
        score += 3;
    }
    if ((inp13.value.toUpperCase() == 'Б' || inp13.value.toUpperCase() == 'Д') && s131.innerHTML == 'возникает опасный отказ и его не успевают устранить') {
        score += 3;
    }
    if ((inp13.value.toUpperCase() == 'Д') && s131.innerHTML == 'процесс движения поезда постоянно находился в опасном состоянии') {
        score += 3;
    }
    if ((inp13.value.toUpperCase() == 'Г') && s131.innerHTML == 'произошел опасный отказ, но поражающие факторы не возникли') {
        score += 3;
    }
    if (score > 18) {
        ball = '"отлично"! Оценка может быть выставлена в ведомость и зачетную книжку лишь при сданных контрольных работах (получено сообщение "к защите")';
    } else if (score > 14) {
        ball = '"хорошо". Оценка может быть выставлена в ведомость и зачетную книжку лишь при сданных контрольных работах (получено сообщение "к защите")';
    } else if (score >= 6) {
        ball = '"удовлетворительно". Оценка может быть выставлена в ведомость и зачетную книжку лишь при сданных контрольных работах (получено сообщение "к защите")';
    } else {
        ball = '"неудовлетворительно". По поводу пересдачи уточняйте отдельно в MS Teams';
    }
    tex.innerHTML = FIO.value + ', Вы набрали ' + score + ' балл(ов)' + '<br>' + '<br>' + 'Оценка по дисциплине ТБДП: ' + ball;
    block.style.display = 'block';
  
    if (score >= 6) {
        block.style.background = "rgba(33, 189, 1, 0.98)";
    } else {
        block.style.background = "rgba(196, 0, 0, 0.98)";
    }
  
  
  
  
    $(function() {
            let request = {
                'FIO': $(FIO).val(),
                'score': score,
                'ball': ball
            }
            $.post('/api.php', request, function (response) {
                if (response != '1') { alert('Что-то пошло не так...');}
            });
            return false;
        });
/*
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api.php', true);
    let request = {
        'FIO': FIO.value,
        'score': score,
        'ball': ball
    }
    xhr.send([request]);

    console.log(score);
*/
}

function closMess() {
    passClos.value = '';
    block.style.display = 'none';
}