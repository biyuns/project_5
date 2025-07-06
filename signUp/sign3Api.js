document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.querySelector('#userName');
    const stuNumInput = document.querySelector('#studentNum');
    const departInput = document.querySelector('#department');


    let gValue;

    const clickG = (event) => {
        gValue = event.target.value;
    }

    btnM.addEventListener('click', clickG);
    btnW.addEventListener('click', clickG);

    compBtn.addEventListener('click', async function () {
        const name = nameInput.value.trim();
        const gender = gValue;
        const studentNumber = stuNumInput.value.trim();
        const department = departInput.value.trim();

        try {
            const res = await fetch('/api/members/step2', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, gender, studentNumber, department })
            });
            const data = await res.json();

            if (!res.ok) {
                console.log(data);
            }

            if (res.ok) {
                window.location.href = 'signUp2.html';
            } else {
                console.log(data);
            }

        } catch (error) {
            console.log('error', error);
        }
    });
});