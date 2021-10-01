/* Код писал сам, без интернета */

var authStatus = "false";

window.onload = LoadAuthStatus;

function LoadAuthStatus() 
{
    if (localStorage['AuthStatus']) 
    {
        authStatus = localStorage['AuthStatus'];
    }
}

function ProfileButtonClick() 
{
    if (authStatus == "false") 
    {
        document.location.href = "login.html";
    }
    else if (authStatus == "true")
    {
        document.location.href = "profile.html";
    }
}

function AuthButtonClick() 
{
    if (document.getElementById('number-input').value != "" && document.getElementById('password-input').value != "") 
    {
        authStatus = "true";
        
        if (localStorage['AuthStatus']) 
        {
            localStorage['AuthStatus'] = authStatus;
            document.location.href = "profile.html";
        }
        else 
        {
            localStorage.setItem('AuthStatus', authStatus);
            document.location.href = "profile.html";
        }
    }
    else 
    {
        alert('Ошибка! Обнаружены пустые поля');
    }
}

function RegisterButtonClick() 
{
    if (document.getElementById('surname-register-input').value != "" && document.getElementById("lastname-register-input").value != "" && document.getElementById("doc-number-register-input").value != "" 
    && document.getElementById('phone-number-register-input').value != "" && document.getElementById("password-register-input").value != "" && document.getElementById("password-register-input2").value != "")
    {
        authStatus = "true";

        if (localStorage['AuthStatus']) 
        {
            localStorage['AuthStatus'] = authStatus;
            document.location.href = "profile.html";
        }
        else 
        {
            localStorage.setItem('AuthStatus', authStatus);
            document.location.href = "profile.html";
        }
    }
    else 
    {
        alert('Ошибка! Обнаружены пустые поля');
    }
}

function LeaveProfileButtonClick() 
{
    authStatus = "false";

    if (localStorage['AuthStatus']) 
    {
        localStorage['AuthStatus'] = authStatus;
        document.location.href = "login.html";
    }
    else 
    {
        localStorage.setItem('AuthStatus', authStatus);
        document.location.href = "login.html";
    }
}

function ProfileFlightInfoButtonClick() 
{
    alert('1. Код бронирования: 123456\nДата вылета: 30.09.2021\nВрема вылета: 17:55\nВремя прилёта: 03:00\nНазвание аэропорта вылета: Международный Аэропорт Омск Центральный имени Д.М.Карбышева\nНазвание аэропорта назначения: Шереметьево');
}

function FlightSearchButtonClick() 
{
    if (document.getElementById("flight-number-search-input").value == "" && document.getElementById("aircraft-name-search-input").value == "" && document.getElementById("flight-date-search-input").value == "" 
    && document.getElementById("flight-time1-search-input").value == "" && document.getElementById("flight-time2-search-input").value == "" && document.getElementById("flight-time3-search-input").value == "" 
    && document.getElementById("flight-price-search-input").value == "" && document.getElementById("flight-probability-search-input").value == "") 
    {
        alert('Ошибка! Хотя бы одно поле должно быть заполнено');
    }
    else 
    {
        document.getElementById('flight-search-result').style.visibility = "visible";
    }
}

function FlightBookingButtonClick() 
{
    if (document.getElementById("flight-number-booking-input").value == "" && document.getElementById("city-name-booking-input1").value == "" && document.getElementById("airport-name-booking-input1").value == ""
    && document.getElementById("flight-date-booking-input1").value == "" && document.getElementById("flight-time-booking-input1").value == "" && document.getElementById("city-name-booking-input2").value == "" 
    && document.getElementById("airport-name-booking-input2").value == "" && document.getElementById("flight-time-booking-input2").value == "" && document.getElementById("flight-price-booking-input").value == "" 
    && document.getElementById("flight-passenger-surname-input").value == "" && document.getElementById("flight-passenger-surname-input").value == "" && document.getElementById("flight-passenger-born-date-input").value == "" 
    && document.getElementById("flight-passenger-doc-number-input").value == "" && document.getElementById("flight-passenger-count-input").value == "") 
    {
        alert('Ошибка! Хотя бы одно поле должно быть заполнено');
    }
    else 
    {
        alert('Места успешно забранированы!');
    }
}