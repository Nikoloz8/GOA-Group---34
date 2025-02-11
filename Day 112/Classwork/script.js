let cards = document.getElementById("cards")


class Animal {
    constructor(habitat, diet, hasFur, imgUrl) {
        this.habitat = habitat
        this.diet = diet
        this.hasFur = hasFur
        this.imgUrl = imgUrl
    }

    get renderCard() {
        cards.innerHTML += `
        <div class="card">
        <img src="${this.imgUrl}" alt="">
        <div class="info">
        <span><span>Habitat: </span>${this.habitat}</span>
        <br>
        <span><span>Diet: </span>${this.diet}</span>
        <br>
        <span><span>Has Fur: </span>${this.hasFur}</span>
        </div>
        </div>
        `
    }
}

const lion = new Animal('Savannah', 'Carnivore', "Yes", 'https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg');
const dolphin = new Animal('Ocean', 'Carnivore', "No", 'https://cff2.earth.com/uploads/2023/11/30185539/bottlenose-dolphin_1medium.jpg');
const koala = new Animal('Forest', 'Herbivore', "Yes", 'https://i.natgeofe.com/n/ec4956e6-d21d-4ce9-a6fd-b5e26bb94ba3/koala_thumb_4x3.JPG');
const eagle = new Animal('Mountains', 'Carnivore', "No", 'https://www.birdlife.org/wp-content/uploads/2021/06/Eagle-in-flight-Richard-Lee-Unsplash-1-edited-scaled.jpg');
const elephant = new Animal('Savannah', 'Herbivore', "No", 'https://www.humanesociety.org/sites/default/files/2024-03/elephants_401765.jpg');
const panda = new Animal('Forest', 'Herbivore', "Yes", 'https://www.georgetown.edu/wp-content/uploads/2023/11/GettyImages-1435288054-scaled.jpg');
const tiger = new Animal('Jungle', 'Carnivore', "Yes", 'https://www.pbs.org/wnet/nature/files/2020/06/black-white-and-yellow-tiger-sitting-on-a-beige-sand-during-47312-scaled.jpg');
const giraffe = new Animal('Savannah', 'Herbivore', "No", 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Selous_Game_Reserve-Girraffe.jpg');
const wolf = new Animal('Forest', 'Carnivore', "Yes", 'https://upload.wikimedia.org/wikipedia/commons/6/68/Eurasian_wolf_2.jpg');
const kangaroo = new Animal('Australia', 'Herbivore', "Yes", 'https://www.zoochat.com/community/media/western-grey-kangoroo-macropus-fuliginosus-melanops.497200/full');





lion.renderCard
dolphin.renderCard
koala.renderCard
elephant.renderCard
panda.renderCard
tiger.renderCard
giraffe.renderCard
wolf.renderCard
kangaroo.renderCard

lion.renderCard
dolphin.renderCard
koala.renderCard
elephant.renderCard
panda.renderCard
tiger.renderCard
giraffe.renderCard
wolf.renderCard
kangaroo.renderCard


lion.renderCard
dolphin.renderCard
koala.renderCard
elephant.renderCard
panda.renderCard
tiger.renderCard
giraffe.renderCard
wolf.renderCard
kangaroo.renderCard



lion.renderCard
dolphin.renderCard
koala.renderCard
elephant.renderCard
panda.renderCard
tiger.renderCard
giraffe.renderCard
wolf.renderCard
kangaroo.renderCard



lion.renderCard
dolphin.renderCard
koala.renderCard
elephant.renderCard
panda.renderCard
tiger.renderCard
giraffe.renderCard
wolf.renderCard
kangaroo.renderCard
