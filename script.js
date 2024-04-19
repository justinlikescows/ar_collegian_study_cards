const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const pledgeClass = document.getElementById("pledge-class");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
const image = document.getElementById("image"); // Add this line
const filterButton = document.getElementById("filter-btn");
let currentFilter = "All Classes";
const classes = ["All Classes", "Alpha Pi", "Alpha Omicron", "Alpha Xi", "Alpha Nu", "Alpha Mu", "Alpha Lambda", "Alpha Kappa"];
let editBool = false;

const brothersData = [
    { image: "julitza_alvarez.jpg", class: "Alpha Omicron" },
    { image: "andrew_ashman.jpg", class: "Alpha Pi" },
    { image: "david_ayala.jpg", class: "Alpha Lambda" },
    { image: "aryan_bajaria.jpg", class: "Alpha Nu" },
    { image: "abigail_bareiss.jpg", class: "Alpha Omicron" },
    { image: "kai_bussey.jpg", class: "Alpha Pi" },
    { image: "shashank_bypan.jpg", class: "Alpha Pi" },
    { image: "kevin_cao.jpg", class: "Alpha Kappa" },
    { image: "yoyo_cao.jpg", class: "Alpha Xi" },
    { image: "adora_chen.jpg", class: "Alpha Nu" },
    { image: "jorina_chen.jpg", class: "Alpha Nu" },
    { image: "ronica_cheng.jpg", class: "Alpha Nu" },
    { image: "allison_chu.jpg", class: "Alpha Omicron" },
    { image: "sean_devine.jpg", class: "Alpha Lambda" },
    { image: "andrew_doan.jpg", class: "Alpha Mu" },
    { image: "safah_faraz.jpg", class: "Alpha Xi" },
    { image: "jin_fukusumi.jpg", class: "Alpha Nu" },
    { image: "ayushi_gupta.jpg", class: "Alpha Pi" },
    { image: "yeseo_han.jpg", class: "Alpha Kappa" },
    { image: "jason_henkel.jpg", class: "Alpha Mu" },
    { image: "coca_ho.jpg", class: "Alpha Omicron" },
    { image: "devon_huang.jpg", class: "Alpha Pi" },
    { image: "forest_huang.jpg", class: "Alpha Mu" },
    { image: "diana_huynh.jpg", class: "Alpha Xi" },
    { image: "james_kent.jpg", class: "Alpha Pi" },
    { image: "brennan_kim.jpg", class: "Alpha Omicron" },
    { image: "haylie_lee.jpg", class: "Alpha Omicron" },
    { image: "jacob_lee.jpg", class: "Alpha Omicron" },
    { image: "juliana_lee.jpg", class: "Alpha Omicron" },
    { image: "nathan_lee.jpg", class: "Alpha Mu" },
    { image: "madeline_li.jpg", class: "Alpha Nu" },
    { image: "jessica_lin.jpg", class: "Alpha Omicron" },
    { image: "julia_lin.jpg", class: "Alpha Mu" },
    { image: "ishan_malik.jpg", class: "Alpha Omicron" },
    { image: "isaac_martinez.jpg", class: "Alpha Pi" },
    { image: "aadi_mehta.jpg", class: "Alpha Omicron" },
    { image: "mirsab_mirza.jpg", class: "Alpha Xi" },
    { image: "jake_moss.jpg", class: "Alpha Mu" },
    { image: "maryam_mussa.jpg", class: "Alpha Xi" },
    { image: "collin_na.jpg", class: "Alpha Omicron" },
    { image: "elaine_nguyen.jpg", class: "Alpha Pi" },
    { image: "david_pena.jpg", class: "Alpha Xi" },
    { image: "alex_pham.jpg", class: "Alpha Kappa" },
    { image: "lohit_potnuru.jpg", class: "Alpha Pi" },
    { image: "winnie_qi.jpg", class: "Alpha Mu" },
    { image: "melanie_sagun.jpg", class: "Alpha Omicron" },
    { image: "brendon_sato.jpg", class: "Alpha Pi" },
    { image: "caden_shaffer.jpg", class: "Alpha Pi" },
    { image: "nithin_senthil.jpg", class: "Alpha Omicron" },
    { image: "dylan_tanzil.jpg", class: "Alpha Lambda" },
    { image: "ai_toyama.jpg", class: "Alpha Xi" },
    { image: "haley_truong.jpg", class: "Alpha Nu" },
    { image: "jacob_won.jpg", class: "Alpha Xi" },
    { image: "brennen_wong.jpg", class: "Alpha Kappa" },
    { image: "jenny_wu.jpg", class: "Alpha Lambda" },
    { image: "evelyn_wu.jpg", class: "Alpha Nu" },
    { image: "tommy_wunsch.jpg", class: "Alpha Omicron" },
    { image: "maxwell_xu.jpg", class: "Alpha Kappa" }
];


   
const imageFolder = "./images/"; // Add this line

