function FavorableGame() {
    let FavorableGame = window.prompt('Which game is more favorable to you, Minecraft or Terraria?');
    let FavorableGameHTML = document.getElementById ('FavorableGame');
    FavorableGameHTML.innerText = FavorableGame
}
console.log('Running JavaScript...')

function ChangeGame() {
    console.log('Changing name...')
    let NewGame = window.prompt('Choose a new game');
    let NameElements = document.querySelectorAll('Minecraft')
    for (let i = 0; i < NameElements.length; i++) {
        NameElements[i].innerText = NewGame;
    }
    console.log(NameElements);
}

document.getElementById('FavorableGame').innerText = '____';

document.getElementById('FavorableGameButton').onclick = FavorableGame;

function FavorableDevice() {
    let FavorableDevice = window.prompt('What is your favorite device to play on?');
    let FavorableDeviceHTML = document.getElementById ('FavorableDevice');
    FavorableDeviceHTML.innerText = FavorableDevice
}
console.log('Running JavaScript.....')

function ChangeDevice() {
    console.log('Changing name.....')
    let NewDevice = window.prompt('Choose your favorite device to play on.');
    let NameElements = document.querySelectorAll('PC')
    for (let i = 0; i < NameElements.length; i++) {
        NameElements[i].innerText = NewDevice;
    }
    console.log(NameElements);
}
document.getElementById('FavorableDevice').innerText = '____';

document.getElementById('FavorableDeviceButton').onclick = FavorableDevice;

function TerrariaRating() {
    let TerrariaRating = window.prompt('Rate Terraria outta ten.');
    let TerrariaRatingHTML = document.getElementById ('TerrariaRating');
    TerrariaRatingHTML.innerText = TerrariaRating
}
document.getElementById('TerrariaRating').innerText = ' ____';

document.getElementById('Value').onclick = TerrariaRating;

console.log('Running JavaScript.......')

console.log('Done Running JavaScript')

