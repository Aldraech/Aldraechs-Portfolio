const resumeBtn = document.querySelector('.check_resume');
const resume = document.querySelector('.resume');

let resumeOpen = false;

resumeBtn.addEventListener('click', () =>{
    if(!resumeOpen){
        resume.classList.add('toggle');
        resumeOpen = true;
        console.log(resumeOpen);
    }else{
        resume.classList.remove('toggle');
        resumeOpen = false;
        console.log(resumeOpen);
    }
});

/*--------------------PROJECTS SECTION TOGGLING--------------------------------*/

const projects_container = document.querySelector('.projects_container')
let project_open = false;

const projects_1p13 = document.querySelector('.projects_1P13'); //toggles 1p13 projects
const more_1P13 = document.querySelector('.more_1P13');

const projects_2mp3 = document.querySelector('.projects_2MP3'); //toggles 2mp3 projects
const more_2MP3 = document.querySelector('.more_2MP3');

const projects_2md3 = document.querySelector('.projects_2MD3'); //toggles 2md3 projects
const more_2MD3 = document.querySelector('.more_2MD3');

const projects_2ta4 = document.querySelector('.projects_2TA4'); //toggles 2ta4 projects
const more_2TA4 = document.querySelector('.more_2TA4');

const projects_2e04 = document.querySelector('.projects_2E04'); //toggles 2e04 projects
const more_2E04 = document.querySelector('.more_2E04');


const back_to_projects = document.querySelector('.back_to_projects') //return to projects section

back_to_projects.addEventListener('click', () =>{
    if(project_open){
        more_1P13.classList.remove('toggle');
        more_2MP3.classList.remove('toggle');
        more_2MD3.classList.remove('toggle');
        more_2TA4.classList.remove('toggle');
        more_2E04.classList.remove('toggle');

        projects_container.classList.remove('toggle');
        back_to_projects.classList.remove('toggle');

        /*---RESETS ALL BOOLEANS VALUES---*/
        project_open = false;
    }
});

projects_1p13.addEventListener('click', () =>{ //1p13
    if(!project_open){
        projects_container.classList.add('toggle');
        back_to_projects.classList.add('toggle');

        more_1P13.classList.add('toggle');
        project_open = true;
    }
    console.log(back_to_projects);
});

projects_2mp3.addEventListener('click', () =>{ //2mp3
    if(!project_open){
        projects_container.classList.add('toggle');
        back_to_projects.classList.add('toggle');

        more_2MP3.classList.add('toggle');
        project_open = true;
    }
    console.log(back_to_projects);
});

projects_2md3.addEventListener('click', () =>{ //2md3
    if(!project_open){
        projects_container.classList.add('toggle');
        back_to_projects.classList.add('toggle');

        more_2MD3.classList.add('toggle');
        project_open = true;
    }
    console.log(back_to_projects);
});

projects_2ta4.addEventListener('click', () =>{ //2ta4
    if(!project_open){
        projects_container.classList.add('toggle');
        back_to_projects.classList.add('toggle');

        more_2TA4.classList.add('toggle');
        project_open = true;
    }
    console.log(back_to_projects);
});

projects_2e04.addEventListener('click', () =>{ //2e04
    if(!project_open){
        projects_container.classList.add('toggle');
        back_to_projects.classList.add('toggle');

        more_2E04.classList.add('toggle');
        project_open = true;
    }
    console.log(back_to_projects);
});