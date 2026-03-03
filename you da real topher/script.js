
const noPhrases = [
        "You sure?", 
        "You really2 sure?", 
        "Pikir-pikir lagi...", 
        "Jahat banget :(", 
        "Klik YES aja udah ❤️", 
        "Nyerah aja deh!"
    ];
    let noCount = 0;

    function moveNo() {
        const btnNo = document.getElementById('btn-no');
        const qText = document.getElementById('question-text');
        
        const minMove = 60; 
        const maxMove = 100; 

        let moveX = Math.random() * (maxMove - minMove) + minMove;
        let moveY = Math.random() * (maxMove - minMove) + minMove;

        if (Math.random() < 0.5) moveX *= -1;
        if (Math.random() < 0.5) moveY *= -1;

        btnNo.style.transform = `translate(${moveX}px, ${moveY}px)`;

        if (noCount < noPhrases.length) {
            qText.innerText = noPhrases[noCount];
            noCount++;
        } else {
            btnNo.style.transform = `translate(0px, 0px)`;
            qText.innerText = "Maukah kamu jadi kekasihku?";
            noCount = 0;
        }
    }
function answerYes() {
        // Cek apakah elemen ada di HTML
        const qText = document.getElementById('question-text');
        const btnGroup = document.querySelector('.btn-group');
        
        if(qText) qText.innerText = "Yayyy!!! ❤️";
        if(btnGroup) btnGroup.style.display = 'none';

        console.log("Tombol Yes Berhasil Diklik!"); // Cek di Inspect -> Console

        // Ledakan 120 Love
        for (let i = 0; i < 120; i++) {
            setTimeout(() => {
                createPopLove();
            }, i * 15);
        }
    }

    // 4. Fungsi Menciptakan Love Raksasa
    function createPopLove() {
        const love = document.createElement('img');
        love.src = 'lovepopt.png'; // Pastikan file ini ada di folder yang sama!
        love.className = 'love-pop';

        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        
        const size = Math.random() * 170 + 80 + 'px'; // Ukuran 80px - 250px
        
        love.style.position = 'fixed';
        love.style.left = x + 'px';
        love.style.top = y + 'px';
        love.style.width = size;
        love.style.zIndex = '9999';
        love.style.pointerEvents = 'none';

        document.body.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 1500);
    }


