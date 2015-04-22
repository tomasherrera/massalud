# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on 'click', '.number-spinner button', ->
  btn = $(this)
  oldValue = btn.closest('.number-spinner').find('input').val().trim()
  newVal = 0
  if btn.attr('data-dir') == 'up'
    newVal = parseInt(oldValue) + 1
  else
    if oldValue > 1
      newVal = parseInt(oldValue) - 1
    else
      newVal = 1
  btn.closest('.number-spinner').find('input').val newVal
  return
