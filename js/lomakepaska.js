function validateForm() {
    if(document.forms["lomake"]["userid"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["password"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["name"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["country"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["postal"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["email"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["gender"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    } else if(document.forms["lomake"]["language"].value == "") {
        alert("Täytä kaikki pakolliset kentät!");
        return false;
    }

    if(document.forms["lomake"]["userid"].value.length < 6) {
        alert("Käyttäjä-ID on oltava vähintään 6 merkkiä!")
        return false;
    } else if(document.forms["lomake"]["postal"].value.length != 5) {
        alert("Postinumeron on oltava 5 merkkiä!");
        return false;
    } else if(!(document.forms["lomake"]["email"].value.includes("@"))) {
        alert("Sähköpostiosoitteen on oltava oikean muotoinen!")
        return false;
    }

    document.getElementById("lol").innerHTML = "Onnistui!"
    document.getElementById("*").innerHTML = ""
    document.getElementById("lomake").innerHTML = "";
    return false;
}