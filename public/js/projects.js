$('.delete-project').click(function(e) {
  console.log('button pushed');
  e.preventDefault();
  if (confirm('Really delete?')) {
    window.document.location = "/projects/delete/" + $(this).data('project-id')
  }
});

$('.delete-subproject').click(function(e) {
  console.log('delete subproject!')
  e.preventDefault();
  if (confirm('Really delete?')) {
    window.document.location = $(this).data('href')
  }
});
