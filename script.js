let currentTab = "all";
const tabActive = ["bg-navy","border-navy", "text-white"];
const tabInActive = ["bg-transparent", "text-slate-700", "border-slate-200"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");


function switchTab(tab) {
    const tabs = ["all","interview","rejected"];
   currentTab=tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if (t === tab) {
        tabName.classList.remove(...tabInActive);
        tabName.classList.add(...tabActive);
        } else {
         tabName.classList.remove(...tabActive);
         tabName.classList.add(...tabInActive);
      }
        }

    const pages =[allContainer, interviewContainer, rejectedContainer];

    for (const section of pages) {
        section.classList.add("hidden");
    }

     if (tab === "all")  {
        allContainer.classList.remove("hidden");
      if (allContainer.children.length < 1) {        
         emptyState.classList.remove("hidden");
          }
        
    } else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
         if (interviewContainer.children.length < 1) {        
         emptyState.classList.remove("hidden");
         }
     } else {
        rejectedContainer.classList.remove("hidden");
         if (rejectedContainer.children.length < 1) {        
         emptyState.classList.remove("hidden");
         }
     }
     updateState();
    }   

// ---stat-update---//
const totalstat = document.getElementById("stat-total");
const interviewstat = document.getElementById("stat-interview");
const rejectedstat = document.getElementById("stat-rejected");
const availablestat = document.getElementById("available");



switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){
  const clickedElement = event.target;
  const card = clickedElement.closest(".card");
  const parent = card.parentNode;
  const status = card.querySelector(".status")
  

  if (clickedElement.classList.contains("interview")) {
    status.innerText = "Interview";
   interviewContainer.appendChild(card);
   
    }
  if (clickedElement.classList.contains("rejected")) {
    status.innerText = "Rejected";
   rejectedContainer.appendChild(card);
  
   
}
 if (clickedElement.classList.contains("delete")) {
    parent.removeChild(card);
    
 }
   updateState();
});

function updateState() {
      const counts = {
      all: allContainer.children.length,
      interview : interviewContainer.children.length,
      rejected: rejectedContainer.children.length,
   };
     
   totalstat.innerText = counts.all;
   interviewstat.innerText = counts.interview;
   rejectedstat.innerText = counts.rejected;

   availablestat.innerText = counts[currentTab];


   if(counts[currentTab] < 1) {
      emptyState.classList.remove("hidden");
   } else {
      emptyState.classList.add("hidden");
   }
}

updateState();
