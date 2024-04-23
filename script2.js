const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const pledgeClass = document.getElementById("pledge-class");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
// const image = document.getElementById("image"); // Add this line
const filterButton = document.getElementById("filter-btn");
let currentFilter = "All Classes";
const classes = ["All Classes", "Alpha Pi", "Alpha Omicron", "Alpha Xi", "Alpha Nu", "Alpha Mu", "Alpha Lambda", "Alpha Kappa"];
let editBool = false;

const questions = [
    {
        number: 1,
        question: "1. What are the five categories of the General Risk Management Policy?",
        answer: "Alcohol and Drugs; Statement on Hazing; Discrimination and Harassment; Chapter Houses and Meeting Facilities; Fire, Health, and Safety"
    },
    {
        number: 2,
        question: "2. Name six provisions, from any of the categories, of the Risk Management, Insurance and Conduct Policy.",
        answer: "Answers should come from any of the provisions listed on pages 41-49 of The Crown & Delta or the Risk Management, Insurance and Conduct Policy listed on pages 7-15 of the National Policy and Procedures Manual available online at https://www.deltasigmapi.org/docs/default-source/organizational/policy_procedure.pdf"
    },
    {
        number: 3,
        question: "3. To whom does the Individual Code of Conduct and General Risk Management Policy apply?",
        answer: "To organizational members defined as collegiate, alumni and faculty members; pledges; colony members; and employees."
    },
    {
        number: 4,
        question: "4. As defined in the Risk Management, Insurance & Conduct Policy, what constitutes a 'fraternity event'?",
        answer: "Any event, activity or situation sponsored, co-sponsored or endorsed by the chapter or colony, or any event a reasonable person would associate with the Fraternity."
    },
    {
        number: 5,
        question: "5. Of the four types of college fraternities, which one is Delta Sigma Pi?",
        answer: "Professional fraternity."
    },
    {
        number: 6,
        question: "6. Of which national interfraternity association is Delta Sigma Pi a prominent member?",
        answer: "Professional Fraternity Association."
    },
    {
        number: 7,
        question: "7. What is the purpose of Delta Sigma Pi as stated in the Preamble of our Bylaws?",
        answer: "Delta Sigma Pi is a professional fraternity organized to foster the study of business in universities; to encourage scholarship, social activity and the association of students for their mutual advancement by research and practice; to promote closer affiliation between the commercial world and students of commerce, and to further a higher standard of commercial ethics and culture and the civic and commercial welfare of the community."
    },
    {
        number: 8,
        question: "8. Give the date and place of the founding of Delta Sigma Pi.",
        answer: "November 7, 1907, at the School of Commerce, Accounts and Finance of New York University, New York, New York."
    },
    {
        number: 9,
        question: "9. Give the complete names of the four Founders of Delta Sigma Pi.",
        answer: "Alexander Frank Makay, Alfred Moysello, Henry Albert Tienken and Harold Valentine Jacobs."
    },
    {
        number: 10,
        question: "10. Name the Fraternity’s supreme governing body. Where and when does it next meet?",
        answer: "The Grand Chapter. It will meet next August 16-20, 2023 at Grand Chapter Congress in Houston, Texas."
    },
    {
        number: 11,
        question: "11. Name the current Grand President, Past Grand President, Vice President-Finance, National Collegians of the Year and Executive Director.",
        answer: "Current Grand President — Cory Stopka\nPast Grand President — Tricia Smith\nVice President-Finance Jodi Schoh\nNational Collegians of the Year — Brennen Feder (2021) and Christian Loeb (2022)\nExecutive Director — Jeremy Levine."
    },
    {
        number: 12,
        question: "12. What are the names of your province and region, and who are your Provincial Vice President and Regional Vice President?",
        answer: "Western Province, Pacific Coast Region\nProvincial Vice President — Erica Kolsrud\nRegional Vice President — Tim Beasley"
    },
    {
        number: 13,
        question: "13. What are the names of the active collegiate chapters, alumni chapters, and colonies in your region?",
        answer: "Active Collegiate Chapters:\nIota Pi (II1), San Diego State University\nLambda Pi (AIT), University of San Diego\nLambda Sigma (AX), California State University, Fullerton\nXi Pi (SI), University of Redlands\nOmicron Sigma (OX), University of California, San Diego\nPi Sigma (ITZ), University of California, Irvine\nRho Phi (P®), Concordia University, Irvine\nSigma Phi (£@), Chapman University\nAlumni Chapters:\nInland Empire Alumni Chapter (IEAC)\nOrange County Alumni Chapter (OCAC)"
    },
    {
        number: 14,
        question: "14. Who appoints a District Director? Name your District Director.",
        answer: "The Regional Vice President appoints the District Director; Cristina Gao."
    },
    {
        number: 15,
        question: "15. Name your Chapter Advisor. Who may serve as a Chapter Advisor and how is he or she elected?",
        answer: "Darren Endo. Chapter Advisor must be a member of the school's faculty or administration, elected by a majority vote of the chapter and reported to the Central Office."
    },
    {
        number: 16,
        question: "16. Name up to five Deltasigs who are members of your school’s faculty and/or staff as provided to you by your Vice President-Pledge Education.",
        answer: "Darren Endo, Andrew Gonzales, Seymour Schlosser, Grace McLaughlin, and Thomas Eppel."
    },
    {
        number: 17,
        question: "17. Write the correct abbreviation for a member of Delta Sigma Pi.",
        answer: "Deltasig."
    },
    {
        number: 18,
        question: "18. What is Delta Sigma Pi’s 'Central Office' and how is the Central Office staff different from the national Board of Directors?",
        answer: "The Central Office is the national administrative headquarters of Delta Sigma Pi for both the Fraternity and Leadership Foundation. The Executive Director is in charge of the Central Office and has a paid full time staff of directors and administrative personnel. The Board of Directors is a group of elected, unpaid volunteers who serve as the executive, legislative and judicial body of the Fraternity during the interim sessions between Grand Chapter Congresses. The Executive Director reports to the Board of Directors."
    },
    {
        number: 19,
        question: "19. Who established the Central Office and served as its director for 31 years?",
        answer: "H. G. 'Gig' Wright."
    },
    {
        number: 20,
        question: "20. In what city was the Central Office established? Where is it located today?",
        answer: "Chicago; 330 South Campus Avenue, Oxford, Ohio 45056."
    },
    {
        number: 21,
        question: "21. Name at least six services provided, and/or publications produced, by the Fraternity’s Central Office staff.",
        answer: "MAINTAINS membership records, mailing lists, the dsp.org website; ritualistic regalia, funds and archives; DISTRIBUTES certificates and cards of membership, supplies, jewelry and scholarship keys; CONDUCTS the Grand Chapter Congress, Chapter Management Program, visitation, public relations and expansion; PUBLISHES manuals, forms, The DELTASIG, official bulletins, national reports; and REPRESENTS the Fraternity nationally. (See the Pledge Manual for complete list of publications.)"
    },
    {
        number: 22,
        question: "22. What is the difference between a LEAD School and LEAD Provincial Conference and why should you participate in both?",
        answer: "LEAD Provincial Conferences are conducted annually for each province usually in February or March. Provincial Conferences usually run Friday to Sunday and include educational sessions, a banquet and a provincial council meeting. LEAD Schools are scheduled across the country usually in October and November. These events (usually Friday and Saturday) include numerous educational sessions. These meetings focus on providing direction, motivating leadership, providing educational material and encouraging involvement consistent with the purpose of this Fraternity. Each meeting strives to enhance the personal growth and development of the individual student or alumnus while providing networking opportunities to improve and grow our individual collegiate and alumni chapters."
    },
    {
        number: 23,
        question: "23. What is the Chapter Management Program? What are the three levels a chapter can achieve? What level is every chapter expected to achieve?",
        answer: "The Chapter Management Program (CMP), a program managed online through the Deltasig Hub, is the method of formal communication between collegiate chapters and the national Fraternity. The program is divided into three annual achievement levels for collegiate chapters. The levels represent basic operational requirements in recruitment, membership, finances, professional and service programs, and leadership development. These sections reflect the practice of essential business principles and operations expected of each chapter as part of our professional business Fraternity, as well as the professional and leadership development opportunities for each member. All chapters are expected to reach the first level, Accredited Chapter. If all requirements for the first level are completed, the chapter may seek to achieve the second level, Chapter of Recognition, and then the third, Chapter of Excellence. The additional optional requirements focus on alumni and faculty events, new member education, large scale events, and promotion of the national Fraternity. Chapters are recognized for the highest level they achieve."
    },
    {
        number: 24,
        question: "24. Explain the Educational and Leadership Consultant program in your own words.",
        answer: "One of the national services to collegiate chapters is a consultation visit from Central Office staff, The Educational and Leadership Consultants, and various other staff members, periodically visit collegiate chapters on campus or through electronic means. The visits are specifically formatted to benefit the individual chapter, but typically include business meetings, training, and discussions about all areas of chapter operations including recruiting, financial management, professional programming, service events, faculty and campus relations, alumni relations, motivation, teamwork, and more. Chapter operating documents and reference materials are also discussed, including reports in CMP, chapter bylaws and policies, pledge education program, financial records, membership records, and inventory of chapter assets. Consultation visits also include additional promotion and discussion about membership benefits, the Leadership Foundation, and leadership opportunities. Campus visits include public relations meetings with Business Deans and Student Activities staff. The counseling and advising throughout a consultation visit will leave the chapter members with improved knowledge about national and chapter operations and provide new ideas for activities and suggested resolutions to common challenges faced by student organizations. The result leads to a well rounded chapter with improved effectiveness in business operations and more dedicated, confident, and informed chapter members."
    },
    {
        number: 25,
        question: "25. To whom is the Delta Sigma Pi Scholarship Key awarded?",
        answer: "To the graduating senior (Deltasig or not) in commerce and business administration who ranks highest in his or her class."
    },
    {
        number: 26,
        question: "26. What is the National Fraternity’s website address?",
        answer: "www.dsp.org"
    },
    {
        number: 27,
        question: "27. In your own words, define the ideal member.",
        answer: "Pledges should use their own words, covering the information below.\n\nAn ideal member of Delta Sigma Pi is committed to living up to the Fraternity’s purpose and standards by being willing to give to the Fraternity, our members and our community. This member values the Fraternity and is a leader by showing dedication to scholarship, professionalism and service. An ideal member shows kindness towards others, is able to adapt to the wills of the majority and conducts oneself according to the highest standards of ethics. One understands that the more a person gives, the more that person will receive in return. An ideal member is not just involved, but is engaged by sharing information and ideas, cultivating relationships and being eager to grow personally and professionally."
    },
    {
        number: 28,
        question: "28. In your own words, define the ideal chapter.",
        answer: "Pledges should use their own words, covering the information below.\n\nThe ideal chapter supports the objectives of the Fraternity and works as a unit to provide value to its members and the surrounding community. Members of an ideal chapter are open-minded and willing to hear the viewpoints of others in order to make decisions for the greater good. Ideal chapters maintain open communication among members (collegiate and alumni) and with national leaders and Central Office staff. Such a chapter will dutifully sponsor programs and activities as expected by national standards and its members will act in a manner that reflects credit not only to oneself, but to the organization."
    },
    {
        number: 29,
        question: "29. Name several ways to support the Fraternity after graduation.",
        answer: "PARTICIPATING in an alumni chapter or in the various national leadership and professional development events; ATTENDING collegiate chapter events; SERVING on the national level as a Board of Directors member, Regional Vice President, District Director, or national committee member, ESTABLISHING a new collegiate or alumni chapter in your area; ASSISTING a Regional Vice President or other national officer; DONATING money or services to the Delta Sigma Pi Leadership Foundation and/or chapters."
    },
    {
        number: 30,
        question: "30. In your own words, what is the mission of the Delta Sigma Pi Leadership Foundation?",
        answer: "Pledges should use their own words, covering the information below.\n\nThe mission of the Leadership Foundation is to raise money, to provide scholarships and fellowships to members, and fund educational programs of the Fraternity."
    }
    // Add more questions if needed
];

