// Funktion til at vise en fejlmeddelelse i en alertboks eller konsollen
function ErrorDisplay(type, message) {
    if (type === 'alert') {
        // Vis en alertboks med beskeden
        alert(message);
    } else if (type === 'consoleError') {
        // Skriv fejlmeddelelsen til konsollen som en fejl
        console.error(message);
    } else if (type === 'consoleWarning') {
        // Skriv fejlmeddelelsen til konsollen som en advarsel
        console.warn(message);
    } else {
        console.error('Ugyldig fejltype: ' + type);
    }
}

// Funktion til at vise brugerfeedback i et DOM-element eller oprette det dynamisk
function UserFeedback(domElementId, message, type) {
    let element = document.getElementById(domElementId);

    // Opret DOM-elementet dynamisk, hvis det ikke findes
    if (!element) {
        element = document.createElement('div');
        element.id = domElementId;
        document.body.appendChild(element);
    }

    // Opret et nyt element til feedback-meddelelsen
    const feedbackElement = document.createElement('div');
    feedbackElement.textContent = message;

    // Afhængigt af typen af besked, tilføj den relevante CSS-klasse
    if (type === 'fejl') {
        feedbackElement.classList.add('fejl-klasse');
    } else if (type === 'advarsel') {
        feedbackElement.classList.add('advarsel-klasse');
    } else if (type === 'succes') {
        feedbackElement.classList.add('succes-klasse');
    } else {
        console.error('Ugyldig beskedtype: ' + type);
        return;
    }

    // Tilføj feedback-elementet til det angivne DOM-element
    element.appendChild(feedbackElement);
}

// Eksempel på brug af ErrorDisplay for at vise en alertboks med en fejlmeddelelse
ErrorDisplay('alert', 'Dette er en fejlmeddelelse i en alertboks');

// Eksempel på brug af ErrorDisplay for at skrive en fejlmeddelelse til konsollen
ErrorDisplay('consoleError', 'Dette er en fejlmeddelelse i konsollen');

// Eksempel på brug af ErrorDisplay for at skrive en konsoladvarsel
ErrorDisplay('consoleWarning', 'Dette er en konsoladvarsel');

// Eksempel på brug af UserFeedback for at vise en succesbesked i et DOM-element med id 'feedback-container'
UserFeedback('feedback-container', 'Handlingen blev udført med succes', 'succes');
