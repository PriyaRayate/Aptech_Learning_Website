// // const slides=document.querySelectorAll(".slide")
// // var counter=0;
// // slides.forEach(
// //     (slide,index)=>{
// //         slide.style.left=`${index * 100}%`
// //     }
// // )
// // const slideimage=()=>{
// //     slides.forEach(
// //         (slide)=>{
// //             slide.style.transform = `transalteX(-${counter * 100}%)`
// //         }
// //     )
// // }

// //   let currentIndex = 0; // Initial image index
// //   const slides = document.querySelectorAll('.slide'); // Select all images

// //   function showSlide(index) {
// //     // Hide all images
// //     slides.forEach((slide) => {
// //       slide.classList.remove('active');
// //     });
// //     // Show the image at the current index
// //     slides[index].classList.add('active');
// //   }

// //   function nextSlide() {
// //     // Go to the next image
// //     currentIndex = (currentIndex + 1) % slides.length;
// //     showSlide(currentIndex);
// //   }

// //   function prevSlide() {
// //     // Go to the previous image
// //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
// //     showSlide(currentIndex);
// //   }

// //   // Show the first slide initially
// //   showSlide(currentIndex);

// //   // Change the slide every 3 seconds
// //   setInterval(nextSlide, 3000); // Adjust the time as needed


//   let currentIndex = 0; // Initial image index
//   const slides = document.querySelectorAll('.slide'); // Select all images
//   const dots=document.querySelectorAll('.dot');

//   function showSlide(index) {
//     // Hide all images
//     slides.forEach((slide,i) => {
//       slide.classList.remove('active');
//       dots[i].classList.remove('active');
//     });
//     // Show the image at the current index
//     slides[index].classList.add('active');
//     dots[index].classList.add('active');
//   }

//   function nextSlide() {
//     // Go to the next image
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     // Go to the previous image
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

 
//   function currentSlide(index) {
//     currentIndex = index;
//     showSlide(currentIndex);
//   }
  
//   dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => currentSlide(index));
//   });
//  // Show the first slide initially
//   showSlide(currentIndex);

//   // Optionally, auto-rotate the slides every 3 seconds
//   setInterval(nextSlide, 3000); // Adjust the time as needed


// let currentSlideIndex = 0; // Initialize the current slide index
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');

// // Function to show the slide based on the index
// function showSlide(index) {
//     // Ensure the index is within bounds
//     if (index >= slides.length) {
//         currentSlideIndex = 0;
//     } else if (index < 0) {
//         currentSlideIndex = slides.length - 1;
//     } else {
//         currentSlideIndex = index;
//     }

//     // Hide all slides and deactivate all dots
//     slides.forEach((slide, i) => {
//         slide.style.display = i === currentSlideIndex ? 'block' : 'none';
//     });

//     dots.forEach((dot, i) => {
//         dot.className = i === currentSlideIndex ? 'dot active' : 'dot';
//     });
// }

// // Function to go to the next slide
// function nextSlide() {
//     showSlide(currentSlideIndex + 1);
// }

// // Function to go to the previous slide
// function prevSlide() {
//     showSlide(currentSlideIndex - 1);
// }

// // Function to go to a specific slide
// function currentSlide(index) {
//     showSlide(index - 1); // Adjust for 0-based indexing
// }

// // Initial call to display the first slide
// showSlide(currentSlideIndex);



// const courseData = {
//     popular: [],
//     "ai & -ml": [
//         { title: "Advanced AI Techniques", img: "images/ainml.png", desc: "Learn cutting-edge AI methods in 200 hours." },          
//     ],  
//     "data-science": [
//         { title: "Data Science for Beginners", img: "images/datascience.jpg", desc: "Get started with Data Science in 300 hours." },
//     ],
//     "data-analytics": [
//         { title: "Data Analytics", img: "images/visual.png", desc: "Master data visualization tools in 150 hours." },
//     ],
//     "Cloud-Solutions": [
//         { title: "Cloud Practitioner Basics", img: "images/cloud-computing.jpg", desc: "Learn cloud fundamentals in 220 hours." },
//     ],
//     "cyber-security": [
//         { title: "Network Security Fundamentals", img: "images/cyber.jpg", desc: "Secure networks in 180 hours." },
//     ],
// };
//     const aidata = {
//     aiml:[],
//    "ai & -ml": [
//         { title: "Advanced AI Techniques", img: "images/ainml.png", desc: "Learn cutting-edge AI methods in 200 hours." },
//         { title: "Advanced AI Techniques", img: "images/ainml.png", desc: "Learn cutting-edge AI methods in 200 hours." },
//         { title: "Advanced AI Techniques", img: "images/ainml.png", desc: "Learn cutting-edge AI methods in 200 hours." },
//         { title: "Advanced AI Techniques", img: "images/ainml.png", desc: "Learn cutting-edge AI methods in 200 hours." },
//     ],
// };


