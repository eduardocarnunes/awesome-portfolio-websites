/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Deep Dense and Convolutional Autoencoders for Machine Acoustic Anomaly Detection",
        authors : "Gabriel Coelho, Pedro Pereira, Luis Matos, Alexandrine Ribeiro, Eduardo C Nunes, André Ferreira, Paulo Cortez, André Pilastri",
        conferences : "IFIP International Conference on Artificial Intelligence Applications and Innovations",
        researchYr : 2021,
        citebox : "popup1",
        image : "assets/images/research-page/paper2.png",
        citation: {
            vancouver: "Coelho, G., Pereira, P., Matos, L., Ribeiro, A., Nunes, E. C., Ferreira, A., ... & Pilastri, A. (2021, June). Deep Dense and Convolutional Autoencoders for Machine Acoustic Anomaly Detection. In IFIP International Conference on Artificial Intelligence Applications and Innovations (pp. 337-348). Springer, Cham."
        },
        abstract: "Recently, there have been advances in using unsupervised learning methods for Acoustic Anomaly Detection (AAD). In this paper, we propose an improved version of two deep AutoEncoders (AE) for unsupervised AAD for six types of working machines, namely Dense and Convolutional AEs. A large set of computational experiments was held, showing that the two proposed deep autoencoders, when combined with a mel-spectrogram sound preprocessing, are quite competitive and outperform a recently proposed AE baseline. Overall, a high-quality class discrimination level was achieved, ranging from 72% to 92%.",
        absbox: "absPopup1"
    },
    {
        title : "Anomalous Sound Detection with Machine Learning: A Systematic Review",
        authors : "Eduardo C Nunes",
        conferences : "arXiv preprint arXiv:2102.07820",
        researchYr : 2021,
        citebox : "popup2",
        image : "assets/images/research-page/paper3.png",
        citation: {
            vancouver: "Nunes, E. C. (2021). Anomalous Sound Detection with Machine Learning: A Systematic Review. arXiv preprint arXiv:2102.07820"
        },
        abstract: "Anomalous sound detection (ASD) is the task of identifying whether the sound emitted from an object is normal or anomalous. In some cases, early detection of this anomaly can prevent several problems. This article presents a Systematic Review (SR) about studies related to Anamolous Sound Detection using Machine Learning (ML) techniques. This SR was conducted through a selection of 31 (accepted studies) studies published in journals and conferences between 2010 and 2020. The state of the art was addressed, collecting data sets, methods for extracting features in audio, ML models, and evaluation methods used for ASD. The results showed that the ToyADMOS, MIMII, and Mivia datasets, the Mel-frequency cepstral coefficients (MFCC) method for extracting features, the Autoencoder (AE) and Convolutional Neural Network (CNN) models of ML, the AUC and F1-score evaluation methods were most cited.",
        absbox: "absPopup2"
    },
    {
        title : "Using Deep Autoencoders for In-vehicle Audio Anomaly Detection",
        authors : "Pedro José Pereira, Gabriel Coelho, Alexandrine Ribeiro, Luís Miguel Matos, Eduardo C Nunes, André Ferreira, André Pilastri, Paulo Cortez",
        conferences : "Procedia Computer Science",
        researchYr : 2021,
        citebox : "popup3",
        image : "assets/images/research-page/paper4.jpg",
        citation: {
            vancouver: "Pereira, P. J., Coelho, G., Ribeiro, A., Matos, L. M., Nunes, E. C., Ferreira, A., ... & Cortez, P. (2021). Using deep autoencoders for in-vehicle audio anomaly detection. Procedia Computer Science, 192, 298-307."
        },
        abstract: "Current developments on self-driving cars have increased the interest on autonomous shared taxicabs. While most self-driving technologies focus on the outside environment, there is also a need to provide in-vehicle intelligence (e.g., detect health and safety issues related with the car occupants). Set within an R&D project focused on in-vehicle cockpit intelligence, the research presented in this paper addresses an unsupervised Acoustic Anomaly Detection (AAD) task. Since data is nonexistent in this domain, we first design an in-vehicle sound event data simulator that can realistically mix background audios (recorded from car driving trips) with normal (e.g., people talking, radio on) and abnormal (e.g., people arguing, cough) event sounds, allowing the generation of three synthetic in-vehicle sound datasets. Then, we explore two main sound feature extraction methods (based on a combination of three audio features and mel frequency energy coefficients) and propose a novel Long Short-Term Memory Autoencoder (LSTM-AE) deep learning architecture for in-vehicle sound anomaly detection. Competitive results were achieved by the proposed LSTM-AE when compared with two state-of-the-art methods, namely a dense Autoencoder (AE) and a two-stage clustering.",
        absbox: "absPopup3"
    },
    {
        title : "Deep Dense and Convolutional Autoencoders for Unsupervised Anomaly Detection in Machine Condition Sounds",
        authors : "Alexandrine Ribeiro, Luis Miguel Matos, Pedro Jose Pereira, Eduardo C Nunes, Andre L Ferreira, Paulo Cortez, Andre Pilastri",
        conferences : "arXiv preprint arXiv:2006.10417",
        researchYr : 2020,
        citebox : "popup4",
        image : "assets/images/research-page/paper1.png",
        citation: {
            vancouver: "Ribeiro, A., Matos, L. M., Pereira, P. J., Nunes, E. C., Ferreira, A. L., Cortez, P., & Pilastri, A. (2020). Deep Dense and Convolutional Autoencoders for Unsupervised Anomaly Detection in Machine Condition Sounds. arXiv preprint arXiv:2006.10417."
        },
        abstract: "This technical report describes two methods that were developed for Task 2 of the DCASE 2020 challenge. The challenge involves an unsupervised learning to detect anomalous sounds, thus only normal machine working condition samples are available during the training process. The two methods involve deep autoencoders, based on dense and convolutional architectures that use melspectogram processed sound features. Experiments were held, using the six machine type datasets of the challenge. Overall, competitive results were achieved by the proposed dense and convolutional AE, outperforming the baseline challenge method.",
        absbox: "absPopup4"
    },
    {
        title : "False face detection with multispectral NIR image and proposal of a facial biometric system for presence control",
        authors : "Eduardo Carvalho Nunes",
        conferences : "IPB Library",
        researchYr : 2019,
        citebox : "popup5",
        image : "assets/images/research-page/paper5.jpg",
        citation: {
            vancouver: "Nunes, E. C. (2019). Deteção de face falsa com imagem NIR multiespectral e proposta de sistema biométrico facial para controle de presença (Master dissertation)."
        },
        abstract: "Presence control systems that use perform face authentication need fraud detectors more reliable. A system to able to detect this task automatically and correctly brings a number of practical advantages in the field of biometric authentication. For this problem, an anti-spoofing is developed and serves as a pre-step before face recognition. The proposed approach for false face detection is to use NIR infrared camera and machine learning with deep learning. In this dissertation, it was created a database of fake and real face images with an infrared camera. From the images, three datasets were created to implement the machine learning models: Decision Tree, Random Forest, KNN, SVM and MLP. For the construction of the face recognition prototype with anti-spoofing, the Python programming language, the OpenFace, Scikit-Learn, OpenCV and Flask programming libraries were used. From these trained tools and models it was possible to have an accuracy of 97.50% for detection of false faces and real faces with the SVM classifier. For face recognition, a reliable threshold (from 0 to 1) of 0.6 for systems using 1 to N format authentication and 0.25 to 1 to 1 format threshold is set. It is intended that the proposed prototype be tested on a network of attendance at IPB.",
        absbox: "absPopup5"
    },

];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

