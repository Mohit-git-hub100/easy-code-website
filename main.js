// Geting Element from HTML
let player_score_text = document.querySelector('.player-score-text');
let computer_score_text = document.querySelector('.computer-score-text');

let stone_option_computer = document.querySelector('.stone-option-computer');
let paper_option_computer = document.querySelector('.paper-option-computer');
let scissors_option_computer = document.querySelector('.scissors-option-computer');

let computer_choice_text = document.querySelector('.computer-choice-text')
let winner_text = document.querySelector('.winner-text')

let option_box_player = document.querySelectorAll('.option-box-player');
let option_box_computer = document.querySelectorAll('.option-box-computer');

let stone_option_player = document.querySelector('.stone-option-player');
let paper_option_player = document.querySelector('.paper-option-player');
let scissors_option_player = document.querySelector('.scissors-option-player');

let overlay_blur = document.querySelector('.overlay-blur')
let alert_screen = document.querySelector('.alert-screen')
let alert_close = document.querySelector('.alert-close')

let options = ['stone','paper','scissors']

let computer_win_count = 0;
let player_win_count = 0;


// Performing player option function 
stone_option_player.addEventListener('click',() => {
  let random_number = Math.floor(Math.random() * 3)
  let random_choice = options[random_number]
  
  if (random_choice === 'stone') {
    computer_choice_text.textContent = 'Computer: Stone'
    winner_text.textContent = 'Tie!'
  }
  else if (random_choice === 'paper') {
    computer_choice_text.textContent = 'Computer: Paper'
    winner_text.textContent = 'You Lost!'
    computer_win_count += 1;
    computer_score_text.textContent = computer_win_count
  }
  else if (random_choice === 'scissors') {
    computer_choice_text.textContent = 'Computer: Scissors'
    winner_text.textContent = 'You Win!'
    player_win_count += 1;
    player_score_text.textContent = player_win_count
  }
})


paper_option_player.addEventListener('click',() => {
  let random_number = Math.floor(Math.random() * 3)
  let random_choice = options[random_number]
  
  if (random_choice === 'paper') {
    computer_choice_text.textContent = 'Computer: Paper'
    winner_text.textContent = 'Tie!'
  }
  else if (random_choice === 'scissors') {
    computer_choice_text.textContent = 'Computer: Scissors'
    winner_text.textContent = 'You Lost!'
    computer_win_count += 1;
    computer_score_text.textContent = computer_win_count
  }
  else if (random_choice === 'stone') {
    computer_choice_text.textContent = 'Computer: Stone'
    winner_text.textContent = 'You Win!'
    player_win_count += 1;
    player_score_text.textContent = player_win_count
  }
})

scissors_option_player.addEventListener('click',() => {
  let random_number = Math.floor(Math.random() * 3)
  let random_choice = options[random_number]
  
  if (random_choice === 'scissors') {
    computer_choice_text.textContent = 'Computer: Scissors'
    winner_text.textContent = 'Tie!'
  }
  else if (random_choice === 'stone') {
    computer_choice_text.textContent = 'Computer: Stone'
    winner_text.textContent = 'You Lost!'
    computer_win_count += 1;
    computer_score_text.textContent = computer_win_count
  }
  else if (random_choice === 'paper') {
    computer_choice_text.textContent = 'Computer: Paper'
    winner_text.textContent = 'You Win!'
    player_win_count += 1;
    player_score_text.textContent = player_win_count
  }
})

option_box_computer.forEach((option_bc) => {
  option_bc.addEventListener('click',() => {
    overlay_blur.style.display = 'flex'
    
    
    alert_screen.style.display = 'flex'
    alert_screen.offsetHeight
    alert_screen.style.opacity = '1'
    
    overlay_blur.offsetHeight
    overlay_blur.style.opacity = '1'
  })
})

alert_close.addEventListener('click',() => {
    overlay_blur.offsetHeight
    overlay_blur.style.opacity = '0'
    overlay_blur.style.display = 'none'
    
    
    alert_screen.style.display = 'none'
    alert_screen.offsetHeight
    alert_screen.style.opacity = '0'
    
    overlay_blur.offsetHeight
    overlay_blur.style.opacity = '0'
})