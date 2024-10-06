let texts = [
    { texte: "2 Timothée 4:18", sous_texte: "Le Seigneur me délivrera de toute œuvre mauvaise, et il me sauvera pour me faire entrer dans son royaume céleste. A lui soit la gloire aux siècles des siècles! Amen!" },
    { texte: "Jacques 1:18", sous_texte: "Il nous a engendrés selon sa volonté, par la parole de vérité, afin que nous soyons en quelque sorte les prémices de ses créatures." },
    { texte: "Matthieu 24:45-47", sous_texte: "Quel est donc le serviteur fidèle et prudent, que son maître a établi sur ses gens, pour leur donner la nourriture au temps convenable? Heureux ce serviteur, que son maître, à son arrivée, trouvera faisant ainsi! Je vous le dis en vérité, il l’établira sur tous ses biens." },
    { texte: "Jean 14:29", sous_texte: "Et maintenant je vous ai dit ces choses avant qu’elles arrivent, afin que, lorsqu’elles arriveront, vous croyiez." },
    { texte: "2 Pierre 1:21", sous_texte: "Car ce n’est pas par une volonté d’homme qu’une prophétie a jamais été apportée, mais c’est poussés par le Saint-Esprit que des hommes ont parlé de la part de Dieu." },
    { texte: "Exode 19:5-6", sous_texte: "Maintenant, si vous écoutez ma voix, et si vous gardez mon alliance, vous m’appartiendrez entre tous les peuples, car toute la terre est à moi; vous serez pour moi un royaume de sacrificateurs et une nation sainte.Voilà les paroles que tu diras aux enfants d'Israël" },
    { texte: "Ésaïe 14:12-15", sous_texte: "Te voilà tombé du ciel, Astre brillant, fils de l’aurore! Tu es abattu à terre, Toi, le vainqueur des nations! Tu disais en ton cœur: Je monterai au ciel, J’élèverai mon trône au-dessus des étoiles de Dieu; Je m’assiérai sur la montagne de l’assemblée, A l’extrémité du septentrion; Je monterai sur le sommet des nues, Je serai semblable au Très-Haut. Mais tu as été précipité dans le séjour des morts, Dans les profondeurs de la fosse." },
    { texte: "1 Jean 4:1", sous_texte: "Bien-aimés, n’ajoutez pas foi à tout esprit; mais éprouvez les esprits, pour savoir s’ils sont de Dieu, car plusieurs faux prophètes sont venus dans le monde." },
    { texte: "Jean 4:24", sous_texte: "Dieu est Esprit, et il faut que ceux qui l’adorent l’adorent en esprit et en vérité." },
    { texte: "Jean 1:1", sous_texte: "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu." },
    { texte: "Genèse 1:1", sous_texte: "Au commencement, Dieu créa les cieux et la terre." },
    { texte: "Matthieu 3:16", sous_texte: "Dès que Jésus eut été baptisé, il sortit de l’eau. Et voici, les cieux s’ouvrirent, et il vit l’Esprit de Dieu descendre comme une colombe et venir sur lui." },
    { texte: "Ézékiel 47:12", sous_texte: "Sur le torrent, sur ses bords de chaque côté, croîtront toutes sortes d’arbres fruitiers. Leur feuillage ne se flétrira point, et leurs fruits n’auront point de fin, ils mûriront tous les mois, parce que les eaux sortiront du sanctuaire. Leurs fruits serviront de nourriture, et leurs feuilles de remède." },
    { texte: "Jean 15:5", sous_texte: "Je suis le cep, vous êtes les sarments. Celui qui demeure en moi et en qui je demeure porte beaucoup de fruit, car sans moi vous ne pouvez rien faire." },
    { texte: "Ésaïe 5:7", sous_texte: "La vigne de l’Éternel des armées, c’est la maison d’Israël, Et les hommes de Juda, c’est le plant qu’il chérissait. Il avait espéré de la droiture, et voici du sang versé! De la justice, et voici des cris de détresse!" },
    { texte: "Matthieu 13:31-32", sous_texte: "Il leur proposa une autre parabole, et il dit: Le royaume des cieux est semblable à un grain de sénevé qu’un homme a pris et semé dans son champ. C’est la plus petite de toutes les semences; mais, quand il a poussé, il est plus grand que les légumes et devient un arbre, de sorte que les oiseaux du ciel viennent habiter dans ses branches." },
    { texte: "Jean 1:12-13", sous_texte: "Mais à tous ceux qui l’ont reçue, à ceux qui croient en son nom, elle a donné le pouvoir de devenir enfants de Dieu, lesquels sont nés, non du sang, ni de la volonté de la chair, ni de la volonté de l’homme, mais de Dieu." },
    { texte: "Matthieu 13:10-11", sous_texte: "Les disciples s’approchèrent, et lui dirent: Pourquoi leur parles-tu en paraboles? Jésus leur répondit: Parce qu’il vous a été donné de connaître les mystères du royaume des cieux, et que cela ne leur a pas été donné." },
    { texte: "Luc 22:20", sous_texte: "Il prit de même la coupe, après le souper, et la leur donna, en disant: Cette coupe est la nouvelle alliance en mon sang, qui est répandu pour vous." },
    { texte: "Apocalypse 21:6", sous_texte: "Et il me dit: C’est fait! Je suis l’alpha et l’oméga, le commencement et la fin. A celui qui a soif je donnerai de la source de l’eau de la vie, gratuitement." },
    { texte: "2 Timothée 3:16-17", sous_texte: "Toute Écriture est inspirée de Dieu, et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice, afin que l’homme de Dieu soit accompli et propre à toute bonne œuvre." },
    { texte: "1 Corinthiens 10:11", sous_texte: "Ces choses leur sont arrivées pour servir d’exemples, et elles ont été écrites pour notre instruction, à nous qui sommes parvenus à la fin des siècles." }
];

