// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);
document.getElementById('loan-form1').addEventListener('submit', calculateResults);
document.getElementById('loan-form2').addEventListener('submit', calculateResults);
document.getElementById('loan-form3').addEventListener('submit', calculateResults);
document.getElementById('loan-form4').addEventListener('submit', calculateResults);
document.getElementById('loan-form5').addEventListener('submit', calculateResults);
// Calculate Results
function calculateResults(e){
    console.log('caculating...');
    // UI Vars
    const xn = document.getElementById('xn');
    const yn = document.getElementById('yn');
    const zn = document.getElementById('zn');
    const voe = document.getElementById('voe');

    const nob = document.getElementById('nob');
    const vosand = document.getElementById('vosand');
    const togranite = document.getElementById('togranite');

    const voc = document.getElementById('voc');
    const vos = document.getElementById('vos');
    const vog = document.getElementById('vog');
    
    const sos = document.getElementById('sos');
    const sog = document.getElementById('sog');

    //block
    const tol = document.getElementById('tol');
    const noc = document.getElementById('noc');
    const nob1 = document.getElementById('nob1');
    const nod = document.getElementById('nod');
    const now = document.getElementById('now');
    const tol1 = document.getElementById('tol1');
    const tob1 = document.getElementById('tob1');

    
    const uuu = Number(xn.value);
    const nnn = Number(yn.value);
    const ddd = Number(zn.value);

    const tMix = uuu + nnn + ddd;

   // const tMix = xn.value + yn.value + zn.value;
    console.log(tMix);
    const volBeam = (voe.value) / (tMix);

    console.log(volBeam);

    nob.value = (volBeam * xn.value) / 0.035;
    vosand.value = (volBeam * yn.value);
    togranite.value = (volBeam * zn.value * 1.68);

    
    sos.value = (volBeam * yn.value) / (vos.value);
    sog.value = (volBeam * zn.value) / (vog.value);

    // block 
    const nobl = (tol.value) / 0.45 * (noc.value);
    console.log(nobl);
    const nodoor = Number(nod.value) * 18.67;
    console.log(nodoor);
    const nowindow = Number(now.value) * 14.2;
    const nopenings = (Number(tol1.value) * Number(tob1.value)) / 0.10125;
    console.log(nopenings);
    const topenings = nodoor + nowindow + nopenings;
    console.log(topenings);

    

    if(nod.value == '' && now.value == '' && tol1.value == '' && tob1.value == ''){
        nob1.value = nobl
    }else {
        nob1.value = nobl - topenings;
    }


    //plastering
    const pxn = document.getElementById('pxn');
    const pvn = document.getElementById('pvn');
    const pvoe = document.getElementById('pvoe');
    const pvoc = document.getElementById('pvoc');
    const pvos = document.getElementById('pvos');
    const ppvos = document.getElementById('ppvos');
    const pnob = document.getElementById('pnob');
    const psos = document.getElementById('psos');
    const pptos = document.getElementById('pptos');

    const puuu = Number(pxn.value);
    const pnnn = Number(pvn.value);
    const ptMix = puuu + pnnn;
    const pvolBeam = (pvoe.value) / (ptMix);
    pnob.value = (pvolBeam * pxn.value) / 0.035;
    psos.value = (pvolBeam * pvn.value);
    pptos.value = (pvolBeam * pvn.value) / (ppvos.value);


    //roof
    const lofp = document.getElementById('lofp');
    const wofp = document.getElementById('wofp');
    const hor = document.getElementById('hor');
    const lorb = document.getElementById('lorb');
    const sopl = document.getElementById('sopl');
    const roh = document.getElementById('roh');
    const non = document.getElementById('non');
    const nowp = document.getElementById('nowp');
    const nofb = document.getElementById('nofb');
    const notb = document.getElementById('notb');
    const nost = document.getElementById('nost');
    const norft = document.getElementById('norft');
    const nopurlins = document.getElementById('nopurlins');
    const noking = document.getElementById('noking');
    
    //total length
    const tl = Number(lofp.value) + Number(roh.value) + Number(roh.value);
    const tw = Number(wofp.value) + Number(roh.value) + Number(roh.value);
    console.log(tl);

    //noggins
    const tl1 = tl / roh.value;
    const tw1 = tw / roh.value;
    const tl2 = tl * tw1;
    const tw2 = tw * tl1;
    const tt  = tl2 + tw2;

    non.value = tt / 3.6;

    //wallplate
    nowp.value = Number(lorb.value) / 3.6;

    //facial board
    const tp = tl + tl + tw + tw;
    nofb.value = tp / 3.6;

    //tie beam
    const toverhang = Number(roh.value) + Number(roh.value);
    const toh1 = (tl / toverhang) * Number(wofp.value);
    notb.value = toh1 / 3.6;
    console.log(notb.value);

    //strut
    nost.value = notb.value * 2

    //rafter
    const halftw = tw / 2;
    const rafslope = Math.sqrt((halftw * halftw) + (Number(hor.value) * Number(hor.value)));
    console.log(rafslope);
    norft.value = (((tl / toverhang) * rafslope) / 3.6);

    //purlins
    const tpur = (rafslope + rafslope) / sopl.value;
    console.log(tpur);
    nopurlins.value = (tl * tpur) / 3.6;

    //kingpost
    noking.value = (((tl / toverhang) * (hor.value)) / 3.6);
    
    e.preventDefault();
}