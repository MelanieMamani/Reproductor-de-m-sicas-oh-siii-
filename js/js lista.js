const play_pause_btn = document.getElementById("play-pause");
const play_pause_icon = document.getElementById("play-pause-icon");
const audio = document.getElementById("audio");
const progreso = document.getElementById("tiempo");
const next_btn = document.getElementById("next");
const atras_btn = document.getElementById("atras");
const volume_up_btn = document.getElementById("volume-up");
const volume_down_btn = document.getElementById("volume-down");
const invicible_btn = document.getElementById("invicible");
const cover_card_img = document.getElementById("cover-card-img");
const title_card = document.getElementById("title-card");
const artis_card = document.getElementById("artis-card");
const reacion_btn = document.getElementById("reaccion")

const canciones = [
  {
    id: 1,
    title: "SEVEN",
    audio: "audios/정국 (Jung Kook) 'Seven (feat. Latto)' Official MV - HYBE LABELS (3).mp3",
    cover: "img/64a6e33f9b78b60c262569ed.png",
    artist: "Jungkook",
  },
  {
    id: 2,
    title: "Antagonista",
    audio:
      "audios/Belén Aguilera - Antagonista - belenaguileraVEVO.mp3",
    cover: "img/antagonista.png",
    artist: "Belen Aguilera",
  },
  {
    id: 3,
    title: "feather",
    audio:
      "audios/Sabrina Carpenter - Feather (Official Video) - SabrinaCarpenterVEVO.mp3",
    cover: "img/feader.png",
    artist: "Sabrina Carpenter",
  },
];

const renderizar_canciones = (arr)=>{
  invicible_btn.innerHTML = "";
  arr.forEach((e) => {
    invicible_btn.insertAdjacentHTML(
      "beforeend",
      `
      <div class="list-item" id="${e.id}">
          <img class="cover" src="${e.cover}" alt="${e.title}">
          <div class="song-data">
              <div>${e.title}</div>
              <div>${e.artist}</div>
          </div>
      </div>
      `
    );
  });
}
const play_card = (obj_audio) => {
  const cover_card_img = document.getElementById("cover-card-img");
  cover_card_img.src = obj_audio.cover;
  title_card.innerHTML = obj_audio.title;
  artis_card.innerHTML = obj_audio.artist;
  index = obj_audio.id; 
};
const play_audio = (id) => {
  const res = canciones.find((e) => e.id == id);
  if (res) {
    audio.src = res.audio;
    audio.play();
    play_card(res);
    animacion_play();
  }
};
invicible_btn.addEventListener("click", (e) => {
  if (e.target.matches(".list-item")) {
    play_audio(e.target.id);
  } else if (e.target.matches(".cover")) {
    play_audio(e.target.parentNode.id);
  } else if (e.target.matches(".song-data")) {
    play_audio(e.target.parentNode.id);
  } else if (e.target.matches(".song-data div")) {
    play_audio(e.target.parentNode.parentNode.id);
  }
});

const animacion_play = () => {
  cover_card_img.style.animationPlayState = "running";
  play_pause_icon.classList.add("fa-pause");
  play_pause_icon.classList.remove("fa-play");
  is_playing = true;
};

const animacion_pause = () => {
  cover_card_img.style.animationPlayState = "paused";
  play_pause_icon.classList.add("fa-play");
  play_pause_icon.classList.remove("fa-pause");
  is_playing = false;
};
let is_playing = false;
play_pause_btn.addEventListener("click", () => {
  if (is_playing) {
    audio.pause();
    animacion_pause();
  } else {
    audio.play();
    animacion_play();
  }
});

window.addEventListener('load',()=>{
  progreso.max = audio.duration;
  progreso.min = 0
  setInterval(()=>{
    progreso.value = audio.currentTime;
  }, 500);
  progreso.addEventListener('change',()=>{
    audio.currentTime = progreso.value
  });
});

next_btn.addEventListener("click",()=>{
  if(index < canciones.length){
    index++;
    play_audio(index);
  }
});
atras_btn.addEventListener("click",()=>{
  if(index > 0){
    index--;
    play_audio(index);
  }
});
renderizar_canciones(canciones);

const buscar_input = document.getElementById("buscar-input");

buscar_input.addEventListener('keyup',(event)=>{
  let filtrado = canciones.filter((e)=>
  e.title.toLocaleLowerCase().includes(buscar_input.value.toString().toLocaleLowerCase()));
  renderizar_canciones(filtrado);
})

tiempo.addEventListener("change",()=>{
  audio.currentTime=tiempo.value;
})

volume_up_btn.addEventListener('click',()=>{
  audio.volume = audio.volume + 0.1;
})
volume_down_btn.addEventListener('click',()=>{
  audio.volume = audio.volume - 0.1;
})
reacion_btn.addEventListener('click',likear);

let estado = 0;
function likear(){
  if(estado === 0){
    reacion_btn.classList.add('reaccion-activa');
    estado = 1;
  }
  else if(estado === 1){
    reacion_btn.classList.remove('reaccion-activa');
    estado = 0;
  }
}