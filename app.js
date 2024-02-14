
// // MODAL AJOUTER UN UTILISATEUR 
    
// const modalContainer = document.querySelector(".modal-container");
// const modalTriggers = document.querySelectorAll(".modal-trigger-ajouter");

// modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

// function toggleModal() {
//     modalContainer.classList.toggle("active")
// }

// //MODAL MODIFIER UN UTILISATEUR 
// const modalContainerModifier = document.querySelector(".modifier-container");
// const modalTriggersModifier = document.querySelectorAll(".modal-trigger-modifier");

// modalTriggersModifier.forEach(trigger => {
//     trigger.addEventListener("click", toggleModalModifier);
// });

// function toggleModalModifier() {
//     modalContainerModifier.classList.toggle("active");
// }

// //MODAL SUPP UN UTILISATEUR 
// const modalContainerSupprimer = document.querySelector(".supprimer-container");
// const modalTriggersSupprimer = document.querySelectorAll(".modal-trigger-supprimer");

// modalTriggersSupprimer.forEach(trigger => {
//     trigger.addEventListener("click", toggleModalSupprimer);
// });

// function toggleModalSupprimer() {
//     modalContainerSupprimer.classList.toggle("active");
// }

//MODAL===========================================================================

    function setupModal(modalContainerClass, modalTriggerClass) {
        const modalContainer = document.querySelector(modalContainerClass);
        const modalTriggers = document.querySelectorAll(modalTriggerClass);

        modalTriggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                modalContainer.classList.toggle("active");
            });
        });
    }
    // Modal AJOUOTER un Utilisateur
        setupModal(".modal-container", ".modal-trigger-ajouter");

    // Modal Modifier un administrateur
        setupModal(".modifier-container", ".modal-trigger-modifier");

    // Modal Supprimer un administrateur
        setupModal(".supprimer-container", ".modal-trigger-supprimer");

    // Modal Modifier un Utilisateur
        setupModal(".modifier-container-user", ".modal-trigger-modifier-user");

    // Modal Supprimer un Utilisateur
        setupModal(".supprimer-container-user", ".modal-trigger-supprimer-user");

//MODAL===========================================================================




// //CHAT============================================================================
//         // Récupérer la section de la fenêtre de chat
//             const chatSection = document.getElementById('elementToToggle');
//         // Récupérer le bouton pour activer/désactiver la fenêtre de chat
//              const chatToggleButton = document.getElementById('toggleButton');
//         // Fonction pour activer ou désactiver la fenêtre de chat
//             function toggleChatWindow() {
//                 if (chatSection.style.display === 'none') {
//             // Si la fenêtre de chat est désactivée, l'activer
//                 chatSection.style.display = 'block';
//             // Modifier les colonnes de la grille pour utiliser la disposition spécifiée
//                 document.querySelector('.fenetre').style.gridTemplateColumns = 'calc(70% - 0.5em) calc(30% - 0.5em)';
//             // Désactiver la section des participants si elle est activée
//                 participantSection.style.display = 'none';
//                 } else {
//             // Sinon, désactiver la fenêtre de chat
//                 chatSection.style.display = 'none';
//             // Rétablir la disposition par défaut avec la section visio prenant 100% de la largeur
//                 document.querySelector('.fenetre').style.gridTemplateColumns = '100%';
//             }
//         }
//         // Ajouter un écouteur d'événements pour le clic sur le bouton ou toute autre action qui active/désactive la fenêtre de chat
//             chatToggleButton.addEventListener('click', toggleChatWindow);
// //CHAT============================================================================

// //PARTICIPANT============================================================================
//         // Récupérer la section des participants
//             const participantSection = document.getElementById('ParticipantToToggle');
//         // Récupérer le bouton pour activer/désactiver la section des participants
//             const participantToggleButton = document.getElementById('toggleButtonParticipant');
//         // Fonction pour activer ou désactiver la fenêtre des participants
//             function toggleparticipantWindow() {
//                 if (participantSection.style.display === 'none') {
//             // Si la fenêtre des participants est désactivée, l'activer
//                 participantSection.style.display = 'block';
//             // Modifier les colonnes de la grille pour utiliser la disposition spécifiée
//                 document.querySelector('.fenetre').style.gridTemplateColumns = 'calc(75% - 0.5em) calc(25% - 0.5em)';
//             // Désactiver la fenêtre de chat si elle est activée
//                 chatSection.style.display = 'none';
//                 } else {
//             // Sinon, désactiver la fenêtre des participants
//                 participantSection.style.display = 'none';
//             // Rétablir la disposition par défaut avec la section visio prenant 100% de la largeur
//                 document.querySelector('.fenetre').style.gridTemplateColumns = '100%';
//             }
//         }
//         // Ajouter un écouteur d'événements pour le clic sur le bouton ou toute autre action qui active/désactive la fenêtre des participants
//             participantToggleButton.addEventListener('click', toggleparticipantWindow);
// //PARTICIPANT============================================================================