const securityHash = '81fe8bfe87576c3ecb22426f8e57847382917acf';  


function hashCode(str) {
    return CryptoJS.SHA1(str).toString();  // Utiliser CryptoJS pour hasher
}

// Sauvegarder les données dans le LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('texts', JSON.stringify(texts));
}

// Fonction pour vérifier le code de sécurité
function checkSecurityCode(actionCallback) {
    const code = prompt("Entrez le code de sécurité pour effectuer cette action :");
    if (hashCode(code) === securityHash) {
        actionCallback(); // Exécuter l'action si le code est correct
    } else {
        alert("Code de sécurité incorrect !");
    }
}

let selectedTexts = [];
let currentText = null;

// Fonction pour sélectionner un texte sans répétition
function selectRandomText() {
    if (selectedTexts.length === texts.length) {
        selectedTexts = [];
    }

    let nonSelectedTexts = texts.filter(t => !selectedTexts.includes(t));
    currentText = nonSelectedTexts[Math.floor(Math.random() * nonSelectedTexts.length)];
    selectedTexts.push(currentText);

    document.getElementById('selectedText').innerText = `${currentText.texte}`;
    document.getElementById('revealBtn').disabled = false;
    document.getElementById('revealedText').innerText = '';
}

function revealSubText() {
    const revealedTextElement = document.getElementById('revealedText');
    const revealBtn = document.getElementById('revealBtn');

    if (currentText) {
        // Si le sous-texte est déjà affiché, le cacher
        if (revealedTextElement.innerText !== '') {
            revealedTextElement.innerText = '';
            revealBtn.innerText = 'Afficher le sous-texte'; // Changer le texte du bouton
        } else {
            // Sinon, afficher le sous-texte
            revealedTextElement.innerText = `${currentText.sous_texte}`;
            revealBtn.innerText = 'Cacher le sous-texte'; // Changer le texte du bouton
        }
    }
}

// Fonction pour ajouter un nouveau texte
function addText() {
    checkSecurityCode(() => {
        const newText = document.getElementById('newText').value;
        const newSubText = document.getElementById('newSubText').value;

        if (newText && newSubText) {
            texts.push({ texte: newText, sous_texte: newSubText });
            saveToLocalStorage(); // Sauvegarder les modifications
            alert("Texte ajouté avec succès !");

            document.getElementById('newText').value = '';
            document.getElementById('newSubText').value = '';
            viewAllTexts();
        } else {
            alert("Veuillez entrer un texte et un sous-texte.");
        }
    });
}

// Fonction pour afficher ou masquer tous les textes et sous-textes
function viewAllTexts() {
    const allTextsElement = document.getElementById('allTexts');
    const viewAllBtn = document.getElementById('viewAllBtn'); // Le bouton qui permet d'afficher/masquer

    if (allTextsElement.innerHTML === '') {
        // Si la liste est vide, on affiche les éléments
        texts.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerText = `Texte : ${item.texte}, Sous-texte : ${item.sous_texte}`;

            // Ajouter un bouton pour supprimer
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Supprimer';
            deleteBtn.onclick = () => {
                checkSecurityCode(() => {
                    texts.splice(index, 1);
                    saveToLocalStorage(); // Sauvegarder les modifications après suppression
                    viewAllTexts(); // Rafraîchir la liste après la suppression
                });
            };

            // Ajouter un bouton pour modifier
            const editBtn = document.createElement('button');
            editBtn.innerText = 'Modifier';
            editBtn.onclick = () => {
                checkSecurityCode(() => {
                    // Remplir les champs d'entrée avec le texte et le sous-texte
                    document.getElementById('newText').value = item.texte;
                    document.getElementById('newSubText').value = item.sous_texte;
                    currentText = item; // Conserver la référence à l'élément courant pour mise à jour
                });
            };

            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            allTextsElement.appendChild(li);
        });

        viewAllBtn.innerText = 'Cacher tous les versets'; // Changer le texte du bouton
    } else {
        // Si les éléments sont déjà affichés, on les cache
        allTextsElement.innerHTML = '';
        viewAllBtn.innerText = 'Afficher tous les versets'; // Revenir au texte initial du bouton
    }
}

// Fonction pour mettre à jour un texte existant
function updateText() {
    checkSecurityCode(() => {
        const newText = document.getElementById('newText').value;
        const newSubText = document.getElementById('newSubText').value;

        if (newText && newSubText && currentText) {
            // Mettre à jour le texte et le sous-texte de l'élément courant
            currentText.texte = newText;
            currentText.sous_texte = newSubText;

            saveToLocalStorage(); // Sauvegarder les modifications après la mise à jour
            alert("Texte modifié avec succès !");

            document.getElementById('newText').value = '';
            document.getElementById('newSubText').value = '';
            viewAllTexts(); // Rafraîchir la liste pour afficher les modifications
        } else {
            alert("Veuillez entrer un texte et un sous-texte valides.");
        }
    });
}

// Charger les données du LocalStorage lorsque la page est chargée
window.onload = function() {
    loadFromLocalStorage();
    viewAllTexts();
};

// Event listeners pour les boutons
document.getElementById('selectBtn').addEventListener('click', selectRandomText);
document.getElementById('revealBtn').addEventListener('click', revealSubText);
document.getElementById('addBtn').addEventListener('click', addText);
document.getElementById('viewAllBtn').addEventListener('click', viewAllTexts);
document.getElementById('updateBtn').addEventListener('click', updateText);