function toggleForm() {
    const form = document.querySelector(".inputForm");
    const button = document.getElementById("edit");
    
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block"; 
        button.innerText = "Cancel";
    } else {
        form.style.display = "none";
        button.innerText = "Edit";
    }
}
document.getElementById("edit").addEventListener("click", toggleForm);

function tampilkanData() {
    const data = JSON.parse(localStorage.getItem("profileData")) || {
        nama: "Muhammad Veka Syahputra",
        role: "FrontEnd Developer",
        availability: "Full Time",
        age: "20",
        lokasi: "Semarang",
        pengalaman: "1",
        email: "iniEmail@gmail.com"
    };

    document.querySelector(".nama").innerText = data.nama;
    document.querySelector(".role").innerText = data.role;
    document.querySelector(".dataInfo p:nth-child(1)").innerText = `: ${data.availability}`;
    document.querySelector(".dataInfo p:nth-child(2)").innerText = `: ${data.age}`;
    document.querySelector(".dataInfo p:nth-child(3)").innerText = `: ${data.lokasi}`;
    document.querySelector(".dataInfo p:nth-child(4)").innerText = `: ${data.pengalaman}`;
    document.querySelector(".dataInfo p:nth-child(5)").innerText = `: ${data.email}`;

    document.querySelector("input[name='Nama']").value = data.nama;
    document.querySelector("input[name='Role']").value = data.role;
    document.querySelector("input[name='Availability']").value = data.availability;
    document.querySelector("input[name='Age']").value = data.age;
    document.querySelector("input[name='Lokasi']").value = data.lokasi;
    document.querySelector("input[name='YOA']").value = data.pengalaman;
    document.querySelector("input[name='Email']").value = data.email;
}

function simpanData(e) {
    e.preventDefault(); 

    const data = {
        nama: document.querySelector("input[name='Nama']").value,
        role: document.querySelector("input[name='Role']").value,
        availability: document.querySelector("input[name='Availability']").value,
        age: document.querySelector("input[name='Age']").value,
        lokasi: document.querySelector("input[name='Lokasi']").value,
        pengalaman: document.querySelector("input[name='YOA']").value,
        email: document.querySelector("input[name='Email']").value,
    };

    localStorage.setItem("profileData", JSON.stringify(data));
    tampilkanData();
    toggleForm();
}


document.querySelector(".inputForm").addEventListener("submit", simpanData);
window.onload = tampilkanData;
