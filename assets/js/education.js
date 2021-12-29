AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Machine Learning Engineer Nanodegree",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/aws-machine-learning-engineer-nanodegree--nd189",
  },
  {
    title: "AWS Machine Learning Foundations Course",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/aws-machine-learning-foundations--ud065",
  },
  {
    title: "Intro to Machine Learning",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-machine-learning--ud120",
  },
  {
    title: "Intro to Data Analysis",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-data-analysis--ud170",
  },
  {
    title: "Deep Learning",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/deep-learning-nanodegree--nd101",
  },
  {
    title: "Fundamentals of Scalable Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/ds?specialization=advanced-data-science-ibm",
  },
  {
    title: "Advanced Machine Learning and Signal Processing",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/advanced-machine-learning-signal-processing?specialization=advanced-data-science-ibm",
  },
  {
    title: "Applied AI with DeepLearning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/ai?specialization=advanced-data-science-ibm",
  },  
  {
    title: "Object Detection with YOLO, Darknet, OpenCV and Python",
    cardImage: "assets/images/education-page/iaexpert_dark.svg",
    moocLink: "https://iaexpert.academy/courses/deteccao-de-objetos-com-yolo-darknet-opencv-e-python/",
  },
  {
    title: "Text Summarization with Natural Language Processing",
    cardImage: "assets/images/education-page/iaexpert_dark.svg",
    moocLink: "https://iaexpert.academy/courses/sumarizacao-de-textos-com-processamento-de-linguagem-natural/",
  },
  {
    title: "Text Recognition with OCR and Python",
    cardImage: "assets/images/education-page/iaexpert_dark.svg",
    moocLink: "https://iaexpert.academy/courses/reconhecimento-de-textos-com-ocr-e-python/",
  },
  {
    title: "Genetic Algorithms in Python",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/algoritmos-geneticos-em-python/",
  },
  {
    title: "Developer Docker (with Docker Swarm and Kubernetes)",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/docker-para-desenvolvedores-com-docker-swarm-e-kubernetes/",
  },
  {
    title: "Deep Learning with Python from A to Z - The Complete Course",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/deep-learning-com-python-az-curso-completo/",
  },
  {
    title: "Python for Data Science and Machine Learning",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/python-para-data-science-e-machine-learning/",
  },
  {
    title: "Artificial Intelligence: Optimization Algorithms in Python",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/algoritmos-de-otimizacao-em-python/",
  },
  {
    title: "REST APIs with Python and Flask",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/rest-apis-com-python-e-flask/",
  },
  {
    title: "Master Computer Vision™ OpenCV4 in Python with Deep Learning",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/master-computer-vision-with-opencv-in-python/",
  },
  {
    title: "Face and Object Recognition with Python and Dlib",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/reconhecimento-de-faces-e-de-objetos-com-python-e-dlib/",
  },
  {
    title: "Reinforcement Learning with Deep Learning, PyTorch and Python",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/aprendizagem-reforco-deep-learning-pytorch-python/",
  },
  {
    title: "Smart Search Algorithms with Python",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/course/algoritmos-inteligentes-de-busca-com-python/",
  },


];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});