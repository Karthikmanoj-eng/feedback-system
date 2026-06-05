const API = "http://localhost:5000"

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
        
        </div>
        `
    })

}
async function dltData() {
    await fetch(`${API}/deleteData`, { method: "DELETE" });
    loadData();
}

loadData()