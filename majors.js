const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const pledgeClass = document.getElementById("pledge-class");
const year = document.getElementById("year");
const major = document.getElementById("major");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
const image = document.getElementById("image"); // Add this line
const filterButton = document.getElementById("filter-btn");
let currentFilter = "All Majors";
const uniqueMajors = [
    "All Majors",
    "Business Administration",
    "Economics",
    "Management",
    "Digital Information Systems",
    "Computer Science",
    "Informatics (HCI)",
    "Informatics",
    "Health Informatics",
    "Psychology",
    "Sociology",
    "Business Information Management",
    "Classical Civilization",
    "Philosophy",
    "Anthropology",
    "International Studies",
    "Film and Media Studies",
    "Statistics",
    "Digital Arts",
    "Information and Computer Science",
    "Mechanical Engineering",
    "Social Policy & Public Service",
    "Software Engineering",
    "Quantitative Economics"
];
let editBool = false;

const brothersData = [
  {
    "name": "Julitza Alvarez",
    "year": "Senior",
    "majors": ["Business Administration"],
    "hometown": "Brawley, CA",
    class: "Alpha Omicron",
    image: "julitza_alvarez.jpg",
    "industry_interests": ["Communications", "Advocacy"],
    "recent_position": "Communications and Advocacy Intern @ Labor Council for Latin American Advancement",
    "campus_involvements": ["Sigma Pi Alpha", "CHC"],
    "family": "Chang-McGrath"
  },
  {
    "name": "Andrew Ashman",
    "year": "Freshman",
    "majors": ["Business Administration"],
    "hometown": "San Juan Capistrano, CA",
    class: "Alpha Pi",
    image: "andrew_ashman.jpg",
    "industry_interests": ["Consulting", "Asset Management"],
    "recent_position": "Operations & Finance Analyst @ Nouri",
    "campus_involvements": ["UFA", "LEADS"],
    "family": "Huang-Merchant"
  }
  ,
  {
    "name": "David Ayala",
    "year": "Senior",
    "majors": ["Economics", "Management"],
    "hometown": "Baldwin Park, CA",
    class: "Alpha Lambda",
    image: "david_ayala.jpg",
    "industry_interests": ["Brand Marketing"],
    "recent_position": "Marketing & Analytics Intern @ Niagara Bottling",
    "campus_involvements": ["Latino Business Student Association", "Merage Financial Service - Student Assistant", "Sigma Chi Fraternity", "UCI Athletics"],
    "family": "Wang-Zhu"
  }
  ,
  {
    "name": "Abigail Bareiss",
    "year": "Junior",
    "majors": ["Computer Science"],
    "hometown": "San Ramon, CA",
    class: "Alpha Omicron",
    image: "abigail_bareiss.jpg",
    "industry_interests": ["Software Engineering"],
    "recent_position": "Software Developer Intern @ Darwins",
    "campus_involvements": ["Product Association", "Hiking Club at UCI"],
    "family": "Su-Hung-Green"
  }
  ,
  {
    "name": "Kai Bussey",
    "year": "Freshman",
    "majors": ["Economics"],
    "hometown": "Palo Alto, CA",
    class: "Alpha Pi",
    image: "kai_bussey.jpg",
    "industry_interests": ["Finance", "Private Equity", "Banking"],
    "recent_position": "N/A",
    "campus_involvements": ["UBA"],
    "family": "Chen-Ho"
  }
  ,
    {
      "name": "Kevin Cao",
      "year": "Senior",
      "majors": ["Business Information Management"],
      "hometown": "San Gabriel, CA",
      class: "Alpha Kappa",
      image: "kevin_cao.jpg",
      "industry_interests": ["Software Engineering"],
      "recent_position": "Vice President of Technology @ MUSA",
      "campus_involvements": ["ASUCI", "MUSA", "SCNO"],
      "family": "Chang-McGrath"
    }
    ,
    {
      "name": "Yoyo Cao",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Shanghai, China",
      class: "Alpha Xi",
      image: "yoyo_cao.jpg",
      "industry_interests": ["Investment Banking", "Consulting"],
      "recent_position": "Vice President of Finance @ Delta Sigma Pi",
      "campus_involvements": ["UFA", "SoF"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Adora Chen",
      "year": "Junior",
      "majors": ["Business Administration", "Digital Arts"],
      "hometown": "Los Gatos, CA",
      class: "Alpha Nu",
      image: "adora_chen.jpg",
      "industry_interests": ["Marketing", "UI/UX"],
      "recent_position": "Sales Intern @ TikTok",
      "campus_involvements": ["MUSA", "Marketing Association", "Art History Undergraduate Association", "Model UN", "KUCI 88.9 FM"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Ronica Cheng",
      "year": "Junior",
      "majors": ["Business Economics", "Digital Information Systems"],
      "hometown": "Irvine, CA",
      class: "Alpha Nu",
      "industry_interests": ["Finance", "Investment Banking"],
      "recent_position": "Finance Leadership Development Program @ Thermo Fisher Scientific, Student Assistant for MBA Recruitment and Administration @ The Paul Merage School of Business",
      "campus_involvements": ["UBA", "CA"],
      image: "ronica_cheng.jpg",
      "family": "Lough-Yu"
    },
    {
      "name": "Allison Chu",
      "year": "Junior",
      "majors": ["Business Information Management", "Psychology"],
      "hometown": "Anaheim Hills, CA",
      class: "Alpha Omicron",
      image: "allison_chu.jpg",
      "industry_interests": ["UI/UX design", "Product Design", "Product Management"],
      "recent_position": "Intern @ BCA Watson Rice LLP",
      "campus_involvements": ["Alpha Phi", "MAISS", "Kaba Modern"],
      "family": "Chang-McGrath"
    }
    ,
    {
      "name": "Sean Devine",
      "year": "Senior",
      "majors": ["Computer Science"],
      "hometown": "Koenigstein im Taunus, Germany",
      class: "Alpha Lambda",
      image: "sean_devine.jpg",
      "industry_interests": ["Software Engineering", "Finance"],
      "recent_position": "Full Stack Software Engineering Intern @ Cubic Transportation Systems",
      "campus_involvements": ["Association for Computing Machinery"],
      "family": "Chew-Mark"
    }
    ,
    {
      "name": "Andrew Doan",
      "year": "Junior",
      "majors": ["Informatics", "Sociology"],
      "hometown": "Westminster, CA",
      class: "Alpha Mu",
      image: "andrew_doan.jpg",
      "industry_interests": ["Product Design", "Product Management"],
      "recent_position": "Product Design Intern @ Anduril",
      "campus_involvements": ["Commit the Change", "Product Association"],
      "family": "Zhang-Feng"
    }
    ,
    {
      "name": "Safah Faraz",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Irvine, CA",
      class: "Alpha Xi",
      image: "safah_faraz.jpg",
      "industry_interests": ["Marketing", "Finance"],
      "recent_position": "Representative @ MUSA",
      "campus_involvements": ["MUSA"]
    }
    ,
    {
      "name": "Jin Fukusumi",
      "year": "Junior",
      "majors": ["Business Administration", "Philosophy"],
      "hometown": "Hyogo, Japan",
      class: "Alpha Nu",
      image: "jin_fukusumi.jpg",
      "industry_interests": ["Consulting", "Accounting"],
      "recent_position": "N/A",
      "campus_involvements": ["MUSA Representative", "Powerlifting @ UCI"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Ayushi Gupta",
      "year": "Sophomore",
      "majors": ["Business Administration", "Information and Computer Science"],
      "hometown": "Ladera Ranch, CA",
      class: "Alpha Pi",
      image: "ayushi_gupta.jpg",
      "industry_interests": ["Finance", "Tech"],
      "recent_position": "Undergraduate Student Assistant @ Merage",
      "campus_involvements": ["N/A"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Jason Henkel",
      "year": "Junior",
      "majors": ["Business Administration"],
      "hometown": "Davis, CA",
      class: "Alpha Mu",
      "industry_interests": ["Entrepreneurship"],
      "recent_position": "N/A",
      "campus_involvements": "N/A",
      image: "jason_henkel.jpg",
      "family": "Zhang-Feng"
    },
    {
      "name": "Coca Ho",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Irvine, CA",
      class: "Alpha Omicron",
      "industry_interests": ["Consulting", "Accounting"],
      "recent_position": "N/A",
      "campus_involvements": ["Pi Beta Phi", "Club Tennis"],
      image: "coca_ho.jpg",
      "family": "Su-Hung-Green"
    },
    {
      "name": "Devon Huang",
      "year": "Sophomore",
      "majors": ["Business Administration", "Digital Information Systems"],
      "hometown": "Irvine, CA",
      class: "Alpha Pi",
      image: "devon_huang.jpg",
      "industry_interests": ["Wealth Management"],
      "recent_position": "N/A",
      "campus_involvements": ["N/A"],
      "family": "Chew-Mark"
    }
    ,
    {
      "name": "Forest Huang",
      "year": "Junior",
      "majors": ["Business Administration", "Information & Computer Science"],
      "hometown": "Basking Ridge, NJ",
      class: "Alpha Mu",
      image: "forest_huang.jpg",
      "industry_interests": ["Consulting", "Product Management"],
      "recent_position": "Program Management Intern @ Duolingo",
      "campus_involvements": ["180 Degrees Consulting", "Product Association", "UCI Esports"],
      "family": "Chew-Mark"
    }
    ,
    {
      "name": "Diana Huynh",
      "year": "Junior",
      "majors": ["Informatics"],
      "hometown": "Laguna Hills, CA",
      class: "Alpha Xi",
      "industry_interests": ["Data Analytics", "Information Systems", "Digital Marketing"],
      "recent_position": "Data Analytics Intern @ General Atomics Aeronautical Systems, Inc.",
      "campus_involvements": ["UCI Women's Club Soccer", "Sports Business Association"],
      image: "diana_huynh.jpg",
      "family": "Chen-Ho"
    },
    {
      "name": "James Kent",
      "year": "Sophomore",
      "majors": ["Economics", "Management"],
      "hometown": "Santa Clarita, CA",
      class: "Alpha Pi",
      image: "james_kent.jpg",
      "industry_interests": ["Finance", "Consulting"],
      "recent_position": "N/A",
      "campus_involvements": ["UBA"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Brennan Kim",
      "year": "Junior",
      "majors": ["Business Administration"],
      "hometown": "Seattle, WA",
      class: "Alpha Omicron",
      image: "brennan_kim.jpg",
      "industry_interests": ["Finance", "Strategy", "Consulting"],
      "recent_position": "Consumer Insights Intern @ FOX Entertainment",
      "campus_involvements": ["MBA Programs Student Assistant"],
      "family": "Wang-Zhu"
    }
    ,
    {
      "name": "Haylie Lee",
      "year": "Junior",
      "majors": ["Business Administration", "Digital Information Systems"],
      "hometown": "Las Vegas, NV",
      class: "Alpha Omicron",
      "industry_interests": ["Marketing", "Accounting"],
      "recent_position": "N/A",
      "campus_involvements": ["UBA"],
      image: "haylie_lee.jpg"
    },
    {
      "name": "Jacob Lee",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Brea, CA",
      class: "Alpha Omicron",
      "industry_interests": ["Consulting", "Finance", "Wealth Management"],
      "recent_position": "N/A",
      "campus_involvements": ["ASUC"],
      image: "jacob_lee.jpg",
      "family": "Chang-McGrath"
    },
    {
      "name": "Juliana Lee",
      "year": "Junior",
      "majors": ["Business Administration", "Psychology"],
      "hometown": "San Jose, CA",
      class: "Alpha Omicron",
      "industry_interests": ["Marketing", "UI/UX Design"],
      "recent_position": "Social Media Marketing Manager @ Niche Street",
      "campus_involvements": ["MAISS"],
      image: "juliana_lee.jpg",
      "family": "Su-Hung-Green"
    },
    {
      "name": "Nathan Lee",
      "year": "Junior",
      "majors": ["Business Administration", "Digital Information Systems"],
      "hometown": "Davis, CA",
      class: "Alpha Mu",
      image: "nathan_lee.jpg",
      "industry_interests": ["Product", "Marketing", "Strategy"],
      "recent_position": "Product Summer Analyst @ Citi",
      "campus_involvements": ["Product Association", "MUSA", "FEMBA Paul Merage", "Sigma Chi"],
      "family": "Huang-Merchant"
    }
    ,
    {
      "name": "Madeline Li",
      "year": "Senior",
      "majors": ["Business Economics", "International Studies", "Film and Media Studies"],
      "hometown": "San Diego, CA",
      class: "Alpha Nu",
      image: "madeline_li.jpg",
      "industry_interests": ["Marketing", "Product Management", "Public Relations"],
      "recent_position": "N/A",
      "campus_involvements": ["Campus Recreation", "UC Irvine Club Volleyball", "UUMP"],
      "family": "Su-Hung-Green"
    }
    ,
    {
      "name": "Jessica Lin",
      "year": "Sophomore",
      "majors": ["Business Administration", "Computer Science"],
      "hometown": "Salt Lake City, UT",
      class: "Alpha Omicron",
      "industry_interests": ["Software Engineering", "Finance", "Quant"],
      "recent_position": "Accounting Intern @ R&F Mart",
      "campus_involvements": ["ITG", "UBA"],
      image: "jessica_lin.jpg",
      "family": "Chen-Ho"
    },
    {
      "name": "Julia Lin",
      "year": "Junior",
      "majors": ["Business Administration", "Anthropology", "Digital Information Systems"],
      "hometown": "Portland, OR",
      "pledge_class": "Alpha Mu",
      "industry_interests": ["Marketing", "Strategy", "Consulting"],
      "recent_position": "Finance/Business Operations Acquisition Intern @ NASA Jet Propulsion Laboratory",
      "campus_involvements": ["MUSA", "Campus Representatives", "Amazon Prime Student Campus Manager"],
      image: "julia_lin.jpg",
      class: "Alpha Mu",
      "family": "Huang-Merchant"
    },
    {
      "name": "Ishan Malik",
      "year": "Junior",
      "majors": ["Mechanical Engineering", "Economics"],
      "hometown": "Davis, CA",
      class: "Alpha Omicron",
      "industry_interests": ["Project Management", "Mechanical Engineering"],
      "recent_position": "Operations Intern @ Siemens",
      "campus_involvements": ["Anteater Formula Racing", "Indian Subcontinental Club", "Ski and Snowboard Club"],
      image: "ishan_malik.jpg",
      "family": "Huang-Merchant"
    },
    {
      "name": "Isaac Martinez",
      "year": "Sophomore",
      "majors": ["Economics"],
      "hometown": "Santa Clarita, CA",
      class: "Alpha Pi",
      "industry_interests": ["Finance", "Marketing"],
      "recent_position": "N/A",
      "campus_involvements": ["UBA"],
      image: "isaac_martinez.jpg",
      "family": "Lough-Yu"
    },
    {
      "name": "Aadi Mehta",
      "year": "Junior",
      "majors": ["Informatics", "Management"],
      "hometown": "Sacramento, CA",
      class: "Alpha Omicron",
      image: "aadi_mehta.jpg",
      "industry_interests": ["Product Management"],
      "recent_position": "IT Customers Applications Intern @ SMUD",
      "campus_involvements": ["Indian Subcontinental Club", "UBA", "OIT Classroom Services Staff"],
      "family": "Zhang-Feng"
    },
    {
      "name": "Mirsab Mirza",
      "year": "Junior",
      "majors": ["Economics", "Social Policy & Public Service", "Health Informatics"],
      "hometown": "Corona, CA",
      class: "Alpha Xi",
      image: "mirsab_mirza.jpg",
      "industry_interests": ["Marketing", "Public Health"],
      "recent_position": "Marketing Intern @ LA Rams",
      "campus_involvements": ["Sports Business Association", "UCI Athletics", "Cricket Club", "MAISS", "Future Business Leaders of America"],
      "family": "Huang-Merchant"
    },
    {
      "name": "Jake Moss",
      "year": "Junior",
      "majors": ["Business Administration"],
      "hometown": "Huntington Beach, CA",
      class: "Alpha Mu",
      image: "jake_moss.jpg",
      "industry_interests": ["Finance", "Consulting"],
      "recent_position": "Risk & Financial Advisory Intern @ Deloitte",
      "campus_involvements": ["N/A"],
      "family": "Lough-Yu"
    }
    ,
    {
      "name": "Maryam Mussa",
      "year": "Senior",
      "majors": ["Business Administration", "Digital Information Systems"],
      "hometown": "Cypress, CA",
      class: "Alpha Xi",
      image: "maryam_mussa.jpg",
      "industry_interests": ["Product Management", "Marketing"],
      "recent_position": "Consumer Insights Intern @ NBCUniversal",
      "campus_involvements": ["MAISS"],
      "family": "Lough-Yu"
    }
    ,
    {
      "name": "Collin Na",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Brea, CA",
      class: "Alpha Omicron",
      image: "collin_na.jpg",
      "industry_interests": ["Finance"],
      "recent_position": "Intern @ The Reserve Investments",
      "campus_involvements": ["KCM"],
      "family": "Lough-Yu"
    }
    ,
    {
      "name": "Elaine Nguyen",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Orange, CA",
      class: "Alpha Pi",
      image: "elaine_nguyen.jpg",
      "industry_interests": ["Consulting"],
      "recent_position": "N/A",
      "campus_involvements": ["MBA Programs Student Assistant"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "David Pena",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Salinas, CA",
      class: "Alpha Xi",
      image: "david_pena.jpg",
      "industry_interests": ["Finance"],
      "recent_position": "Strategy Consultant Extern @ PwC",
      "campus_involvements": ["MBA Program", "Antreprenuer Center", "FBLA", "SBA", "MUSA"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Alex Pham",
      "year": "Senior",
      "majors": ["Business Information Management", "Philosophy", "Statistics"],
      "hometown": "Irvine, CA",
      class: "Alpha Kappa",
      image: "alex_pham.jpg",
      "industry_interests": ["Product Management", "VC"],
      "recent_position": "Product Management Intern @ Microsoft",
      "campus_involvements": ["MAISS", "Product Association @ UCI"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Lohit Potnuru",
      "year": "Freshman",
      "majors": ["Quantitative Economics", "Computer Science"],
      "hometown": "San Ramon, CA",
      class: "Alpha Pi",
      image: "lohit_potnuru.jpg",
      "industry_interests": ["Finance", "Software Engineering", "PM"],
      "recent_position": "Machine Learning Researcher @ Bioverse Labs",
      "campus_involvements": ["Manifest", "ITG", "AI Club"],
      "family": "Chang-McGrath"
    }
    ,
    {
      "name": "Winnie Qi",
      "year": "Senior",
      "majors": ["Business Administration"],
      "hometown": "San Francisco, CA",
      class: "Alpha Mu",
      image: "winnie_qi.jpg",
      "industry_interests": ["Finance"],
      "recent_position": "Finance Development Program (FDP) Intern @ Apple",
      "campus_involvements": ["MUSA", "Product Association"],
      "family": "Su-Hung-Green"
    }
    ,
    {
      "name": "Melanie Sagun",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Cerritos, CA",
      class: "Alpha Omicron",
      image: "melanie_sagun.jpg",
      "industry_interests": ["Marketing"],
      "recent_position": "Marketing Intern @ UCI Athletics",
      "campus_involvements": ["UBA", "Product Association", "Kababayan"],
      "family": "Lough-Yu"
    },
    {
      "name": "Brendon Sato",
      "year": "Freshman",
      "majors": ["Business Administration"],
      "hometown": "Honolulu, Hawaii",
      class: "Alpha Pi",
      image: "brendon_sato.jpg",
      "industry_interests": ["Consulting", "Finance"],
      "recent_position": "N/A",
      "campus_involvements": ["N/A"],
      "family": "Lough-Yu"
    }
    ,
    {
      "name": "Caden Shaffer",
      "year": "Sophomore",
      "majors": ["Business Administration"],
      "hometown": "Irvine, CA",
      class: "Alpha Pi",
      image: "caden_shaffer.jpg",
      "industry_interests": ["Accounting", "Finance", "Real Estate"],
      "recent_position": "Accounting Intern @ Teacher Created Materials",
      "campus_involvements": ["Accounting Association", "Beta Alpha Psi"],
      "family": "Chen-Ho"
    }
    ,
    {
      "name": "Nithin Senthil",
      "year": "Junior",
      "majors": ["Software Engineering"],
      "hometown": "Seattle, WA",
      class: "Alpha Omicron",
      image: "nithin_senthil.jpg",
      "industry_interests": ["Software Engineering", "Product Management"],
      "recent_position": "SWE Intern @ LoginID",
      "campus_involvements": ["ISC"],
      "family": "Chew-Mark"
    },
    {
      "name": "Dylan Tanzil",
      "year": "Senior",
      "majors": ["Business Economics"],
      "hometown": "Temple City, CA",
      class: "Alpha Lambda",
      image: "dylan_tanzil.jpg",
      "industry_interests": ["Consulting", "Finance"],
      "recent_position": "Intern @ Linda S. Congleton & Associates",
      "campus_involvements": ["N/A"],
      "family": "Wang-Zhu"
    }
    ,
    {
      "name": "Ai Toyama",
      "year": "Senior",
      "majors": ["Economics"],
      "hometown": "Shanghai, China; Millbrae, CA",
      class: "Alpha Xi",
      image: "ai_toyama.jpg",
      "industry_interests": ["Entrepreneurship", "Management", "Recruiting"],
      "recent_position": "Campus Leader @ Quokka Brew",
      "campus_involvements": ["Tomo No Kai"],
      "family": "Wang-Zhu"
    }
    ,
    {
      "name": "Jacob Won",
      "year": "Senior",
      "majors": ["Business Administration"],
      "hometown": "Fullerton, CA",
      class: "Alpha Xi",
      image: "jacob_won.jpg",
      "industry_interests": ["Entrepreneurship", "Consulting"],
      "recent_position": "STEM Learning Labs Intern @ Alpha Omega Group",
      "campus_involvements": ["BCEC"],
      "family": "Lough-Yu"
    }
    ,
    {
      "name": "Jenny Wu",
      "year": "Senior",
      "majors": ["Business Administration"],
      "hometown": "Castro Valley, CA",
      class: "Alpha Lambda",
      image: "jenny_wu.jpg",
      "industry_interests": ["Human Resources"],
      "recent_position": "HR Shared Services Intern @ Proofpoint, Inc.",
      "campus_involvements": ["ASUCI"],
      "family": "Chang-McGrath"
    }
    ,
    {
      "name": "Evelyn Wu",
      "year": "Senior",
      "majors": ["Economics", "Accounting"],
      "hometown": "Sacramento, CA",
      class: "Alpha Nu",
      image: "evelyn_wu.jpg",
      "industry_interests": ["Finance", "Accounting"],
      "recent_position": "Loan Servicing Intern @ Sierra Pacific Mortgage",
      "campus_involvements": ["Chinese Association"]
    }
    ,
    {
      "name": "Tommy Wunsch",
      "year": "Sophomore",
      "majors": ["Economics"],
      "hometown": "Santa Clarita, CA",
      class: "Alpha Omicron",
      image: "tommy_wunsch.jpg",
      "industry_interests": ["Consulting", "Finance"],
      "recent_position": "Income Tax Intern @ Avantax Wealth Management",
      "campus_involvements": ["180 Degrees Consulting", "UBA"],
      "family": "Chang-McGrath"
    }
];

const imageFolder = "./images/"; // Add this line

const images = brothersData.map((brother) => brother.image);

filterButton.addEventListener("click", () => {
    // Update the current filter
    let index = uniqueMajors.indexOf(currentFilter);
    currentFilter = uniqueMajors[(index + 1) % uniqueMajors.length];
    console.log(currentFilter);
    filterButton.innerText = currentFilter;
  
    // Clear the current display
    const cardContainer = document.querySelector(".card-list-container");
    cardContainer.innerHTML = "";
  
    // Refresh the display
    images.forEach((pic) => {
      question.value = "What is this person's major?";
    const brother = brothersData.find(brother => brother.image === pic);
    major.value = brother.majors[0];
    if (brother.majors.length > 1 && brother.majors[1] === currentFilter) {
      major.value = brother.majors[1];
    }
    if (brother.majors.length > 2 && brother.majors[2] === currentFilter) {
        major.value = brother.majors[2];
      }
      image.value = imageFolder + pic;
      answer.value = major.value;
    //   year.value = brothersData.find(brother => brother.image === pic).year;
      console.log(currentFilter);
      if (currentFilter === "All Majors" || major.value === currentFilter) {
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
//   year.value = ""; // Add this line 
//   pledgeClass.value = "";
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
    //   tempPledgeClass = pledgeClass.value.trim(); // Add this line
      if (!tempQuestion || !tempAnswer || !tempImage) { // Modify this line
        errorMessage.classList.remove("hide");
      } else {
        container.classList.remove("hide");
        errorMessage.classList.add("hide");
        viewlist();
        question.value = "";
        answer.value = "";
        image.value = "";
        // pledgeClass.value = ""; // Add this line
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
    // var displayClass = document.createElement("p");
    // displayClass.classList.add("answer-div", "hide");
    // displayClass.innerText = pledgeClass.value;
    // div.appendChild(displayClass); // Add this line
  
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
      question.value = "What is this person's major?";
      answer.value =  brothersData.find(brother => brother.image === pic).majors;
      image.value = imageFolder + pic;
    //   year.value = brothersData.find(brother => brother.image === pic).year; // Add this line
      viewlist();
    }); 
  };
