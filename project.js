let projectData = [
    {
        image: 'img/music1.jpg',
        name: 'Music Player',
        detail: 'Music player with pure HTML, CSS and JS.It has play/pause animation, disk rotating animation and pulse animation, working forward/backward buttons with seek-able song slider ',
        github: '#',
        live: 'https://vkmusicplayer.netlify.app/',
        tags: '#javascript, #fullstack, #css, #major project'
    },
    {
        image: 'img/insta1.png',
        name: 'Insta Clone',
        detail: 'Check out insta clone, we can like image ,copy URL, pop up image on click ',
        github: 'https://github.com/Vivek-1012/socialapp.git',
        live: 'https://insta-clone-vk-app.netlify.app',
        tags: '#javascript, #css, #major project'
    },
    {
        image: 'img/project-3.png',
        name: 'project three',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #minorproject'
    },
    {
        image: 'img/code.jpg',
        name: 'Quiz indian legends',
        detail: 'Test your knowledge about Indian Legends(worked with repelJS) .',
        github: 'https://github.com/Vivek-1012/IndianLegendsQuiz.git',
        live: 'https://replit.com/@Vivek-1012/indianLegends?v=1',
        tags: '#fullstack, #css, #minorproject'
    },
    {
        image: 'img/pirates.jpg',
        name: 'Pirates Talk',
        detail: '"Are you a fan of Pirates? Use the translator to convert your text from English to Pirates speak language.',
        github: 'https://github.com/Vivek-1012/pirates-speak.git',
        live: 'https://vivek-piratestalks.netlify.app',
        tags: '#fullstack, #minorproject, #api'
    },
    {
        image: 'img/palindrome.png',
        name: 'Palindrome Birthday',
        detail: 'Is your Birthday a Palindrome number, well check it!!',
        github: 'https://github.com/Vivek-1012/birthdaypalindrome.git',
        live: 'https://vivek-birthdaypalindrome.netlify.app',
        tags: '#css, #minorproject'
    },
    {
        image: 'img/triangle.png',
        name: 'Fun with Triangles',
        detail: 'Test your triangle knowledge , have fun.',
        github: 'https://github.com/Vivek-1012/FunWithTriangles',
        live: 'https://vivek-funwithtriangle.netlify.app',
        tags: '#javascript, #minorproject'
    },
    {
        image: 'img/cash.jpg',
        name: 'Cash Manager',
        detail: 'Need help to manage your cash, well this will work.',
        github: 'https://github.com/Vivek-1012/Cash-Register-Manager.git',
        live: 'https://vivek-cashmanager.netlify.app',
        tags: '#css, #minorproject'
    },
    {
        image: 'img/bar1.jpg',
        name: 'Stock profit and loss',
        detail: 'Are you investing in stock market? know about your profit or loss',
        github: 'https://github.com/Vivek-1012/stock-ProfitorLoss.git',
        live: 'https://vivek-stockprofitloss.netlify.app',
        tags: '#javascript, #minorproject'
    },
    {
        image: 'img/wildlife.jpg',
        name: 'Fun with Animals',
        detail: 'Test your self , if you really know about Animals.',
        github: 'https://github.com/Vivek-1012/funWithAnimals-.git',
        live: 'https://n6jt2c.csb.app/',
        tags: '#css, #reactjs '
    }
]

// creating project cards in frontend //


 const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="${data.tags}">
    <div class="project-wrapper">
        <div class="project-thumbnail">
           <img src="img/close (1).png" class="close-btn" alt="">
           <img src="${data.image}" class="project-img" alt="">
           <span class="tags">${data.tags}</span>
        </div>
        <div class="project-body">
          <h1 class="prroject-name">${data.name}</h1>
          <p class="project-detail"> ${data.detail} </p>
          <a href="${data.github}" class="btn">Github</a>
          <a href="${data.live}" class="btn">See live</a>
        </div>
    </div>
    
    `;
 }

 projectData.forEach(data => createProjectCards(data))