// Additional definitions and questions can be added similarly
   
// const images = brothersData.map((brother) => brother.image);

// Add "Just Questions" to the questionRanges array
const questionRanges = ["All", "1-10", "11-20", "21-30", "31-35"];
let currentRange = questionRanges[0];

filterButton.addEventListener("click", () => {
    // Update the current filter
    let index = questionRanges.indexOf(currentRange);
    currentRange = questionRanges[(index + 1) % questionRanges.length];
    filterButton.innerText = currentRange;

    // Clear the current display
    const cardContainer = document.querySelector(".card-list-container");
    cardContainer.innerHTML = "";

    // Refresh the display
    questions.forEach((q, index) => {
        question.value =  q.question;
        answer.value = q.answer;

        if (currentRange === "All") {
            viewlist();
        } else if (currentRange === "Just Questions") {
            viewlistQuestions(index + 1, q.question); // Call a different function for "Just Questions"
        } else {
            let [start, end] = currentRange.split('-').map(Number);
            if (index + 1 >= start && index + 1 <= end) {
                viewlist();
            }
        }
    });
});


//Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    question.value = "";
    answer.value = "";
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
        tempPledgeClass = pledgeClass.value.trim();
        if (!tempQuestion || !tempAnswer || !tempPledgeClass) {
            errorMessage.classList.remove("hide");
        } else {
            container.classList.remove("hide");
            errorMessage.classList.add("hide");
            viewlist();
            question.value = "";
            answer.value = "";
            pledgeClass.value = "";
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
    let parentClass = parentDiv.querySelectorAll(".answer-div")[1].innerText; // Corrected this line
    if (edit) {
        let parentAns = parentDiv.querySelectorAll(".answer-div")[0].innerText;
        answer.value = parentAns;
        question.value = parentQuestion;
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
    questions.forEach((q) => {
        question.value = q.question;
        answer.value = q.answer;
        viewlist();
    });
};
