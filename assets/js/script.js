function getCardData() {
    fetch("./assets/data/projects.json")
        .then(res => res.json())
        .then((res) => res.forEach((element) => {
            buildCardData(element.image, element.altImage, element.title, element.date, element.description, element.imgInButton, element.linkInButton, res)

        }))
}


function buildCardData(image, altImage, title, date, description, imgInButton, linkInButton, res) {

    let cardContainer = document.querySelector(".card-container")

    // card
    let card = document.createElement("article")
    card.classList.add("card")
    cardContainer.appendChild(card)

    // header
    let header = document.createElement("header")
    card.appendChild(header)

    // img in header

    let imgInHeader = document.createElement('img')
    imgInHeader.src = `${image}`
    imgInHeader.setAttribute("alt", `${altImage}`)
    imgInHeader.setAttribute("draggable", "false")
    header.appendChild(imgInHeader)

    // title

    let h3Title = document.createElement('h3')
    h3Title.textContent = `${title}`
    card.appendChild(h3Title)

    // date

    let h4date = document.createElement('h4')
    h4date.textContent = `${date}`
    card.appendChild(h4date)

    // description

    let pDescription = document.createElement('p')
    pDescription.textContent = `${description}`
    card.appendChild(pDescription)

    // button

    let buttonLink = document.createElement('div')
    buttonLink.classList.add("button-container")
    card.appendChild(buttonLink)

    // Link in button

    let linkButton = document.createElement('a')
    linkButton.setAttribute("target", "blank")
    linkButton.setAttribute("href", `${linkInButton}`)
    linkButton.textContent = 'Voir plus'
    buttonLink.appendChild(linkButton)

}

getCardData()