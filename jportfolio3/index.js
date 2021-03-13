var notify = document.querySelector('.notify')
var albums = document.querySelectorAll('.album')
var itemsTotal = document.querySelector('.items-total')
var saveBtn = document.querySelector('.button')

var albumsSelected = []
var i = 0

while(i < albums.length) {
  albums[i].onclick = function(e) {
    var albumTitle = this.querySelector('.title').textContent

    if (this.classList.contains('selected') !== true) {
      this.classList.add('selected')
      albumsSelected.push(albumTitle)
    } else {
      this.classList.remove('selected')
      albumsSelected = albumsSelected.filter(function(item) {
        return item !== albumTitle
      })
    }
    console.log(albumsSelected)
  }
  i++
}

saveBtn.onclick = function() {
  itemsTotal.textContent = albumsSelected.length + ' items saved'
  notify.classList.add('active')

  setTimeout(function(){
    notify.classList.remove('active')
  }, 2000)

  console.log('saved')
}


















// click album
// show user he selected album so we add a class selected to the album div
// create an array and then add the albums title we selected to that array
// find out the total of the albums selected
// save button is clicked then  when its clicked show notification with saved items total