//CHAT============================================================================
const chatToggleButton = document.getElementById('toggleButton');
const chatSection = document.getElementById('elementToToggle');

function toggleChatWindow() {
    const computedStyle = window.getComputedStyle(chatSection);
    const currentDisplay = computedStyle.getPropertyValue('display');
    
    if (currentDisplay === 'none') {
        chatSection.style.display = 'block';
        document.querySelector('.fenetre').style.gridTemplateColumns = 'calc(70% - 0.5em) calc(30% - 0.5em)';
        // Désactiver la section des participants si elle est activée
        if (participantSection.style.display !== 'none') {
            participantSection.style.display = 'none';
        }
    } else {
        chatSection.style.display = 'none';
        document.querySelector('.fenetre').style.gridTemplateColumns = '100%';
    }
}

chatToggleButton.addEventListener('click', toggleChatWindow);
//CHAT============================================================================

//PARTICIPANT============================================================================
const participantToggleButton = document.getElementById('toggleButtonParticipant');
const participantSection = document.getElementById('ParticipantToToggle');

function toggleparticipantWindow() {
    const computedStyle = window.getComputedStyle(participantSection);
    const currentDisplay = computedStyle.getPropertyValue('display');
    
    if (currentDisplay === 'none') {
        participantSection.style.display = 'block';
        document.querySelector('.fenetre').style.gridTemplateColumns = 'calc(75% - 0.5em) calc(25% - 0.5em)';
        // Désactiver la fenêtre de chat si elle est activée
        if (chatSection.style.display !== 'none') {
            chatSection.style.display = 'none';
        }
    } else {
        participantSection.style.display = 'none';
        document.querySelector('.fenetre').style.gridTemplateColumns = '100%';
    }
}

participantToggleButton.addEventListener('click', toggleparticipantWindow);
//PARTICIPANT============================================================================



// MICRO & CAMERA ON/OFF
    // Récupérer le bouton, l'icône et le texte
        const toggleMicrophone = document.getElementById('toggleMicrophone');
        const icon = document.getElementById('icon');
        const buttonText = document.getElementById('buttonText');

    // Ajouter un écouteur d'événements pour le clic sur le bouton
        toggleMicrophone.addEventListener('click', function() {
            // Changer l'icône et le texte en fonction de sa classe actuelle
                if (icon.classList.contains('fa-microphone')) {
            // Si l'icône est un microphone, la changer en microphone barré et modifier le texte
                    icon.classList.remove('fa-microphone');
                    icon.classList.add('fa-microphone-slash');
                    buttonText.textContent = "Activer le micro";
                } else {
            // Sinon, si l'icône est un microphone barré, la changer en microphone et modifier le texte
                    icon.classList.remove('fa-microphone-slash');
                    icon.classList.add('fa-microphone');
                    buttonText.textContent = "Coupez le micro";

                }
        });

    // Récupérer le bouton, l'icône et le texte
        const toggleCamera = document.getElementById('toggleCamera');
        const cameraIcon = document.getElementById('cameraIcon');
        const cameraButtonText = document.getElementById('cameraButtonText');

    // Ajouter un écouteur d'événements pour le clic sur le bouton
        toggleCamera.addEventListener('click', function() {
            // Changer l'icône et le texte en fonction de sa classe actuelle
                if (cameraIcon.classList.contains('fa-video')) {
            // Si l'icône est une caméra, la changer en caméra barrée et modifier le texte
                    cameraIcon.classList.remove('fa-video');
                    cameraIcon.classList.add('fa-video-slash');
                    cameraButtonText.textContent = "Activer la caméra";
                } else {
            // Sinon, si l'icône est une caméra barrée, la changer en caméra et modifier le texte
                    cameraIcon.classList.remove('fa-video-slash');
                    cameraIcon.classList.add('fa-video');
                    cameraButtonText.textContent = "Coupez la caméra";
                }
        });


