const API = "http://localhost:5000"

const themeToggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark-mode");

themeToggleBtn.innerText = "☀️ Light Mode";

}

themeToggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

themeToggleBtn.innerText = "☀️ Light Mode";

localStorage.setItem("theme", "dark");

} else {

themeToggleBtn.innerText = "🌙 Dark Mode";

localStorage.setItem("theme", "light");

}

});


async function addData(){
   const name=document.getElementById("name").value
   const feedback = document.getElementById("feedback").value

    await fetch (`${API}/addData`,{

        method : "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body:JSON.stringify({
            name,
            feedback

        })
    })
    loadData();
}


async function loadData(){
    const response = await fetch(`${API}/feedback`)
    const feedbacks = await response.json()

    const FeedList = document.getElementById("FeedList")
    if (feedbacks.length === 0) {
        FeedList.innerHTML =
            '<p id="emptyMessage">No feedback yet. Be the first to leave a review!</p>';
        return;
    }


    FeedList.innerHTML = ""

    feedbacks.forEach((student)=>{
        FeedList.innerHTML += `
        
        <div class = "review" >
            <p>${student.feedback}</p>
            <h4>${student.name}</h4>
            <button type="button" onclick="dltData('${student._id}')" class="dlt">Delete</button>
        
        </div>
        `
    })

}
async function dltData(id) {
    await fetch(`${API}/deleteData/${id}`, { method: "DELETE" });
    loadData();
}

loadData()