const images = brothersData.map((brother) => brother.image);

filterButton.addEventListener("click", () => {
    // Update the current filter
    let index = classes.indexOf(currentFilter);
    currentFilter = classes[(index + 1) % classes.length];
    filterButton.innerText = currentFilter;
  
    // Clear the current display
    const cardContainer = document.querySelector(".card-list-container");
    cardContainer.innerHTML = "";
  
    // Refresh the display
    images.forEach((pic) => {
      question.value = "Who is this?";
      answer.value = pic.replace("_", " ").replace(".jpg", "").toUpperCase();
      image.value = imageFolder + pic;
      pledgeClass.value = brothersData.find(brother => brother.image === pic).class;
      console.log(currentFilter);
      if (currentFilter === "All Classes" || pledgeClass.value === currentFilter) {
        viewlist();
      }
    });
  });

//Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  image.value = ""; // Add this line
  pledgeClass.value = "";
  addQuestionCard.classList.remove("hide");
});

//Hide Create flashcard Card
closeBtn.addEventListener(
  "click",
  (hideQuestion = () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
    if (editBool) {
      editBool = false;
      submitQuestion();
    }
  })
);

// Modify submit question function
cardButton.addEventListener(
    "click",
    (submitQuestion = () => {
      editBool = false;
      tempQuestion = question.value.trim();
      tempAnswer = answer.value.trim();
      tempImage = image.value.trim();
      tempPledgeClass = pledgeClass.value.trim(); // Add this line
      if (!tempQuestion || !tempAnswer || !tempImage || !tempPledgeClass) { // Modify this line
        errorMessage.classList.remove("hide");
      } else {
        container.classList.remove("hide");
        errorMessage.classList.add("hide");
        viewlist();
        question.value = "";
        answer.value = "";
        image.value = "";
        pledgeClass.value = ""; // Add this line
      }
    })
  );

//Card Generate
function viewlist() {
    var listCard = document.getElementsByClassName("card-list-container");
    var div = document.createElement("div");
    div.classList.add("card");
      //Question
      div.innerHTML += `
      <p class="question-div center">${question.value}</p>`; // Add 'center' class
    //Answer
    var displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answer-div", "hide");
    displayAnswer.innerText = answer.value;
    div.appendChild(displayAnswer); // Add this line
  
    // Class
    var displayClass = document.createElement("p");
    displayClass.classList.add("answer-div", "hide");
    displayClass.innerText = pledgeClass.value;
    div.appendChild(displayClass); // Add this line
  
    // Add image
    var displayImage = document.createElement("img");
    displayImage.src = image.value;
    displayImage.style.width = '200px';  
    displayImage.style.height = '300px'; 
    displayImage.classList.add("center"); 
    displayImage.style.border = '2px solid black'; 
    displayImage.style.boxShadow = '5px 5px 5px gray';
    displayImage.style.marginBottom = '20px'; // Add this line
    div.appendChild(displayImage);
  
    //Link to show/hide answer
    var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Add this line
    displayAnswer.classList.toggle("hide");
    displayClass.classList.toggle("hide"); // Add this line
  });

  div.appendChild(link);
  div.appendChild(displayAnswer);

  //Edit button
  let buttonsCon = document.createElement("div");
  buttonsCon.classList.add("buttons-con");
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
  });
  buttonsCon.appendChild(editButton);
  disableButtons(false);

  //Delete Button
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  buttonsCon.appendChild(deleteButton);

  div.appendChild(buttonsCon);
  listCard[0].appendChild(div);
  hideQuestion();
}

// Modify modifyElement function
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement.parentElement;
    let parentQuestion = parentDiv.querySelector(".question-div").innerText;
    let parentImage = parentDiv.querySelector("img").src;
    let parentClass = parentDiv.querySelectorAll(".answer-div")[1].innerText; // Corrected this line
    if (edit) {
      let parentAns = parentDiv.querySelectorAll(".answer-div")[0].innerText;
      answer.value = parentAns;
      question.value = parentQuestion;
      image.value = parentImage;
      pledgeClass.value = parentClass; // Add this line
      disableButtons(true);
    }
    parentDiv.remove();
};

//Disable edit and delete buttons
const disableButtons = (value) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = value;
  });
};

window.onload = () => {
    images.forEach((pic) => {
      question.value = "Who is this?";
      answer.value = pic.replace("_", " ").replace(".jpg", "").toUpperCase();
      image.value = imageFolder + pic;
      pledgeClass.value = brothersData.find(brother => brother.image === pic).class; // Add this line
      viewlist();
    });
  };
