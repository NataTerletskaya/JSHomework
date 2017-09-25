// Техническое задание:
/*
    Когда пользователь кликнет на кнопку Load Data,
    показать на странице Spinner
    а) когда данные пришли, запустить функцию, возвращающую промис,
    который будет ждать 5 секунд
    б) когда промис-таймаут прождет положенное время,
    убрать спиннер и вывести на страницу 
    данные, полученные в первом промисе.
    в) в 50-ти процентах случаем вместо данных на странице
    должнен показываться текст ошибки "Что-то пошло не так"
    г) повторный клик по кнопке Load Data очищает страницу и запускает
    процесс заново (начиная со Spinner'а).
*/

$(document).ready(() => {
    const btn = $('#button');
    const contentHolder = $('#contentHolder');
    const spinner = $('#spinner');

    btn.on('click', () => {
        if (btn.hasClass('disabled')) {
            return;
        }
        spinner.removeClass('hidden');
        btn.addClass('disabled');
        contentHolder.html('');
        loadData()
            .then(data => { 
                contentHolder.html(JSON.stringify(data, null, 2)); 
             })
            .catch(data => { contentHolder.html(data) })
            .then(() => { 
                spinner.addClass('hidden');
                btn.removeClass('disabled');
            });
    });

    function loadData() {
        return fetch('/data.json')
            .catch(res => console.error(res))
            .then(res => res.json())
            .then(data => {
                return createPromise(data);
            })
    };

    function createPromise(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let rand = Math.random();
                (rand >= 0.5) 
                ? resolve(data)
                : reject('<h2 class="text-danger">Something has terribly gone wrong!</h2> \\__(0_0)__/');
            }, 5000);
        });
    }


});