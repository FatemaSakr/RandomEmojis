let btnEl = document.querySelector('.btn');
let emojiNameEl = document.querySelector('.emoji-name');
let emoji = [];

async function getEmoji(){
    let response = await fetch('https://emoji-api.com/emojis?access_key=55bfc9650fdcab0fde7d65274aaf2df3546e10e4');

    let data = await response.json();
    for (let index = 0; index < data.length; index++) {
        emoji.push({
            emojiName: data[index].character,
            emojiDes: data[index].unicodeName,
        })
        
    }
    
    console.log(data)
}

getEmoji()
btnEl.addEventListener('click',()=>{
    let random = Math.floor(Math.random() * emoji.length);
    btnEl.textContent= emoji[random].emojiName;
    emojiNameEl.textContent= emoji[random].emojiDes;
})