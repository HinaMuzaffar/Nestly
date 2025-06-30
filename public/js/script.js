// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// event listener for flat picker check-in & check-out dates
document.addEventListener("DOMContentLoaded", function () {
  const checkOutPicker = flatpickr("#checkOut", {
    dateFormat: "Y-m-d",
    minDate: "today",
  });

  flatpickr("#checkIn", {
    dateFormat: "Y-m-d",
    minDate: "today",
    onChange: function (selectedDates, dateStr) {
      checkOutPicker.set("minDate", dateStr);
    },
  });
});