//     const dsdata ={
//         datascience: [],
//     "data-science": [
//         { title: "Data Science for Beginners", img: "images/datascience.jpg", desc: "Get started with Data Science in 300 hours." },
//         { title: "Data Science for Beginners", img: "images/datascience.jpg", desc: "Get started with Data Science in 300 hours." },
//         { title: "Data Science for Beginners", img: "images/datascience.jpg", desc: "Get started with Data Science in 300 hours." },
//         { title: "Data Science for Beginners", img: "images/datascience.jpg", desc: "Get started with Data Science in 300 hours." },
//         ],
//     }
//     const analyticsdata={
//         dataanalyst:[],
//     "data-analytics": [
//         { title: "Data Visualization", img: "images/visual.png", desc: "Master data visualization tools in 150 hours." },
//         { title: "Data Visualization", img: "images/visual.png", desc: "Master data visualization tools in 150 hours." },
//         { title: "Data Visualization", img: "images/visual.png", desc: "Master data visualization tools in 150 hours." },
//         { title: "Data Visualization", img: "images/visual.png", desc: "Master data visualization tools in 150 hours." },
//     ],
// }

//     const clouddata ={
//     cloudcompuiting:[],
//     "Cloud-Solutions": [
//         { title: "Cloud Practitioner Basics", img: "images/cloud-computing.jpg", desc: "Learn cloud fundamentals in 220 hours." },
//         { title: "Cloud Practitioner Basics", img: "images/cloud-computing.jpg", desc: "Learn cloud fundamentals in 220 hours." },
//         { title: "Cloud Practitioner Basics", img: "images/cloud-computing.jpg", desc: "Learn cloud fundamentals in 220 hours." },
//         { title: "Cloud Practitioner Basics", img: "images/cloud-computing.jpg", desc: "Learn cloud fundamentals in 220 hours." },
//     ],
// }
//     const cyberdata ={
//     cybersecurity:[],
//     "cyber-security": [
//         { title: "Network Security Fundamentals", img: "images/cyber.jpg", desc: "Secure networks in 180 hours." },
//         { title: "Network Security Fundamentals", img: "images/cyber.jpg", desc: "Secure networks in 180 hours." },
//         { title: "Network Security Fundamentals", img: "images/cyber.jpg", desc: "Secure networks in 180 hours." },
//         { title: "Network Security Fundamentals", img: "images/cyber.jpg", desc: "Secure networks in 180 hours." },
//     ]
// }


// const dummyData = [
//     { title: "Coming Soon!", img: "images/placeholder.jpg", desc: "This category will have courses added soon!" },
// ];

// const menuItems = document.querySelectorAll('.catul li');
// const courseContainer = document.getElementById('courseCards');
// const sectionTitle = document.getElementById('section-title');

// // Merge all course data into "popular" and show 9 cards.
// const allCourses = Object.values(courseData).flat();
// courseData.popular = allCourses.slice(0, 6); // Take only the first 9 items.


// // const onebyone=Object.values(onedata).flat();
// // onedata.one=onebyone.slice(0,6);

// function updateCards(category) {
//     // const cards = courseData[category]?.length > 0 ? courseData[category] : dummyData;

//     let cards;

