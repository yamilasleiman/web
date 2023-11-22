window.addEventListener('DOMContentLoaded', function() {
      var eventInput = document.getElementById('event');
      var textColorSelect = document.getElementById('text-color');
      var fontSizeSelect = document.getElementById('font-size');
      var amountInput = document.getElementById('amount');
      var locationSelect = document.getElementById('location');


      var previewTitle = document.getElementById('preview-title');
      var previewDateTime = document.getElementById('preview-datetime');
      var previewAmount = document.getElementById('preview-amount');
      var previewCard = document.getElementById('preview-card');
      var recipientInput = document.getElementById('recipient');
      var previewRecipient = document.getElementById('preview-recipient');

var fontSizeSelect = document.getElementById('font-size');
var previewTitle = document.getElementById('preview-title');
var previewDate = document.getElementById('preview-date');
var inputFields = document.getElementsByClassName('input-field');

      function updatePreview() {
        var eventText = eventInput.value;
        var textColor = textColorSelect.value;
        var fontSize = fontSizeSelect.value + 'px';
        var amountText = amountInput.value;
        var location = locationSelect.value;

        previewTitle.innerText = eventText;
        previewTitle.style.color = textColor;

        var currentDate = new Date();
        // var dateTimeText = currentDate.toLocaleString(); //CAMBIO P- SACAR HORA

        previewDateTime.innerText = currentDate.toLocaleDateString(); // solo muestra la fecha

        // previewDateTime.innerText = dateTimeText; //CAMBIO P- SACAR HORA
        // previewDateTime.style.color = textColor; //CAMBIO P- SACAR HORA
        var recipientText = recipientInput.value;
        previewRecipient.innerText = recipientText; /*'Destinatario: ' +  // LO SAQUE */

        previewAmount.innerText = 'Valor:$ ' + amountText;
        previewAmount.style.textAlign = location;


        previewCard.style.fontSize = fontSize;

var fontSize = fontSizeSelect.value;
previewTitle.style.fontSize = fontSize;
previewDate.style.fontSize = fontSize;

for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].style.fontSize = fontSize;
}
      }

      eventInput.addEventListener('input', updatePreview);
      recipientInput.addEventListener('input', updatePreview);
      textColorSelect.addEventListener('change', updatePreview);
      fontSizeSelect.addEventListener('change', updatePreview);
      amountInput.addEventListener('input', updatePreview);
      locationSelect.addEventListener('change', updatePreview);
      backgroundColorSelect.addEventListener('change', updatePreview);

      // Initial preview update
      updatePreview();
    });

    // Obtener los elementos de opción de color
var colorOptions = document.getElementsByClassName("color-option");
var colorPicker = document.getElementById("background-color-picker");

// Agregar un evento de clic a cada opción de color
for (var i = 0; i < colorOptions.length; i++) {
  colorOptions[i].addEventListener("click", function () {
    var selectedColor = this.style.backgroundColor;

    // Actualizar el color de fondo de la tarjeta de vista previa
    var cardPreview = document.getElementById("preview-card");
    cardPreview.style.backgroundColor = selectedColor;

    // Actualizar el valor del selector de color
    colorPicker.value = selectedColor;
  });
}

// Agregar un evento de cambio al selector de color
colorPicker.addEventListener("change", function () {
  var selectedColor = this.value;

  // Actualizar el color de fondo de la tarjeta de vista previa
  var cardPreview = document.getElementById("preview-card");
  cardPreview.style.backgroundColor = selectedColor;
});

