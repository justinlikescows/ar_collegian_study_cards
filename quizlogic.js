//import OpenAIApi from 'openai-api';
import { OpenAIApi } from 'openai-api';


// Initialize the API
const openai = new OpenAIApi({
  apiKey: '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'
});

// Your dataset

  function startQuiz() {
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
          "campus_involvements": ["Sigma Pi Alpha", "CHC"]
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
          "campus_involvements": ["UFA", "LEADS"]
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
          "campus_involvements": ["Latino Business Student Association", "Merage Financial Service - Student Assistant", "Sigma Chi Fraternity", "UCI Athletics"]
        }
        ,
        {
          "name": "Aryan Bajaria",
          "year": "Junior",
          "majors": ["Business Administration", "Digital Information Systems"],
          "hometown": "Yorba Linda, CA",
          class: "Alpha Nu",
          image: "aryan_bajaria.jpg",
          "industry_interests": ["Wealth Management", "Consulting", "Finance"],
          "recent_position": "Asset and Wealth Management @ J.P. Morgan Private Bank",
          "campus_involvements": ["UCI ANTrepreneur Center", "Sigma Chi", "Mesa Court Housing", "UC-CSU ECCLPS", "REA"]
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
          "campus_involvements": ["Product Association", "Hiking Club at UCI"]
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
          "campus_involvements": ["UBA"]
        }
        ,
          {
            "name": "Shashank Bypan",
            "year": "Freshman",
            "majors": ["Business Administration"],
            "hometown": "San Ramon, CA",
            class: "Alpha Pi",
            image: "shashank_bypan.jpg",
            "industry_interests": ["Consulting", "Marketing"],
            "recent_position": "N/A",
            "campus_involvements": ["180 Degrees Consulting"]
          },
          {
            "name": "Kevin Cao",
            "year": "Senior",
            "majors": ["Business Information Management"],
            "hometown": "San Gabriel, CA",
            class: "Alpha Kappa",
            image: "kevin_cao.jpg",
            "industry_interests": ["Software Engineering"],
            "recent_position": "Vice President of Technology @ MUSA",
            "campus_involvements": ["ASUCI", "MUSA", "SCNO"]
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
            "campus_involvements": ["UFA", "SoF"]
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
            "campus_involvements": ["MUSA", "Marketing Association", "Art History Undergraduate Association", "Model UN", "KUCI 88.9 FM"]
          }
          ,
          {
            "name": "Jorina Chen",
            "year": "Senior",
            "majors": ["Informatics (HCI)", "Health Informatics"],
            "hometown": "San Jose, CA",
            class: "Alpha Nu",
            image: "jorina_chen.jpg",
            "industry_interests": ["Product Design", "UX Design"],
            "recent_position": "Product Design Intern @ Atlassian",
            "campus_involvements": ["Design at UCI", "CTC", "STAR Group Research Assistant", "Merage Research Assistant"]
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
            image: "ronica_cheng.jpg"
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
            "campus_involvements": ["Alpha Phi", "MAISS", "Kaba Modern"]
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
            "campus_involvements": ["Association for Computing Machinery"]
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
            "campus_involvements": ["Commit the Change", "Product Association"]
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
            "campus_involvements": ["MUSA Representative", "Powerlifting @ UCI"]
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
            "campus_involvements": ["N/A"]
          }
          ,
          {
            "name": "Yeseo Han",
            "year": "Senior",
            "majors": ["Business Administration", "Classical Civilization"],
            "hometown": "Dublin, CA",
            class: "Alpha Kappa",
            image: "yeseo_han.jpg",
            "industry_interests": ["Digital Marketing", "Marketing Strategy"],
            "recent_position": "Digital Marketing & Sales Strategy Intern @ SoKit Beauty",
            "campus_involvements": ["UCI ANTrepreneur Center", "Eta Sigma Phi", "ASUCI"]
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
            image: "jason_henkel.jpg"
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
            image: "coca_ho.jpg"
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
            "campus_involvements": ["N/A"]
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
            "campus_involvements": ["180 Degrees Consulting", "Product Association", "UCI Esports"]
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
            image: "diana_huynh.jpg"
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
            "campus_involvements": ["UBA"]
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
            "campus_involvements": ["MBA Programs Student Assistant"]
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
            image: "jacob_lee.jpg"
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
            image: "juliana_lee.jpg"
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
            "campus_involvements": ["Product Association", "MUSA", "FEMBA Paul Merage", "Sigma Chi"]
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
            "campus_involvements": ["Campus Recreation", "UC Irvine Club Volleyball", "UUMP"]
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
            image: "jessica_lin.jpg"
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
            class: "Alpha Mu"
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
            image: "ishan_malik.jpg"
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
            image: "isaac_martinez.jpg"
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
            "campus_involvements": ["Indian Subcontinental Club", "UBA", "OIT Classroom Services Staff"]
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
            "campus_involvements": ["Sports Business Association", "UCI Athletics", "Cricket Club", "MAISS", "Future Business Leaders of America"]
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
            "campus_involvements": ["N/A"]
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
            "campus_involvements": ["MAISS"]
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
            "campus_involvements": ["KCM"]
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
            "campus_involvements": ["MBA Programs Student Assistant"]
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
            "campus_involvements": ["MBA Program", "Antreprenuer Center", "FBLA", "SBA", "MUSA"]
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
            "campus_involvements": ["MAISS", "Product Association @ UCI"]
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
            "campus_involvements": ["Manifest", "ITG", "AI Club"]
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
            "campus_involvements": ["MUSA", "Product Association"]
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
            "campus_involvements": ["UBA", "Product Association", "Kababayan"]
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
            "campus_involvements": ["N/A"]
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
            "campus_involvements": ["Accounting Association", "Beta Alpha Psi"]
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
            "campus_involvements": ["ISC"]
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
            "campus_involvements": ["N/A"]
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
            "campus_involvements": ["Tomo No Kai"]
          }
          ,
          {
            "name": "Haley Truong",
            "year": "Senior",
            "majors": ["Economics", "Accounting"],
            "hometown": "Irvine, CA",
            class: "Alpha Nu",
            image: "haley_truong.jpg",
            "industry_interests": ["Accounting", "Finance"],
            "recent_position": "Accounting Intern @ Skyworks Inc",
            "campus_involvements": ["Beta Alpha Psi", "Accounting Association Leadership Development Program", "Student Assistant @ Paul Merage MBA Programs"]
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
            "campus_involvements": ["BCEC"]
          }
          ,
          {
            "name": "Brennen Wong",
            "year": "Senior",
            "majors": ["Computer Science"],
            "hometown": "Diamond Bar, CA",
            class: "Alpha Kappa",
            image: "brennen_wong.jpg",
            "industry_interests": ["Software Engineering"],
            "recent_position": "Full Stack Software Engineer Intern @ SAP",
            "campus_involvements": ["ASUCI"]
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
            "campus_involvements": ["ASUCI"]
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
            "campus_involvements": ["180 Degrees Consulting", "UBA"]
          }
          ,
          {
            "name": "Maxwell Xu",
            "year": "Senior",
            "majors": ["Economics"],
            "hometown": "Millbrae, CA",
            class: "Alpha Kappa",
            image: "maxwell_xu.jpg",
            "industry_interests": ["Product Marketing"],
            "recent_position": "Business Planning Intern @ Microsoft",
            "campus_involvements": ["Product Association", "MAISS"]
          }
          
      ];
    // Select a random member from the dataset
    const randomMember = brothersData[Math.floor(Math.random() * brothersData.length)];
  
    // Create a prompt for the GPT API
    const prompt = `Create a question about this frat member: ${randomMember.name}, ${randomMember.class}. Some 
    information about them: ${randomMember.name} is a ${randomMember.year} studying ${randomMember.majors.join(', ')}.
    They are from ${randomMember.hometown}. Their industry interests include ${randomMember.industry_interests.join(', ')}.
    Their most recent position was ${randomMember.recent_position}. Some of their campus involvements include ${randomMember.campus_involvements.join(', ')}.
    Sample questions: How do you spell their full name? What is their major? What year are they? What are their industry interests? What is their most recent position? What are some of their campus involvements?`;
  
    console.log(prompt);
    
    // Send the prompt to the GPT API
    openai.complete({
      engine: 'text-davinci-002',
      prompt: prompt,
      maxTokens: 60
    }).then(response => {
      // Use the response as your question
      const question = response.choices[0].text.trim();
      document.getElementById('question').innerText = question;
    }).catch(err => {
      console.error(err);
    });
  }

    startQuiz();