//     if (category === "ai & -ml") {
//         // For AI & ML, show all cards
//         cards = aidata["ai & -ml"]?.length > 0 ? aidata["ai & -ml"] : dummyData;
//     }
//     else if(category === "data-science") {
//         cards = dsdata["data-science"]?.length > 0 ? dsdata["data-science"] : dummyData;
//     } 
//     // else if(category === "data-analytics"){
//     //        cards= analyticsdata["data-analytics"]?.length >0 ? analyticsdata["data-analytics"]:dummyData;
//     //  }
//     else if(category === "Cloud-Solutions") {
//         cards = clouddata["Cloud-Solutions"]?.length > 0 ? clouddata["Cloud-Solutions"] : dummyData;
//     }
//     else if(category === "cyber-security") {
//         cards = cyberdata["cyber-security"]?.length > 0 ? cyberdata["cyber-security"] : dummyData;
//     }  
//     else {
//         // For other categories, show only 1 card
//         cards = courseData[category]?.length > 0 ? courseData[category].slice(0, 6) : dummyData;
//     }
    

//     courseContainer.innerHTML = cards
//         .map(
//             card => `
//             <div class="card">
//                 <img src="${card.img}" alt="${card.title}">
//                 <div class="card-cont">
//                     <h5>${card.title}</h5>
//                     <p>${card.desc}</p>
//                     <a href="#" class="btn">Read More</a>
//                 </div>
//             </div>
//         `
//         )
//         .join('');
//     sectionTitle.textContent = category.replace('-', ' ').toUpperCase();
    
// }

// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const category = item.getAttribute('data-category');
//         updateCards(category);
//     });
// });

// // Initialize with 'popular' category
// updateCards('popular');





document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".catul li");
    const cardsContainer = document.querySelector(".fifth .card-container");

    const sectionTitle = document.getElementById('section-title');
    
    // Define category mapping to card content
    const categoryCards = {
        "Popular Courses": [
            { img: "images/ainml.png", title: "Artificial Intelligence & Machine Learning", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/datascience.jpg", title: "Data Science & Analytics", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/python_program.jpg", title: "Python Developer", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/web_develop.jpg", title: "Web Development", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/cloud-computing.jpg", title: "Cloud Computing", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/cyber.jpg", title: "Cyber/Computer Security", duration: "TOTAL DURATION: 346 hours" }
        ],
        "AI & Machine Learning": [
            { img: "images/ainml.png", title: "Artificial Intelligence & Machine Learning", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/ai_ml_images/ai1.png", title: "Introduction to AI", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/ai_ml_images/ai2.jpg", title: "Machine Learning", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/ai_ml_images/a3.jpg", title: "Deep Learning", duration: "TOTAL DURATION: 346 hours" },
            { img: "images/ai_ml_images/a4.jpg", title: "Natural Language Processiong", duration: "TOTAL DURATION: 346 hours" },
        ],
        "Data Science/Analysis": [
            { img: "images/datascience.jpg", title: "Data Science & Analytics", duration: "TOTAL DURATION: 346 hours" }
        ],
        "Programming Languages": [
            { img: "images/python_program.jpg", title: "Python Developer", duration: "TOTAL DURATION: 346 hours" }
        ],
        "Web Development": [
            { img: "images/web_develop.jpg", title: "Web Development", duration: "TOTAL DURATION: 346 hours" }
        ],
        "Cloud Computing": [
            { img: "images/cloud-computing.jpg", title: "Cloud Computing", duration: "TOTAL DURATION: 346 hours" }
        ],
        "Cyber/Computer Security": [
            { img: "images/cyber.jpg", title: "Cyber/Computer Security", duration: "TOTAL DURATION: 346 hours" }
        ]
    };
    
    // Function to render cards based on category
    function renderCards(category) {
        cardsContainer.innerHTML = ""; // Clear previous cards
        categoryCards[category]?.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.innerHTML = `
                <img src="${card.img}" alt="${card.title}">
                <div class="card-cont">
                    <h5>${card.title}</h5>
                    <p>${card.duration}</p>
                   
                </div>
            `;
            cardsContainer.appendChild(cardElement);
            sectionTitle.textContent = category.replace('-', ' ').toUpperCase();
        });
    }
    
    // Add event listeners to category items
    categories.forEach(category => {
        category.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const selectedCategory = this.textContent.trim();
            renderCards(selectedCategory);
        });
    });
    
    // Initially display popular courses
    renderCards("Popular Courses");
});
