let btn = document.querySelector('.btn');
let day1 = document.querySelector('.day1');
let day2 = document.querySelector('.day2');
let day3 = document.querySelector('.day3');
let day4 = document.querySelector('.day4');
let day5 = document.querySelector('.day5');
let co = document.querySelectorAll('.co');
let input = document.querySelector('#city-input');
setInterval(function () {
    let time = moment().format('MM[/]DD[/]YYYY  HH:mm:ss')
    document.querySelector('.time').textContent = time;
}, 1000)


function weather() {
    function getApi() {
        let city = document.querySelector('#city-input').value;
        console.log(city)
        let site = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fb152202877d776f639c646cd62ce848`;

        fetch(site)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (data) {

                console.log(data);
                document.querySelector('.city').textContent = data.name + ' : ';
                document.querySelector('.description').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
                document.querySelector('.temps').textContent = data.main.temp + ' °F';
                document.querySelector('.winds').textContent = data.wind.speed + ' mph';
                document.querySelector('.humiditys').textContent = data.main.humidity;
            })
        localStorage.setItem('city', city);
    }
    getApi()


    function getDaily() {
        let city = document.querySelector('#city-input').value;
        let siteD = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&exclude=hourly&appid=fb152202877d776f639c646cd62ce848`
        fetch(siteD)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                day1.textContent = moment().add(1, 'day').format('MM[/]DD[/]YYYY')
                document.querySelector('.description1').setAttribute('src', `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`)
                document.querySelector('.temps1').textContent = data.list[10].main.temp + ' °F';
                document.querySelector('.winds1').textContent = data.list[10].wind.speed + ' mph';
                document.querySelector('.humiditys1').textContent = data.list[10].main.humidity;
                day2.textContent = moment().add(2, 'day').format('MM[/]DD[/]YYYY')
                document.querySelector('.description2').setAttribute('src', `https://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`)
                document.querySelector('.temps2').textContent = data.list[19].main.temp + ' °F';
                document.querySelector('.winds2').textContent = data.list[19].wind.speed + ' mph';
                document.querySelector('.humiditys2').textContent = data.list[19].main.humidity;
                day3.textContent = moment().add(3, 'day').format('MM[/]DD[/]YYYY')
                document.querySelector('.description3').setAttribute('src', `https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`)
                document.querySelector('.temps3').textContent = data.list[22].main.temp + ' °F';
                document.querySelector('.winds3').textContent = data.list[22].wind.speed + ' mph';
                document.querySelector('.humiditys3').textContent = data.list[22].main.humidity;
                day4.textContent = moment().add(4, 'day').format('MM[/]DD[/]YYYY')
                document.querySelector('.description4').setAttribute('src', `https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`)
                document.querySelector('.temps4').textContent = data.list[31].main.temp + ' °F';
                document.querySelector('.winds4').textContent = data.list[31].wind.speed + ' mph';
                document.querySelector('.humiditys4').textContent = data.list[31].main.humidity;
                day5.textContent = moment().add(5, 'day').format('MM[/]DD[/]YYYY')
                document.querySelector('.description5').setAttribute('src', `https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}@2x.png`)
                document.querySelector('.temps5').textContent = data.list[38].main.temp + ' °F';
                document.querySelector('.winds5').textContent = data.list[38].wind.speed + ' mph';
                document.querySelector('.humiditys5').textContent = data.list[38].main.humidity;

            })
        localStorage.setItem('city', city);
    }
    getDaily()
}

let arr = moment().toArray();
console.log(arr);
for (let i = 0; i < co.length; i++) {
    let element = co[i];

    if (arr[3] >= 17 ||arr[3] <= 7) {
        element.style.backgroundColor = '#536162';
        element.style.color = '#fff';
    } else if ( arr[3] > 7) {
        element.style.backgroundColor = '#FFEFBC';
       
    }
}
document.querySelector('#city-input').value = localStorage.getItem('city')
input.addEventListener('keydown', function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        weather()
    }else{
        btn.addEventListener('click',weather)
    }
})


window.onload = weather;